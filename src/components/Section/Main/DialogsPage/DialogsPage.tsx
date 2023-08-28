import style from "./DialogsPage.module.css";
import {TitleWithUnderLine} from "../../../../common/TitleWithUnderLine/TitleWithUnderLine.tsx";
import {ContactsElement} from "../../Contacts/ContactsElement/ContactsElement.tsx";
import {useAppSelector} from "../../../../hooks/useAppSelector.ts";
import {FriendType} from "../../../../redux/reducers/usersReducer.ts";
import {useState} from "react";
import {DialogContact} from "./DialogContact/DialogContact.tsx";

export const DialogsPage = () => {
    const [friendId, setFriendId] = useState<string>('')

    const friendContacts = useAppSelector<FriendType[]>(
      state => state.usersData.users)

    const filteredFriends = friendContacts.filter(f => f.followed)

    return (
      <div className={style.dialogsPage}>
          <TitleWithUnderLine title={'Dialogs'} styles={style.title}/>


          <div className={style.content}>
              <ContactsElement contactsArray={filteredFriends}
                               setFriendId={setFriendId}/>

              <DialogContact friendId={friendId}/>

          </div>
      </div>
    );
};