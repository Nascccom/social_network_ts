import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit"
import {profileReducer} from "./reducers/profileReducer.ts";

const rootReducer = combineReducers({
    profileData: profileReducer
})

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;

