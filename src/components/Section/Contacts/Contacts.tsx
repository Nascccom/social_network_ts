import style from "./Contacts.module.css"
import {TitleWithUnderLine} from "../../../common/TitleWithUnderLine/TitleWithUnderLine.tsx";
import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import {FriendType} from "../../../redux/reducers/usersReducer.ts";
import {Contact} from "./Contact/Contact.tsx";
import {ChangeEvent, useState} from "react";


export const Contacts = () => {
    const friendContacts = useAppSelector<FriendType[]>(
      state => state.usersData.friends)

    const [filterValue, setFilterValue] = useState('')

    const onChangeFilterHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.currentTarget.value)
    }
    const filteredFriends = friendContacts.filter(f =>
      f.name.toLowerCase().includes(filterValue))


    const mappedFriends = filteredFriends.map(f => (
      <Contact key={f.id}
               id={f.id}
               sex={f.sex}
               photo={f.photo}
               name={f.name}
               email={f.email}
      />))



        return (
          <div className={style.contacts}>
              <TitleWithUnderLine title={'Contacts'} styles={style.title}/>

              <div>
                  <input className={style.search}
                         type="search"
                         placeholder={"Search contact..."}
                         onChange={onChangeFilterHandler}/>
              </div>

              <div className={style.contactsList}>
                  {mappedFriends}
              </div>
          </div>
        );
};

