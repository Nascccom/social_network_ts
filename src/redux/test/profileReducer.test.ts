import {
    addPostAC,
    clickLikeOrDislikeAC,
    deletePostAC,
    InitialProfileStateType,
    profileReducer,
    setNewPhotoAC,
    setProfileAC,
    setProfileInfoAC,
    setStatusAC
} from "../reducers/profileReducer.ts";
import {PhotosType, UpdateInfoProfileType, UserProfileType} from "../../api/api.ts";

let startState: InitialProfileStateType;

beforeEach(() => {
    startState = {
        profile: {
            aboutMe: "I am cool",
            contacts: {
                facebook: "facebook.com",
                github: "github.com",
                instagram: "instagram.com",
                mainLink: "mainLink.com",
                twitter: "twitter.com",
                vk: "vk.com",
                website: "website.com",
                youtube: "youtube.com"
            },
            fullName: "Anastasiya Salimova",
            lookingForAJob: true,
            lookingForAJobDescription: 'I am looking for a job',
            photos: {large: 'largePhoto', small: 'smallPhoto'},
            userId: 1
        },
        posts: [
            {
                id: '1',
                name: "Salimova Anastasiya",
                date: "04.03.2022, 22:03:08",
                text: "One post",
                views: 0,
                comments: 0,
                like: 0,
                dislike: 0,
                isLike: false,
                isDislike: false,
            },
            {
                id: '2',
                name: "Salimova Anastasiya",
                date: "04.03.2022, 22:03:08",
                text: "Two post",
                views: 1,
                comments: 2,
                like: 3,
                dislike: 4,
                isLike: false,
                isDislike: false,
            },
        ],
        status: 'Status'
    }
})

test("post should be added", () => {

    const endState = profileReducer(
      startState, addPostAC("Third post"))

    expect(startState.posts.length).toBe(2);
    expect(endState.posts.length).toBe(3);
    expect(endState.posts[0].text).toBe("Third post");
})

test("post should be removed", () => {

    const endState: InitialProfileStateType = profileReducer(
      startState, deletePostAC("1"))

    expect(startState.posts.length).toBe(2);
    expect(endState.posts.length).toBe(1);
    expect(endState.posts[0].id).toBe("2");
    expect(endState.posts[0].text).toBe("Two post");
})

test("new profile should be set", () => {
    const newProfile: UserProfileType = {
        aboutMe: "It is new person",
        contacts: {
            facebook: "facebook",
            github: "github",
            instagram: "instagram",
            mainLink: "mainLink",
            twitter: "twitter",
            vk: "vk",
            website: "website",
            youtube: "youtube"
        },
        fullName: "Andrey",
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {large: 'large', small: 'small'},
        userId: 2
    }

    const endState: InitialProfileStateType = profileReducer(
      startState, setProfileAC(newProfile))

    expect(endState.profile?.userId).toBe(2);
    expect(endState.profile?.fullName).toBe("Andrey");
})

test("new status should be set", () => {

    const endState: InitialProfileStateType = profileReducer(
      startState, setStatusAC('It is new status'))

    expect(endState.status).toBe('It is new status');
})

test("when we set like, isLike should be true", () => {

    const endState: InitialProfileStateType = profileReducer(
      startState, clickLikeOrDislikeAC('1', 'like'))

    expect(endState.posts[0].like).toBe(1);
    expect(endState.posts[0].isLike).toBe(true);
    expect(endState.posts[0].dislike).toBe(0);
    expect(endState.posts[0].isDislike).toBe(false);
})

test("when we set dislike, isLike should be false", () => {

    const endState: InitialProfileStateType = profileReducer(
      startState, clickLikeOrDislikeAC('1', 'dislike'))

    expect(endState.posts[0].like).toBe(0);
    expect(endState.posts[0].isLike).toBe(false);
    expect(endState.posts[0].dislike).toBe(1);
    expect(endState.posts[0].isDislike).toBe(true);
})

test("photo should be changed", () => {
    const newPhoto: PhotosType = {large: 'newLargePhoto', small: 'newSmallPhoto'}

    const endState: InitialProfileStateType = profileReducer(
      startState, setNewPhotoAC(newPhoto))

    expect(endState.profile?.photos.large).toBe('newLargePhoto');
    expect(endState.profile?.photos.small).toBe('newSmallPhoto');
})

test("profile info should be changed", () => {
    const newInfo: UpdateInfoProfileType = {
        userId: 1,
        fullName: 'Artem',
        lookingForAJob: true,
        lookingForAJobDescription: 'No found a job',
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainLink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null
        },
    }

    const endState: InitialProfileStateType = profileReducer(
      startState, setProfileInfoAC(newInfo))

    expect(endState.profile?.userId).toBe(1);
    expect(endState.profile?.fullName).toBe('Artem');
    expect(endState.profile?.lookingForAJob).toBe(true);
    expect(endState.profile?. lookingForAJobDescription).toBe('No found a job');
})
