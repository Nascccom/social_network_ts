import {v1} from "uuid";
import {USERS} from "../types.ts";

const initialState = {
    friends: [
        {
            id: v1(),
            sex: "female",
            name: 'Katya Salimova',
            photo: '',
            followed: true,
            status: 'Life is cool',
            email: 'ttt_0a@bk.ru',
            messages: [
                {id: v1(), message: 'Hello! How are you?'},
                {id: v1(), message: 'I love you!'},
                {id: v1(), message: 'Yo'},
            ]
        },
        {
            id: v1(),
            sex: "male",
            name: 'Ruslan Smirnov',
            photo: '',
            followed: true,
            status: 'Ooops!',
            email: 'ruslan@mail.ru',
            messages: [
                {id: v1(), message: 'Hello!'},
                {id: v1(), message: 'You are crazy!'},
            ]
        },
        {
            id: v1(),
            sex: "male",
            name: 'Artem Gurin',
            photo: '',
            followed: true,
            status: 'Doctor!',
            email: 'tatatumba@mail.ru',
            messages: [
                {id: v1(), message: 'You like it?!'},
                {id: v1(), message: 'No, of course!'},
            ]
        },
        {
            id: v1(),
            sex: "male",
            name: 'Vasya Bond',
            photo: '',
            followed: true,
            status: 'BlaBla!',
            email: 'vasyabond@mail.ru',
            messages: []
        },
        {
            id: v1(),
            sex: "male",
            name: 'Maks Rubik',
            photo: '',
            followed: true,
            status: 'School!',
            email: 'maksim@gmail.com',
            messages: []
        },
        {
            id: v1(),
            sex: "male",
            name: 'Matte Salimov',
            photo: '',
            followed: true,
            status: 'Kill you!',
            email: 'matte_salimov@gmail.com',
            messages: []
        },
        {
            id: v1(),
            sex: "female",
            name: 'Sophi Loran',
            photo: '',
            followed: true,
            status: 'Singer!',
            email: 'loren1995@gmail.com',
            messages: []
        },
        {
            id: v1(),
            sex: "female",
            name: 'Marusya Bulkina',
            photo: '',
            followed: true,
            status: 'Top!',
            email: 'smara@gmail.com',
            messages: []
        },
        {
            id: v1(),
            sex: "male",
            name: 'Papa Jons',
            photo: '',
            followed: true,
            status: 'Pizza forever!',
            email: 'papaJons@gmail.com',
            messages: []
        },
        {
            id: v1(),
            sex: "male",
            name: 'Vova Salimov',
            photo: '',
            followed: true,
            status: 'Yo!',
            email: 'vovan@gmail.com',
            messages: []
        },
        {
            id: v1(),
            sex: "female",
            name: 'Stasya Lis',
            photo: '',
            followed: false,
            status: 'Mom!',
            email: 'lisa@gmail.com',
            messages: [
                {id: v1(), message: 'Hello!'},
                {id: v1(), message: 'You are crazy!'},
            ]
        },
        {
            id: v1(),
            sex: "female",
            name: 'Stas Lis',
            photo: '',
            followed: false,
            status: 'Mom!',
            email: 'StasSOS@gmail.com',
            messages: [
                {id: v1(), message: 'Bye!'},
                {id: v1(), message: 'English!'},
            ]
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
        case USERS.ADD_USERS_MESSAGE:
            return {
                ...state,
                friends: state.friends.map(f => f.id === action.userId
                  ? {
                      ...f,
                      messages: [...f.messages, {
                          id: v1(),
                          message: action.newMessage
                      }]
                  }
                  : f
                )
            }
        case USERS.FOLLOW_OR_UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(f => f.id === action.userId
                  ? {...f, followed: action.follow}
                  : f
                )
            }
        default:
            return state
    }
}


//ACTION CREATORS
export const setUsersAC = (friends: FriendType[]) => ({type: USERS.SET_USERS, friends}) as const

export const addMessageAC = (userId: string, newMessage: string) => {
    console.log(userId, newMessage)
    return ({
        type: USERS.ADD_USERS_MESSAGE, userId, newMessage
    }) as const
}

export const followOrUnfollowAC = (userId: string, follow: boolean) => ({
    type: USERS.FOLLOW_OR_UNFOLLOW, userId, follow
}) as const


//TYPES
export type UsersActionType =
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof followOrUnfollowAC>

type InitialStateType = typeof initialState

export type FriendType = {
    id: string,
    sex: "male" | "female"
    name: string,
    photo: string,
    followed: boolean,
    status: string,
    email: string,
    messages: MessageType[]
}

export type MessageType = {
    id: string
    message: string
}




