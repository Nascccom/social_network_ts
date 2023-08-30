import {AUTH, ThunkActionType, ThunkDispatchType} from "../types.ts";
import {authAPI} from "../../api/api.ts";

const initialState = {
    userId: 0 as number,
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
    rememberMe: false,
    errorMessageSubmit: '',
}

export const authReducer = (
  state: InitialAuthStateType = initialState,
  action: AuthActionTypes
): InitialAuthStateType => {
    switch (action.type) {
        case AUTH.SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case AUTH.STOP_SUBMIT:
            return {
                ...state,
                errorMessageSubmit: action.errorMessageSubmit
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

export const stopSubmitAC = (errorMessageSubmit: string) => ({
    type: AUTH.STOP_SUBMIT,
    errorMessageSubmit
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
            dispatch(stopSubmitAC(''))
        } else {
            dispatch(stopSubmitAC(response.messages[0]))
        }
    }
}


//TYPES
export type AuthActionTypes =
  | ReturnType<typeof setAuthDataAC>
  | ReturnType<typeof stopSubmitAC>

export type InitialAuthStateType = typeof initialState