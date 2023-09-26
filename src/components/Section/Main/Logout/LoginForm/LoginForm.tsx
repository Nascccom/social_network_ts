import style from "./LoginForm.module.css"
import {SubmitHandler, useForm} from "react-hook-form";
import {loginTC} from "../../../../../redux/reducers/authReducer.ts";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import {memo, useEffect, useRef} from "react";
import {Button} from "../../../../../common/Button/Button.tsx";
import {Checkbox} from "../../../../../common/Checkbox/Checkbox.tsx";


export const LoginForm = memo(() => {
    const dispatch = useAppDispatch()
    const errorMessage = useAppSelector<string>(state => state.authData.errorMessageSubmit)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormInputs>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    })
    const refCheckbox = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        refCheckbox.current.focus();
    }, []);

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        dispatch(loginTC(data.email, data.password, refCheckbox.current.checked))
    };


    return (
      <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
          <div>
              <h2 className={style.title}>Login</h2>

              <input type="email"
                     {...register("email", {required: "This field is required"})}
                     placeholder="Email"
                     className={style.formInput}/>

              {errors.email
                ? (<div className={style.inputError}>{errors.email.message}</div>)
                : (<div className={style.inputError}></div>)}

              <input type="password"
                     {...register("password", {required: "This field is required"})}
                     placeholder="Password"
                     className={style.formInput}/>

              {errors.password
                ? (<div className={style.inputError}>{errors.password.message}</div>)
                : (<div className={style.inputError}></div>)}

              <Checkbox {...register("rememberMe")} ref={refCheckbox}/>
              <span>Remember Me</span>

              {errorMessage
                ? (<div className={style.inputError}>{errorMessage}</div>)
                : (<div className={style.inputError}></div>)}

              <Button name={'LOGIN'} callBack={() => {
              }} styles={style.btn}/>
          </div>
      </form>
    );
});

interface IFormInputs {
    email: string
    password: string
    rememberMe: boolean
}



