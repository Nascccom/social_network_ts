import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ebfb5f07-e710-4065-9ddd-9255b91b910e',
    }
});

export const authAPI = {
    getAuthMe: async () => {
        const res = await instance.get<ResponseType<AuthMeDataType>>(`auth/me`);
        return res.data;
    },
    loginAuth: async (email: string, password: string, rememberMe: boolean = false) => {
        const res = await instance
          .post<ResponseType<{ userId: number }>>(`auth/login`, {email, password, rememberMe})
        return res.data;
    },
    logoutAuth: async () => {
        const res = await instance.delete<ResponseType>(`auth/login`)
        return res.data;
    }
}

export const profileAPI = {
    getProfile: async (userId: number) => {
        const res = await instance.get<UserProfileType>(`profile/${userId}`)
        return res.data
    },
    getStatus: async (userId: number) => {
        const res = await instance.get<string>(`profile/status/${userId}`)
        return res.data
    },
    updateStatus: async (status: string) => {
        const res = await instance.put<ResponseType<string>>(`profile/status`, {status});
        return res.data;
    },
    updateProfileInfo: async (info: UpdateInfoProfileType) => {
        const res = await instance.put<ResponseType>('/profile', info)
        return res.data
    },
    updatePhotoProfile: async (newPhoto: File) => {
        const newFormData = new FormData()
        newFormData.append('photo', newPhoto)
        const res = await instance.put<ResponseType<PhotosType>>('profile/photo', newFormData, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        return res.data
    }
}

export const usersAPI = {
    getUsers: async (pageSize: number = 1, currentPage: number = 10) => {
        const res = await instance
          .get<GetResponseUsersType<UserItemType>>(`users?count=${pageSize}&page=${currentPage}`);
        return res.data;
    },
    followingUser: async (userId: string) => {
        const res = await instance.post<ResponseType>(`follow/${userId}`, {});
        return res.data;
    },
    unfollowingUser: async (userId: string) => {
        const res = await instance.delete<ResponseType>(`follow/${userId}`);
        return res.data;
    }
}

//TYPES

export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
    fieldsErrors: string[]
}

export type AuthMeDataType = {
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
    photos: PhotosType
    userId: number
}

export type PhotosType = {
    small: string | null
    large: string | null
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

export type GetResponseUsersType<T = {}> = {
    items: T[]
    totalCount: number
    error: null
}

export type UserItemType = {
    followed: boolean
    id: string
    name: string
    photos: PhotosType
    status: null | string
}

export type UpdateInfoProfileType = {
    userId: number
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
}