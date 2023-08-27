import style from "./Logout.module.css";
import logoutImg from "./../../../../img/logout.webp"
import {LoginForm} from "./LoginForm/LoginForm.tsx";
import {SectionCSSType} from "../../../../App.tsx";
import {FC} from "react";
import {useAppSelector} from "../../../../hooks/useAppSelector.ts";
import {Navigate} from "react-router-dom";

export const Logout: FC<PropsType> = ({changePageLayout}) => {
    const isAuth = useAppSelector<boolean>(state => state.authData.isAuth)

    if (isAuth) {
        changePageLayout('sectionAll')
        return <Navigate to={'/profile'}/>
    }

    return (
      <div className={style.logout}>
          <div className={style.leftPart}>
              <img src={logoutImg} alt={'Wolf'}/>
          </div>

          <div className={style.rightPart}>
              <div className={style.welcomeText}>
                  <h4>Hello, Guy!</h4>
                  <p>Welcome to my social network!</p>
                  <p>Test account</p>
                  <p>Email: free@samuraijs.com</p>
                  <p>Password: free</p>
              </div>

              <LoginForm/>
          </div>
      </div>
    );
};

type PropsType = {
    changePageLayout: (value: SectionCSSType) => void
}
