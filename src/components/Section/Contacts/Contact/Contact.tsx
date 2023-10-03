import styles from "./Contact.module.css";
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
      <div className={styles.contact}>
          <UserAvatar photo={photo} sex={sex} alt={name} styles={styles.avatar}/>

          <div className={styles.contactInfo}>

              <NavLink to={`/dialogs`}
                       onClick={callFriendHandler}
                       className={styles.name}>
                  {name}
              </NavLink>
              <div className={styles.email}>{email}</div>
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
