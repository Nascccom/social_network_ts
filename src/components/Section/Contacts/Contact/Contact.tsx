import style from "./Contact.module.css";
import {FC} from "react";
import maleFriendAvatar from "./../../../../img/maleFriend.png"
import femaleFriend from "./../../../../img/femaleFriend.png"
import {NavLink} from "react-router-dom";

export const Contact: FC<PropsType> = ({
                                           id,
                                           sex,
                                           photo,
                                           name,
                                           email
                                       }) => {

        return (
          <div className={style.contact}>
              <div className={style.avatar}>
                  <img src={sex === "male" ? maleFriendAvatar : femaleFriend} alt={photo}/>
              </div>

              <div className={style.contactInfo}>
                  <div className={style.name}>
                      <NavLink to={`/messages/${id}`}>{name}</NavLink>
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
}
