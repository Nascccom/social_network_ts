import {FC} from "react";
import style from './Header.module.css'
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import userAvatar from "../../img/userAvatar.png"
import {UserAvatar} from "../../common/UserAvatar/UserAvatar.tsx";
import {SectionCSSType} from "../../App.tsx";

export const Header: FC<PropsType> = ({section}) => {
    // const idAuth = useAppSelector(state => state.authReducer.userId)
    const infoProfile = useAppSelector(state => state.profileData.profile)

    if (section === 'sectionLogout') {
        return null
    }

    return (
      <header className={style.header}>
          <div className={style.container}>
              <div className={style.headerInner}>
                  <a href="#">
                      <UserAvatar alt={"userAvatar"}
                                  photo={infoProfile?.photos.large ? infoProfile?.photos.large : userAvatar}
                                  styles={style.userAvatar}/>
                  </a>
              </div>
          </div>
      </header>
    );
};

// TYPES
type PropsType = {
    section: SectionCSSType
}
