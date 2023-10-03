import {RootState} from "../store.ts";
import {Provider} from "react-redux";
import {ReactNode} from "react";
import {HashRouter} from "react-router-dom";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../reducers/authReducer.ts";
import {profileReducer} from "../reducers/profileReducer.ts";
import {usersReducer} from "../reducers/usersReducer.ts";
import {groupsReducer} from "../reducers/groupsReducer.ts";

const storybookRootState: RootState = {
    authData: {
        userId: 1,
        login: 'Ruslan',
        email: 'ruslan_push@bk.com',
        isAuth: false,
        rememberMe: false,
        errorMessageSubmit: '',
        isLoading: 'idle'
    },
    profileData: {
        profile: {
            aboutMe: 'I am strong',
            contacts: {
                facebook: 'facebook.com',
                github: 'github.com',
                instagram: 'instagram.com',
                mainLink: 'mainLink.ru',
                twitter: 'twitter.ru',
                vk: 'vk.ru',
                website: 'website.com',
                youtube: 'youtube.ru'
            },
            fullName: "Salimova Anastasiya",
            lookingForAJob: true,
            lookingForAJobDescription: "I am a fronted-developer",
            photos: {small: '', large: ''},
            userId: 1
        },
        posts: [
            {
                id: '1',
                name: "Salimova Anastasiya",
                date: "08.03.2022, 22:03:08",
                text: "Ум работает острее и четче в постоянном одиночестве. ",
                views: 101,
                comments: 12,
                like: 6,
                dislike: 2,
                isLike: false,
                isDislike: false,
            },
            {
                id: '2',
                name: "Salimova Anastasiya",
                date: "04.03.2022, 22:06:08",
                text: "Я не думаю, что есть чувство, проходящее через человеческое сердце",
                views: 120,
                comments: 405,
                like: 60,
                dislike: 10,
                isLike: false,
                isDislike: false,
            }
        ],
        status: 'I love',
    },
    usersData: {
        users: [
            {
                id: '1',
                sex: "female",
                name: 'Katya Salimova',
                photo: '',
                followed: true,
                status: 'Life is cool',
                email: 'ttt_0a@bk.ru',
                messages: [
                    {id: '1', message: 'Hello! How are you?'},
                    {id: '2', message: 'I love you!'},
                    {id: '3', message: 'Yo'},
                ]
            },
            {
                id: '2',
                sex: "male",
                name: 'Ruslan Smirnov',
                photo: '',
                followed: true,
                status: 'Ooops!',
                email: 'ruslan@mail.ru',
                messages: [
                    {id: '1', message: 'Hello!'},
                    {id: '2', message: 'You are crazy!'},
                ]
            },
            {
                id: '3',
                sex: "male",
                name: 'Sima',
                photo: '',
                followed: true,
                status: '',
                email: 'sima@mail.ru',
                messages: [
                    {id: '1', message: 'No problem!'},
                    {id: '2', message: 'You are crazy!'},
                ]
            },
        ],
        foundFriends: [],
        currentPage: 1,
        pageSize: 5,
        totalCountUsers: 10,
        isFetching: false,
        isFollowingInProgress: [] as string[]
    },
    groupsData: [
        {id: 'Barcelona', nameGroup: 'Barcelona', type: 'Private', subscribers: 56, followed: true, logo: ''},
        {id: 'France', nameGroup: 'France', type: 'Public', subscribers: 560, followed: true, logo: ''},
        {id: 'Egypt', nameGroup: 'Egypt', type: 'Public', subscribers: 47, followed: true, logo: ''},
        {id: 'Russia', nameGroup: 'Russia', type: 'Private', subscribers: 800, followed: false, logo: ''},
        {id: 'Mexico', nameGroup: 'Mexico', type: 'Public', subscribers: 274, followed: false, logo: ''},
        {id: 'Australia', nameGroup: 'Australia', type: 'Private', subscribers: 6, followed: true, logo: ''},
    ]
}

export const mockStore = (storyFn: () => ReactNode) => {

    return (
      <HashRouter>
          <Provider
            store={configureStore({
                reducer: combineReducers({
                    authData: authReducer,
                    profileData: profileReducer,
                    usersData: usersReducer,
                    groupsData: groupsReducer,
                }),
                preloadedState: storybookRootState,
            })}
          >
              {storyFn()}
          </Provider>
      </HashRouter>
    );
};