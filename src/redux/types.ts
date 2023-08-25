import {RootState} from "./store.ts";
import {ThunkDispatch, ThunkAction} from "redux-thunk"
import {ProfileActionType} from "./reducers/profileReducer.ts";

type ActionTypeForApp = ProfileActionType

export type ThunkActionType = ThunkAction<void, RootState, unknown, ActionTypeForApp>
export type ThunkDispatchType = ThunkDispatch<RootState, unknown, ActionTypeForApp>

//PROFILE
export enum PROFILE {
    ADD_POST = "ADD-POST",
    DELETE_POST = "DELETE-POST",
    SET_PROFILE = 'SET-PROFILE',
    SET_STATUS = 'SET-STATUS',
    CLICK_LIKE_OR_DISLIKE = 'CLICK-LIKE-OR-DISLIKE'
}

//USERS
export enum USERS {
    SET_USERS = "SET-USERS",
}