import style from "./Contact.module.css";
import {FC} from "react";
import {NavLink} from "react-router-dom";
import {UserAvatar} from "../../../../common/UserAvatar/UserAvatar.tsx";

export const Contact: FC<PropsType> = ({
                                           id,
                                           sex,
                                           photo,
                                           name,
                                           email,
                                           setFriendId
                                       }) => {

    const onClickContactHandler = () => {
        if (setFriendId) {
            setFriendId(id)
        }
    }

    return (
      <div className={style.contact}>
          <UserAvatar photo={photo} sex={sex} alt={name} styles={style.avatar}/>

          <div className={style.contactInfo}>
              <div className={style.name}>
                  <NavLink to={`/dialogs/${id}`} onClick={onClickContactHandler}>
                      {name}
                  </NavLink>
              </div>
              <div className={style.email}>
                  {email}
              </div>
          </div>
      </div>
    );
};

type PropsType = {
    id: string
    sex: "male" | "female"
    photo: string
    name: string
    email: string
    setFriendId?: (friendId: string) => void
}
