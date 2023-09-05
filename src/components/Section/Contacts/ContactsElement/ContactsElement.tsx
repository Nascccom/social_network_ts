import style from "./ContactsElement.module.css";
import {Contact} from "../Contact/Contact.tsx";
import {FriendType} from "../../../../redux/reducers/usersReducer.ts";
import {FC, memo} from "react";

export const ContactsElement: FC<PropsType> = memo(({
                                                   contactsArray,
                                               }) => {

    const mappedFriends = contactsArray.map(f => (
      <Contact key={f.id}
               id={f.id}
               sex={f.sex}
               photo={f.photo}
               name={f.name}
               email={f.email}
      />))

    return (
      <div className={style.contactsList}>
          {mappedFriends}
      </div>
    );
});

type PropsType = {
    contactsArray: FriendType[]
}

