import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit"
import {profileReducer} from "./reducers/profileReducer.ts";
import {usersReducer} from "./reducers/usersReducer.ts";
import {authReducer} from "./reducers/authReducer.ts";

const rootReducer = combineReducers({
    authData: authReducer,
    profileData: profileReducer,
    usersData: usersReducer,
})

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;

