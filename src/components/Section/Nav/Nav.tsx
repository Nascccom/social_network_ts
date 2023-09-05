import style from "./Nav.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faCircleUser,
    faEnvelope,
    faImage,
    faRightFromBracket,
    faUser,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
import {NavLink} from "react-router-dom";
import {FC, memo} from "react";
import {TitleWithUnderLine} from "../../../common/TitleWithUnderLine/TitleWithUnderLine.tsx";
import {SectionCSSType} from "../../../App.tsx";
import {useAppDispatch} from "../../../hooks/useAppDispatch.ts";
import {logoutTC} from "../../../redux/reducers/authReducer.ts";

export const Nav: FC<PropsType> = memo(({section, changePageLayout, showContacts}) => {
    const dispatch = useAppDispatch()

    if (section === "sectionLogout" || section === "sectionError") {
        return null
    }

    const onClickLogoutHandler = () => {
        dispatch(logoutTC())
    }

    return (
      <div className={style.nav}>
          <TitleWithUnderLine title={'Tabs'}/>

          <div className={style.link}>
              <FontAwesomeIcon icon={faCircleUser} size="lg" pull="left"/>
              <NavLink to="profile"
                       onClick={() => changePageLayout("sectionAll")}>Home</NavLink>
          </div>

          {showContacts && (
            <div className={style.link}>
                <FontAwesomeIcon icon={faImage} size="lg" pull="left" />
                <NavLink to="contacts" onClick={() => changePageLayout("sectionDialogs")}>
                    Contacts
                </NavLink>
            </div>
          )}

          <div className={style.link}>
              <FontAwesomeIcon icon={faEnvelope} size="lg" pull="left"/>
              <NavLink to="dialogs"
                       onClick={() => changePageLayout("sectionDialogs")}>Dialogs</NavLink>
          </div>
          <div className={style.link}>
              <FontAwesomeIcon icon={faUser} size="lg" pull="left"/>
              <NavLink to="friends"
                       onClick={() => changePageLayout("sectionAll")}>Friends</NavLink>
          </div>
          <div className={style.link}>
              <FontAwesomeIcon icon={faUserGroup} size="lg" pull="left"/>
              <NavLink to="groups"
                       onClick={() => changePageLayout("sectionAll")}>Groups</NavLink>
          </div>
          <div className={style.link}>
              <FontAwesomeIcon icon={faImage} size="lg" pull="left"/>
              <NavLink to="photos"
                       onClick={() => changePageLayout("sectionAll")}>Photos</NavLink>
          </div>

          <div className={style.link}>
              <FontAwesomeIcon
                icon={faRightFromBracket} size="lg" pull="left"/>
              <NavLink to="logout"
                       onClick={onClickLogoutHandler}>Logout</NavLink>
          </div>
      </div>
    );
});

type PropsType = {
    section: SectionCSSType
    changePageLayout: (value: SectionCSSType) => void
    showContacts: boolean
}