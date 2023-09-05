import style from "./Contact.module.css";
import {FC, memo} from "react";
import {NavLink} from "react-router-dom";
import {UserAvatar} from "../../../../common/UserAvatar/UserAvatar.tsx";

export const Contact: FC<PropsType> = memo(({
                                           id,
                                           sex,
                                           photo,
                                           name,
                                           email,
                                       }) => {

    return (
      <div className={style.contact}>
          <UserAvatar photo={photo} sex={sex} alt={name} styles={style.avatar}/>

          <div className={style.contactInfo}>
              <div className={style.name}>
                  <NavLink to={`/dialogs/${id}`} >
                      {name}
                  </NavLink>
              </div>
              <div className={style.email}>
                  {email}
              </div>
          </div>
      </div>
    );
});

type PropsType = {
    id: string
    sex: "male" | "female"
    photo: string
    name: string
    email: string
}
