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
                                                setFriendId
                                            }) => {

    const callFriend = () => {
        if (setFriendId) {
            setFriendId(id)
        } else {
            return null
        }
    }

    return (
      <div className={style.contact}>
          <UserAvatar photo={photo} sex={sex} alt={name} styles={style.avatar}/>

          <div className={style.contactInfo}>
              <div className={style.name}>
                  <NavLink to={`/dialogs/${id}`} onClick={callFriend}>
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
    setFriendId?: (friendId: string) => void
}
