import style from "./FriendsPage.module.css"
import {NavLink, Route, Routes} from "react-router-dom";
import {MyFriends} from "./MyFriends/MyFriends.tsx";
import {TitleWithUnderLine} from "../../../../common/TitleWithUnderLine/TitleWithUnderLine.tsx";
import {FindFriends} from "./FindFriends/FindFriends.tsx";
import {useState} from "react";

export const FriendsPage = () => {
    const [filterFriend, setFilterFriend] = useState(true)


    return (
      <div className={style.friendsPage}>
          <div className={style.titles}>
              <TitleWithUnderLine title={'Friends'} styles={style.title}/>

              <div className={style.titlesGroup}>
                  <NavLink to={'my'} onClick={() => setFilterFriend(true)}>
                      <TitleWithUnderLine title={'Друзья'}/>
                  </NavLink>
                  <NavLink to={'requests'} onClick={() => setFilterFriend(false)}>
                      <TitleWithUnderLine title={'Запросы'}/>
                  </NavLink>
                  <NavLink to={'find'}>
                      <TitleWithUnderLine title={'Поиск'}/>
                  </NavLink>
              </div>
          </div>


          <Routes>
              {/*<Route path={'*'} element={<MyFriends/>}/>*/}
              <Route path={'/my'} element={<MyFriends filter={filterFriend}/>}/>
              <Route path={'/requests'} element={<MyFriends filter={filterFriend}/>}/>
              <Route path={'/find'} element={<FindFriends/>}/>
          </Routes>
      </div>
    );
};

