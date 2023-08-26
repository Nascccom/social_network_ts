import {AUTH, ThunkActionType, ThunkDispatchType} from "../types.ts";
import {authAPI} from "../../api/api.ts";

const initialState = {
    userId: null as null | number,
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionTypes): InitialStateType => {
    switch (action.type) {
        case AUTH.SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}


// ActionCreators
export const setAuthDataAC = (id: number, email: string, login: string) => ({
    type: AUTH.SET_AUTH_DATA,
    payload: {
        userId: id,
        email,
        login
    }
}) as const


//THUNK CREATORS
export const getAuthMeTC = (): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        const response = await authAPI.getAuthMe()
        if (response.resultCode === 0) {
            const {id, email, login} = response.data
            dispatch(setAuthDataAC(id, email, login))
        }
    }
}

//TYPES
export type AuthActionTypes =
  | ReturnType<typeof setAuthDataAC>

export type InitialStateType = typeof initialState