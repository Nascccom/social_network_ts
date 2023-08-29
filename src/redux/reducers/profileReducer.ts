import {v1} from "uuid";
import {PhotosType, profileAPI, UpdateInfoProfileType, UserProfileType} from "../../api/api.ts";
import {PROFILE, ThunkActionType, ThunkDispatchType} from "../types.ts";


const initialState = {
    profile: null as UserProfileType | null,
    posts: [
        {
            id: v1(),
            name: "Salimova Anastasiya",
            date: "04.03.2022, 22:03:08",
            text: "Ум работает острее и четче в постоянном одиночестве. Оригинальность процветает в уединении, в свободе от внешних воздействий, бьющих нас, чтобы нанести вред творческому разуму. Быть одиноким - вот секрет изобретения. Одиночество - это когда рождаются идеи.",
            views: 101,
            comments: 12,
            like: 6,
            dislike: 2,
            isLike: false,
            isDislike: false,
        } as PostType,
        {
            id: v1(),
            name: "Salimova Anastasiya",
            date: "04.03.2022, 22:03:08",
            text: "Я не думаю, что есть чувство, проходящее через человеческое сердце, подобное тому, что испытывает изобретатель, когда видит какое-то своё творение, ведущее к открытию. Такие эмоции заставляют человека забыть про еду, сон, друзей, любовь и все остальное.",
            views: 120,
            comments: 405,
            like: 60,
            dislike: 10,
            isLike: false,
            isDislike: false,
        } as PostType,
        {
            id: v1(),
            name: "Salimova Anastasiya",
            date: "04.03.2022, 22:03:08",
            text: "Ваше время ограничено, поэтому не тратьте его впустую, проживая чужую жизнь. Не попадайтесь в ловушку догмы - жизнь с результатами мышления других людей. Не позволяйте шуму чужих мнений заглушить ваш внутренний голос. И самое главное, имейте смелость следовать своему сердцу и интуиции.",
            views: 37,
            comments: 4,
            like: 774,
            dislike: 14,
            isLike: false,
            isDislike: false,
        } as PostType,
    ],
    status: '...' as string
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case PROFILE.ADD_POST:
            return {
                ...state,
                posts: [
                    {
                        id: v1(),
                        name: state.profile?.fullName || 'No Name',
                        date: new Date().toLocaleString(),
                        text: action.newText,
                        views: 0,
                        comments: 0,
                        like: 0,
                        dislike: 0,
                        isLike: false,
                        isDislike: false,
                    },
                    ...state.posts],
            }
        case PROFILE.DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.id)}
        case PROFILE.SET_PROFILE:
            return {...state, profile: action.profile}
        case PROFILE.SET_STATUS:
            return {...state, status: action.status}
        case PROFILE.CLICK_LIKE_OR_DISLIKE:
            if (action.name === 'like') {
                return {
                    ...state,
                    posts: state.posts.map(post => post.id === action.id
                      ? {
                          ...post,
                          like: post.like + 1,
                          dislike: post.dislike - (post.isDislike ? 1 : 0),
                          isLike: true,
                          isDislike: false,
                      } : post)
                }
            } else {
                return {
                    ...state,
                    posts: state.posts.map(post => post.id === action.id
                      ? {
                          ...post,
                          like: post.like - (post.isLike ? 1 : 0),
                          dislike: post.dislike + 1,
                          isLike: false,
                          isDislike: true,
                      } : post)
                }
            }
        case PROFILE.SET_NEW_PHOTO:
            if (state.profile !== null) {
                return {
                    ...state, profile: {
                        ...state.profile,
                        photos: action.photo
                    }
                }
            }
            return state
        case PROFILE.SET_PROFILE_INFO:
            if (state.profile !== null) {
                return {...state, profile: {...state.profile, ...action.info}}
            }
            return state
        default:
            return state
    }
}

// ActionCreator
export const addPostAC = (newText: string) => ({type: PROFILE.ADD_POST, newText}) as const

export const deletePostAC = (id: string) => ({type: PROFILE.DELETE_POST, id}) as const

export const setProfileAC = (profile: UserProfileType) => ({type: PROFILE.SET_PROFILE, profile}) as const

export const setStatusAC = (status: string) => ({type: PROFILE.SET_STATUS, status}) as const

export const clickLikeOrDislikeAC = (id: string, name: string) => ({
    type: PROFILE.CLICK_LIKE_OR_DISLIKE, id, name
}) as const

export const setNewPhotoAC = (photo: PhotosType) => ({type: PROFILE.SET_NEW_PHOTO, photo}) as const

export const setProfileInfoAC = (info: UpdateInfoProfileType) => ({type: PROFILE.SET_PROFILE_INFO, info}) as const



//Thunk Creator
export const getUserProfileTC = (userId: number): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setProfileAC(response))
    }
}

export const getStatusTC = (userId: number): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        const status = await profileAPI.getStatus(userId)

        if (status) {
            dispatch(setStatusAC(status))
        } else {
            dispatch(setStatusAC("Set status"))
        }
    }
}

export const updateStatusTC = (status: string): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        const response = await profileAPI.updateStatus(status)
        dispatch(setStatusAC(response.data))
    }
}

export const updatePhotoTC = (photo: File): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        const response = await profileAPI.updatePhotoProfile(photo)

        if (response.resultCode === 0) {
            dispatch(setNewPhotoAC(response.data))
        }
    }
}

export const updateProfileInfoTC = (info: UpdateInfoProfileType) => {
    return async (dispatch: ThunkDispatchType) => {
        const response = await profileAPI.updateProfileInfo(info)

        if (response.resultCode === 0) {
            dispatch(setProfileInfoAC(info))
        }
    }
}

//TYPES
export type ProfileActionType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof setProfileAC>
  | ReturnType<typeof setStatusAC>
  | ReturnType<typeof clickLikeOrDislikeAC>
  | ReturnType<typeof setNewPhotoAC>
  | ReturnType<typeof setProfileInfoAC>

export type InitialStateType = typeof initialState

export type PostType = {
    id: string
    name: string
    text: string
    date: string
    views: number
    comments: number
    like: number
    dislike: number
    isLike: boolean
    isDislike: boolean
}



