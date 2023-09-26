import style from "./Contacts.module.css"
import {TitleWithUnderLine} from "../../../common/TitleWithUnderLine/TitleWithUnderLine.tsx";
import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import {FriendType} from "../../../redux/reducers/usersReducer.ts";
import {FC, memo, useState} from "react";
import {ContactsElement} from "./ContactsElement/ContactsElement.tsx";
import {SectionCSSType} from "../../../App.tsx";
import {Input} from "../../../common/Input/Input.tsx";


export const Contacts: FC<PropsType> = memo(({changePageLayout}) => {
    const friendContacts = useAppSelector<FriendType[]>(state => state.usersData.users)

    const [filterValue, setFilterValue] = useState('')

    const onChangeFilterHandler = (necessaryText: string) => {
        setFilterValue(necessaryText)
    }
    const filteredFriends = friendContacts.filter(f => f.followed &&
      f.name.toLowerCase().includes(filterValue))

    return (
      <div className={style.contacts}>
          <TitleWithUnderLine title={'Contacts'} styles={style.title}/>

          <div>
              <Input type={"search"}
                     placeholder={"Search contact..."}
                     onChangeCallback={onChangeFilterHandler}
                     styles={style.search}/>
          </div>

          <ContactsElement contactsArray={filteredFriends}
                           changePageLayout={changePageLayout}/>
      </div>
    );
})

type PropsType = {
    changePageLayout: (value: SectionCSSType) => void
}
