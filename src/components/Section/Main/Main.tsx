import {Route, Routes} from "react-router-dom";
import {Profile} from "./MyPage/Profile.tsx";
import style from "./Main.module.css"

export const Main = () => {

    return (
      <div className={style.main}>
          <Routes>
              <Route path='/' element={<Profile/>}/>
              <Route path='/profile' element={<Profile/>}/>
          </Routes>
      </div>
    );
};