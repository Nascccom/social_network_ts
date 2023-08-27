import {AUTH, ThunkActionType, ThunkDispatchType} from "../types.ts";
import {authAPI} from "../../api/api.ts";

const initialState = {
    userId: null as null | number,
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
    rememberMe: false,
    isSubmitted: false,
    errorMessageSubmit: ''
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionTypes): InitialStateType => {
    switch (action.type) {
        case AUTH.SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}


// ActionCreators
export const setAuthDataAC = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: AUTH.SET_AUTH_DATA,
    payload: {
        userId: id,
        email,
        login,
        isAuth
    }
}) as const

export const stopSubmitAC = (isSubmitted: boolean, errorMessageSubmit: string) => ({
    type: AUTH.STOP_SUBMIT,
    payload: {
        isSubmitted,
        errorMessageSubmit
    }
}) as const


//THUNK CREATORS
export const getAuthMeTC = (): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        const response = await authAPI.getAuthMe()
        if (response.resultCode === 0) {
            const {id, email, login} = response.data
            dispatch(setAuthDataAC(id, email, login, true))
        }
    }
}

export const logoutTC = (): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        const response = await authAPI.logoutAuth()
        if (response.resultCode === 0) {
            dispatch(setAuthDataAC(0, '', '', false))
        }
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        const response = await authAPI.loginAuth(email, password, rememberMe)
        if (response.resultCode === 0) {
            dispatch(getAuthMeTC())
            dispatch(stopSubmitAC(false, ''))
        } else {
            dispatch(stopSubmitAC(true, 'You entered an incorrect email or password'))
        }
    }
}


//TYPES
export type AuthActionTypes =
  | ReturnType<typeof setAuthDataAC>
  | ReturnType<typeof stopSubmitAC>

export type InitialStateType = typeof initialState