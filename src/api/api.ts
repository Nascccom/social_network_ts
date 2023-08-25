import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ebfb5f07-e710-4065-9ddd-9255b91b910e'
    }
});

export const authAPI = {
    getAuthMe: () => {
        return instance.get<ResponseType<AuthMeData>>(`auth/me`)
          .then(res => res.data)
    },
}

export const profileAPI = {
    getProfile (userId: string) {
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    getStatus: (userId: string) => {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put<ResponseType<string>>(`/profile/status`, {status})
          .then(res => res.data)
    }
}

export const usersAPI = {
    getUsers: (pageSize: number = 1, currentPage: number = 10) => {
        return instance.get<GetResponseUsersType>(`users?count=${pageSize}&page=${currentPage}`)
          .then(res => res.data)
    },
    followingUser: (userId: number) => {
        return instance.post<ResponseType>(`follow/${userId}`, {})
          .then(res => res.data)
    },
    unfollowingUser: (userId: number) => {
        return instance.delete<ResponseType>(`follow/${userId}`)
          .then(res => res.data)
    }
}

//TYPES

export type ResponseType<T={}> = {
    resultCode: number
    messages: string[]
    data: T
    fieldsErrors: string[]
}

export type AuthMeData = {
    id: number
    login: string
    email: string
}

export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string, large: string }
    userId: number
}

export type ContactsType = {
    facebook: null | string
    github: null | string
    instagram: null | string
    mainLink: null | string
    twitter: null | string
    vk: null | string
    website: null | string
    youtube: null | string
}

export type GetResponseUsersType = {
    items: []
    totalCount: number
    error: null
}