import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "./MyPage/Profile.tsx";
import style from "./Main.module.css"
import {FC, memo} from "react";
import {SectionCSSType} from "../../../App.tsx";
import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import {Logout} from "./Logout/Logout.tsx";
import {DialogsPage} from "./DialogsPage/DialogsPage.tsx";
import {FriendsPage} from "./FriendsPage/FriendsPage.tsx";
import {GroupsPage} from "./Groups/GroupesPage.tsx";
import {Error} from "../../Error.tsx";

export const Main: FC<PropsType> = memo(({
                                             section,
                                             changePageLayout
                                         }) => {
    const isAuth = useAppSelector<boolean>(state => state.authData.isAuth)

    if (section === "sectionLogout") {
        return null
    }

    if (!isAuth) {
        changePageLayout("sectionLogout")
        return <Navigate to="logout"/>
    }

    return (
      <div className={style.main}>
          <Routes>
              <Route path='*' element={<Error/>}/>
              <Route path='/' element={<Profile/>}/>
              <Route path="profile/*" element={<Profile />} />
              <Route path='dialogs/*' element={<DialogsPage/>}/>
              <Route path='friends/*' element={<FriendsPage/>}/>
              <Route path='groups' element={<GroupsPage/>}/>


              <Route path='logout' element={<Logout changePageLayout={changePageLayout}/>}/>
          </Routes>


      </div>
    );
});

type PropsType = {
    section: SectionCSSType
    changePageLayout: (value: SectionCSSType) => void
}