import {FC} from "react";
import style from './Header.module.css'
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import userAvatar from "../../img/userAvatar.png"

export const Header: FC<HeaderPropsType> = () => {

    const infoProfile = useAppSelector(state => state.profileData.profile)

    return (
      <header className={style.header}>
          <div className={style.container}>
              <div className={style.headerInner}>
                  <a className={style.userAvatar} href="#">
                      <img
                        src={infoProfile?.photos.large ? infoProfile.photos.large : userAvatar} alt="userAvatar"/>
                  </a>


              </div>
          </div>
      </header>
    );
};

// TYPES
type HeaderPropsType = {
    // section: string
}
