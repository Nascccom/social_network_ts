import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit"

const rootReducer = combineReducers({

})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;

