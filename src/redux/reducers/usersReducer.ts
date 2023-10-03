import {v1} from "uuid";
import {ThunkActionType, ThunkDispatchType, USERS} from "../types.ts";
import {RESULT_CODES, usersAPI} from "../../api/api.ts";

const initialState = {
    users: [
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
    currentPage: 1,
    pageSize: 10,
    totalCountUsers: 0,
    isFetching: false,
    isFollowingInProgress: [] as string[]
}

export const usersReducer = (state: InitialUsersStateType = initialState, action: UsersActionType): InitialUsersStateType => {
    switch (action.type) {
        case USERS.FOLLOW_OR_UNFOLLOW_USERS:
            return {
                ...state,
                users: state.users.map(f => f.id === action.userId
                  ? {...f, followed: action.follow}
                  : f
                )
            }
        case USERS.SET_USERS:
            return {
                ...state, foundFriends: [
                    ...state.foundFriends,
                    ...action.users
                ]
            }
        case USERS.ADD_USERS_MESSAGE:
            return {
                ...state,
                users: state.users.map(f => f.id === action.userId
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
        case USERS.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case USERS.SET_TOTAL_COUNT_USERS:
            return {
                ...state,
                totalCountUsers: action.totalCountUsers
            }
        case USERS.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case USERS.TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
                  ? [...state.isFollowingInProgress, action.userId]
                  : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        case USERS.FOLLOW_FRIEND:
            return {
                ...state,
                foundFriends: state.foundFriends.map(f => f.id === action.userId
                  ? {...f, followed: true}
                  : f
                )
            }
        case USERS.UNFOLLOW_FRIEND:
            return {
                ...state,
                foundFriends: state.foundFriends.map(f => f.id === action.userId
                  ? {...f, followed: false}
                  : f
                )
            }
        case USERS.SHOW_MORE:
            return {
                ...state,
                pageSize: state.pageSize + 10
            }
        default:
            return state
    }
}


//ACTION CREATORS
export const followOrUnfollowUsersAC = (userId: string, follow: boolean) => ({
    type: USERS.FOLLOW_OR_UNFOLLOW_USERS, userId, follow
}) as const

export const setUsersAC = (users: FriendType[]) => ({type: USERS.SET_USERS, users}) as const

export const addMessageAC = (userId: string, newMessage: string) => {
    console.log(userId, newMessage)
    return ({
        type: USERS.ADD_USERS_MESSAGE, userId, newMessage
    }) as const
}

export const setCurrentPageAC = (currentPage: number) => ({type: USERS.SET_CURRENT_PAGE, currentPage}) as const

export const setTotalCountUsersAC = (totalCountUsers: number) => ({
    type: USERS.SET_TOTAL_COUNT_USERS,
    totalCountUsers
}) as const

export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: USERS.TOGGLE_IS_FETCHING, isFetching
}) as const

export const toggleIsFollowingInProgressAC = (userId: string, isFollowingInProgress: boolean) => ({
    type: USERS.TOGGLE_IS_FOLLOWING_IN_PROGRESS, userId, isFollowingInProgress
}) as const

export const followingUserAC = (userId: string) => ({type: USERS.FOLLOW_FRIEND, userId}) as const

export const unfollowingUserAC = (userId: string) => ({type: USERS.UNFOLLOW_FRIEND, userId}) as const

export const showMoreAC = () => ({type: USERS.SHOW_MORE}) as const


//THUNK CREATORS
export const getUsersTC = (currentPage: number, pageSize: number): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        try {
            dispatch(toggleIsFetchingAC(true))
            const response = await usersAPI.getUsers(pageSize, currentPage)

            const users: FriendType[] = response.items.map(u => {
                return {
                    id: u.id,
                    sex: "male",
                    name: u.name,
                    photo: !u.photos.small ? '' : u.photos.small,
                    followed: u.followed,
                    status: !u.status ? "No status" : u.status,
                    email: `${u.name.replace(' ', "_").toLowerCase()}@mail.ru`,
                    messages: []
                }
            })

            dispatch(setUsersAC(users))
            dispatch(setTotalCountUsersAC(response.totalCount))
        }
        finally {
            dispatch(toggleIsFetchingAC(false))
        }
    }
}

export const followingUserTC = (userId: string): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(toggleIsFollowingInProgressAC(userId, true))

        const response = await usersAPI.followingUser(userId)
        if (response.resultCode === RESULT_CODES.SUCCESS) {
            dispatch(followingUserAC(userId))
            dispatch(toggleIsFollowingInProgressAC(userId, false))
        }
    }
}

export const unfollowingUserTC = (userId: string): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(toggleIsFollowingInProgressAC(userId, true))

        const response = await usersAPI.unfollowingUser(userId)
        if (response.resultCode === RESULT_CODES.SUCCESS) {
            dispatch(unfollowingUserAC(userId))
            dispatch(toggleIsFollowingInProgressAC(userId, false))
        }
    }
}


//TYPES
export type UsersActionType =
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof followOrUnfollowUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalCountUsersAC>
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleIsFollowingInProgressAC>
  | ReturnType<typeof followingUserAC>
  | ReturnType<typeof unfollowingUserAC>
  | ReturnType<typeof showMoreAC>

export type InitialUsersStateType = typeof initialState

export type FriendType = {
    id: string
    sex: SexType
    name: string
    photo: string
    followed: boolean
    status: string
    email: string
    messages: MessageType[]
}

export type SexType = "male" | "female"

export type MessageType = {
    id: string
    message: string
}




