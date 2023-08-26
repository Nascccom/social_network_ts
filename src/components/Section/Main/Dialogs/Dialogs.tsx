import style from "./Dialogs.module.css"
import {TitleWithUnderLine} from "../../../../common/TitleWithUnderLine/TitleWithUnderLine.tsx";
import {Contact} from "../../Contacts/Contact/Contact.tsx";
import {useAppSelector} from "../../../../hooks/useAppSelector.ts";
import {FriendType} from "../../../../redux/reducers/usersReducer.ts";
import {Dialog} from "./Dialog/Dialog.tsx";
import {useState} from "react";




export const Dialogs = () => {
    const [friendId, setFriendId] = useState<string>('')

    const friendContacts = useAppSelector<FriendType[]>(
      state => state.usersData.friends)

    const filteredFriends = friendContacts.filter(f => f.followed)

    const mappedFriends = filteredFriends.map(f => (
      <Contact key={f.id}
               id={f.id}
               sex={f.sex}
               photo={f.photo}
               name={f.name}
               email={f.email}
               setFriendId={setFriendId}
      />
    ))

    return (
      <div className={style.dialogs}>
          <TitleWithUnderLine title={'Dialogs'} styles={style.title}/>

          <div className={style.content}>
              <div className={style.contactsList}>
                  {mappedFriends}
              </div>

              <div className={style.main}>
                  <Dialog friendId={friendId}/>
                  {/*<AddForm friendId={friendId}/>*/}
              </div>
          </div>
      </div>
    );
};
