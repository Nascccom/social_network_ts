import style from "./ContactsElement.module.css";
import {Contact} from "../Contact/Contact.tsx";
import {FriendType} from "../../../../redux/reducers/usersReducer.ts";
import {FC, memo} from "react";
import {SectionCSSType} from "../../../../App.tsx";

export const ContactsElement: FC<PropsType> = memo(({
                                                        contactsArray,
                                                        setFriendId,
                                                        changePageLayout,
                                                    }) => {

    const mappedFriends = contactsArray.map(f => (
      <Contact key={f.id}
               id={f.id}
               sex={f.sex}
               photo={f.photo}
               name={f.name}
               email={f.email}
               setFriendId={setFriendId}
               changePageLayout={changePageLayout}

      />))

    return (
      <div className={style.contactsList}>
          {mappedFriends}
      </div>
    );
});

type PropsType = {
    contactsArray: FriendType[]
    setFriendId?: (friendId: string) => void
    changePageLayout?: (value: SectionCSSType) => void
}

