import style from "./Contact.module.css";
import {FC, memo} from "react";
import {NavLink} from "react-router-dom";
import {UserAvatar} from "../../../../common/UserAvatar/UserAvatar.tsx";
import {SectionCSSType} from "../../../../App.tsx";

export const Contact: FC<PropsType> = memo(({
                                                id,
                                                sex,
                                                photo,
                                                name,
                                                email,
                                                setFriendId,
                                                changePageLayout,
                                            }) => {

    const callFriendHandler = () => {
        if (changePageLayout) {
            changePageLayout("sectionDialogs")
        }
        if (setFriendId) {
            setFriendId(id)
        }
    }

    return (
      <div className={style.contact}>
          <UserAvatar photo={photo} sex={sex} alt={name} styles={style.avatar}/>

          <div className={style.contactInfo}>

              <NavLink to={`/dialogs`}
                       onClick={callFriendHandler}
                       className={style.name}>
                  {name}
              </NavLink>
              <div className={style.email}>{email}</div>
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
    changePageLayout?: (value: SectionCSSType) => void
}
