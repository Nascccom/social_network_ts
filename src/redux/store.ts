import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit"
import {profileReducer} from "./reducers/profileReducer.ts";
import {usersReducer} from "./reducers/usersReducer.ts";

const rootReducer = combineReducers({
    profileData: profileReducer,
    usersData: usersReducer
})

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;

