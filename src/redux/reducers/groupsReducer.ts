import {v1} from "uuid";
import {GROUP} from "../types.ts";


const initialState = [
    {id: v1(), nameGroup: 'Barcelona', type: 'Private', subscribers: 56, followed: true, logo: ''},
    {id: v1(), nameGroup: 'France', type: 'Public', subscribers: 560, followed: true, logo: ''},
    {id: v1(), nameGroup: 'Egypt', type: 'Public', subscribers: 47, followed: true, logo: ''},
    {id: v1(), nameGroup: 'Russia', type: 'Private', subscribers: 800, followed: true, logo: ''},
    {id: v1(), nameGroup: 'Mexico', type: 'Public', subscribers: 274, followed: true, logo: ''},
    {id: v1(), nameGroup: 'Australia', type: 'Private', subscribers: 6, followed: true, logo: ''},
] as GroupType[]

export const groupsReducer = (state: InitialStateType = initialState, action: GroupsActionType) => {
    switch (action.type) {
        case "UNFOLLOW-GROUP":
            return state.filter(g => g.id !== action.id)
        default:
            return state
    }
}

export const unfollowGroupAC = (id: string) => ({type: GROUP.UNFOLLOW_GROUP, id}) as const


//TYPES
export type GroupsActionType = ReturnType<typeof unfollowGroupAC>

type InitialStateType = typeof initialState

export type GroupType = {
    id: string
    nameGroup: string
    type: CategoryType
    subscribers: number
    followed: boolean
    logo: string
}

export type CategoryType = 'Private' | 'Public'