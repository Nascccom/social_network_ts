import {RootState} from "./store.ts";
import {ThunkDispatch, ThunkAction} from "redux-thunk"
import {ProfileActionType} from "./reducers/profileReducer.ts";
import {AuthActionTypes} from "./reducers/authReducer.ts";
import {UsersActionType} from "./reducers/usersReducer.ts";
import {GroupsActionType} from "./reducers/groupsReducer.ts";

type ActionTypeForApp =
  | ProfileActionType
  | AuthActionTypes
  | UsersActionType
  | GroupsActionType

export type ThunkActionType = ThunkAction<void, RootState, unknown, ActionTypeForApp>
export type ThunkDispatchType = ThunkDispatch<RootState, unknown, ActionTypeForApp>

//PROFILE
export enum PROFILE {
    ADD_POST = "ADD-POST",
    DELETE_POST = "DELETE-POST",
    SET_PROFILE = 'SET-PROFILE',
    SET_STATUS = 'SET-STATUS',
    CLICK_LIKE_OR_DISLIKE = 'CLICK-LIKE-OR-DISLIKE',
    SET_NEW_PHOTO = 'SET-NEW-PHOTO',
    SET_PROFILE_INFO = 'SET-PROFILE-INFO'
}

//USERS
export enum USERS {
    SET_USERS = "SET-USERS",
    ADD_USERS_MESSAGE = "ADD-USERS-MESSAGE",
    FOLLOW_OR_UNFOLLOW_USERS = "FOLLOW-OR-UNFOLLOW-USERS",
    SET_CURRENT_PAGE = "SET-CURRENT-PAGE",
    SET_TOTAL_COUNT_USERS = "SET-TOTAL-COUNT-USERS",
    TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING",
    TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE-IS-FOLLOWING-IN-PROGRESS",
    FOLLOW_FRIEND = "FOLLOW-FRIEND",
    UNFOLLOW_FRIEND = "UNFOLLOW-FRIEND",
    SHOW_MORE = "SHOW-MORE"
}

//AUTH
export enum AUTH {
    SET_AUTH_DATA = "SET-AUTH-DATA",
    STOP_SUBMIT = "STOP-SUBMIT",
    CHANGE_LOADING_PROCESS = "CHANGE-LOADING-PROCESS"
}

//GROUP
export enum GROUP {
    UNFOLLOW_GROUP = 'UNFOLLOW-GROUP'
}