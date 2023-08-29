import preloader from '../../img/preloader/spiningDots.svg'
import style from "./Preloader.module.css"
import {memo} from "react";

export const Preloader = memo(() => {
    return (
      <div className={style.preloader}>
          <img src={preloader} alt={"preloader"}/>
      </div>
    );
});

