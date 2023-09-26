import preloader from '../../img/preloader/spiningDots.svg'
import style from "./Preloader.module.css"
import {CSSProperties, FC, memo} from "react";

export const Preloader: FC<PropsType> = memo(({
                                                  styles,

                                              }) => {

    return (
      <div className={style.preloader}>
          <img src={preloader}
               alt={"preloader"}
               style={styles}/>
      </div>
    );
});

type PropsType = {
    /**
     * Additional styles
     **/
    styles?: CSSProperties

}
