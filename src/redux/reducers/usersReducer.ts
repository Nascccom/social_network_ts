import {v1} from "uuid";
import {USERS} from "../types.ts";

const initialState = {
    friends: [
        {
            id: v1(),
            sex: "female",
            name: 'Katya Salimova',
            photo: 'Katya Salimova',
            followed: true,
            status: 'Life is cool',
            email: 'ttt_0a@bk.ru'
        } as FriendType,
        {
            id: v1(),
            sex: "male",
            name: 'Ruslan Smirnov',
            photo: 'Ruslan Smirnov',
            followed: true,
            status: 'Ooops!',
            email: 'ruslan@mail.ru'
        },
        {
            id: v1(),
            sex: "male",
            name: 'Artem Gurin',
            photo: 'Artem Gurin',
            followed: true,
            status: 'Doctor!',
            email: 'tatatumba@mail.ru'
        },
        {
            id: v1(),
            sex: "male",
            name: 'Vasya Bond',
            photo: 'Vasya Bond',
            followed: true,
            status: 'BlaBla!',
            email: 'vasyabond@mail.ru'
        },
        {
            id: v1(),
            sex: "male",
            name: 'Maks Rubik',
            photo: 'Maks Rubik',
            followed: true,
            status: 'School!',
            email: 'maksim@gmail.com'
        },
        {
            id: v1(),
            sex: "male",
            name: 'Matte Salimov',
            photo: 'Matte Salimov',
            followed: true,
            status: 'Kill you!',
            email: 'matte_salimov@gmail.com'
        },
        {
            id: v1(),
            sex: "female",
            name: 'Sophi Loran',
            photo: 'Sophi Loran',
            followed: true,
            status: 'Singer!',
            email: 'loren1995@gmail.com'
        },
        {
            id: v1(),
            sex: "female",
            name: 'Marusya Bulkina',
            photo: 'Marusya Bulkina',
            followed: true,
            status: 'Top!',
            email: 'smara@gmail.com'
        },
        {
            id: v1(),
            sex: "male",
            name: 'Papa Jons',
            photo: 'Papa Jons',
            followed: true,
            status: 'Pizza forever!',
            email: 'papaJons@gmail.com'
        },
        {
            id: v1(),
            sex: "male",
            name: 'Vova Salimov',
            photo: 'Vova Salimov',
            followed: true,
            status: 'Yo!',
            email: 'vovan@gmail.com'
        },
    ] as FriendType[],
    foundFriends: [] as FriendType[],
    pageSize: 10,
    totalCount: 0,
    isFetching: false,
    isFollowingInProgress: [] as string[]
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case USERS.SET_USERS:
            return {...state, foundFriends: action.friends}
        default:
            return state
    }
}

export const setUsersAC = (friends: FriendType[]) => ({type: USERS.SET_USERS, friends}) as const

//TYPES
type InitialStateType = typeof initialState

export type FriendType = {
    id: string,
    sex: "male" | "female"
    name: string,
    photo: string,
    followed: boolean,
    status: string,
    email: string
}

type UsersActionType =
    | ReturnType<typeof setUsersAC>


