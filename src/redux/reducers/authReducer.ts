import {AUTH, ThunkActionType, ThunkDispatchType} from "../types.ts";
import {authAPI, RESULT_CODES} from "../../api/api.ts";

const initialState = {
    userId: 0 as number,
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
    rememberMe: false,
    errorMessageSubmit: '',
    isLoading: 'loading' as LoadingProcessType
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
        case AUTH.CHANGE_LOADING_PROCESS:
            return {
                ...state,
                isLoading: action.loadingValue
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

export const changeLoadingProcess = (loadingValue: LoadingProcessType) => ({
    type: AUTH.CHANGE_LOADING_PROCESS,
    loadingValue
}) as const


//THUNK CREATORS
export const getAuthMeTC = (): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(changeLoadingProcess('loading'))
        const response = await authAPI.getAuthMe()

        try {
            if (response.resultCode === RESULT_CODES.SUCCESS) {
                const {id, email, login} = response.data
                dispatch(setAuthDataAC(id, email, login, true))
            }
        } catch (e) {
            dispatch(stopSubmitAC('error'))
        } finally {
            dispatch(changeLoadingProcess('success'))
        }

    }
}

export const logoutTC = (): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(changeLoadingProcess('loading'))
        const response = await authAPI.logoutAuth()
        if (response.resultCode === RESULT_CODES.SUCCESS) {
            dispatch(setAuthDataAC(0, '', '', false))
            dispatch(changeLoadingProcess('success'))
        }
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(changeLoadingProcess('loading'))
        const response = await authAPI.loginAuth(email, password, rememberMe)
        if (response.resultCode === RESULT_CODES.SUCCESS) {
            dispatch(getAuthMeTC())
            dispatch(stopSubmitAC(''))
            dispatch(changeLoadingProcess('success'))
        } else {
            dispatch(stopSubmitAC(response.messages[0]))
            dispatch(changeLoadingProcess('error'))
        }
    }
}


//TYPES
export type AuthActionTypes =
  | ReturnType<typeof setAuthDataAC>
  | ReturnType<typeof stopSubmitAC>
  | ReturnType<typeof changeLoadingProcess>

export type InitialAuthStateType = typeof initialState

export type LoadingProcessType = 'loading' | 'success' | 'error' | 'idle'