import style from "./Button.module.css"
import {FC, memo, ReactNode} from "react";

export const Button: FC<PropsType> = memo(({
                                               name,
                                               callBack,
                                               styles,
                                               disabled,
                                               status
                                           }) => {
    const styleBtn = status
      ? `${style.btn} ${style.follow} ${styles}`
      : `${style.btn} ${style.unfollow} ${styles}`


    return (
      <button className={styleBtn}
              onClick={() => callBack()}
              disabled={disabled}>
          {name}
      </button>
    );
});

type PropsType = {
    /**
     * It' describe button's label
     **/
    name: ReactNode
    /**
     * Button's action
     **/
    callBack: () => void
    /**
     * Button's action
     **/
    status?: boolean
    /**
     * Additional styles
     **/
    styles?: string
    /**
     * Indicates whether the button is disabled or not
     **/
    disabled?: boolean
}

