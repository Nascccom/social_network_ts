import {Route, Routes} from "react-router-dom";
import {Profile} from "./MyPage/Profile.tsx";
import style from "./Main.module.css"
import {FC} from "react";
import {Dialogs} from "./Dialogs/Dialogs.tsx";

export const Main: FC<PropsType> = () => {

    return (
      <div className={style.main}>
          <Routes>
              <Route path='/' element={<Profile/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/dialogs' element={<Dialogs/>}/>
          </Routes>
      </div>
    );
};

type PropsType = {
    // section: string
}