import {authReducer, InitialAuthStateType, setAuthDataAC, stopSubmitAC} from "../reducers/authReducer.ts";

describe("Auth Reducer", () => {
    let startState: InitialAuthStateType;
    beforeEach(() => {
        startState = {
            userId: 0,
            login: "",
            email: "",
            isAuth: false,
            rememberMe: false,
            errorMessageSubmit: '',
            isLoading: 'loading'
        }
    });

    test("auth data should be set", () => {
        const email = 'cors@mail.ru'

        const endState = authReducer(
          startState, setAuthDataAC(1, email, 'CORS', true))

        expect(endState.userId).toBe(1);
        expect(endState.email).toBe(email);
        expect(endState.isAuth).toBe(true);
        expect(endState.login).toBe('CORS');
    });

    test("if the login or password is not correct we will get an error", () => {
        const mistake = 'login or password is not correct'

        authReducer(startState, setAuthDataAC(0, '', '', false))
        const endState = authReducer(
          startState, stopSubmitAC(mistake))

        expect(endState.isAuth).toBe(false);
        expect(endState.errorMessageSubmit).toBe(mistake);
    })

})