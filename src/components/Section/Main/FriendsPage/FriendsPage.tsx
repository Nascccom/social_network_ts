import style from "./FriendsPage.module.css"
import {NavLink, Route, Routes} from "react-router-dom";
import {MyFriends} from "./MyFriends/MyFriends.tsx";
import {TitleWithUnderLine} from "../../../../common/TitleWithUnderLine/TitleWithUnderLine.tsx";
import {FriendRequest} from "./FriendRequest/FriendRequest.tsx";
import {FindFriends} from "./FindFriends/FindFriends.tsx";

export const FriendsPage = () => {

    return (
      <div className={style.friendsPage}>
          <div className={style.titles}>
              <TitleWithUnderLine title={'Friends'} styles={style.title}/>

              <div className={style.titlesGroup}>
                  <NavLink to={'my'}>
                      <TitleWithUnderLine title={'Друзья'}/>
                  </NavLink>
                  <NavLink to={'requests'}>
                      <TitleWithUnderLine title={'Запросы'}/>
                  </NavLink>
                  <NavLink to={'find'}>
                      <TitleWithUnderLine title={'Поиск'}/>
                  </NavLink>
              </div>
          </div>


          <Routes>

              <Route path={'/my'} element={<MyFriends/>}/>
              <Route path={'/requests'} element={<FriendRequest/>}/>
              <Route path={'/find'} element={<FindFriends/>}/>
          </Routes>
      </div>
    );
};

