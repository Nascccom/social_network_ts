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

export const Nav = () => {
    return (
      <div className={style.nav}>
          <p className={style.title}>Tabs</p>
          <div className={style.link}>
              <FontAwesomeIcon icon={faCircleUser} size="lg" pull="left"/>
              <NavLink to="profile">My Page</NavLink>
          </div>
          <div className={style.link}>
              <FontAwesomeIcon icon={faEnvelope} size="lg" pull="left"/>
              <NavLink to="dialogs">Dialogs</NavLink>
          </div>
          <div className={style.link}>
              <FontAwesomeIcon icon={faUser} size="lg" pull="left"/>
              <NavLink to="friends">Friends</NavLink>
          </div>
          <div className={style.link}>
              <FontAwesomeIcon icon={faUserGroup} size="lg" pull="left"/>
              <NavLink to="groups">Groups</NavLink>
          </div>
          <div className={style.link}>
              <FontAwesomeIcon icon={faImage} size="lg" pull="left"/>
              <NavLink to="photos">Photos</NavLink>
          </div>
          <div className={style.link}>
              <FontAwesomeIcon icon={faRightFromBracket} size="lg" pull="left"/>

          </div>
      </div>
    );
};