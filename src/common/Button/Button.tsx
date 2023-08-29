import style from "./Button.module.css"
import {FC, memo} from "react";

export const Button: FC<PropsType> = memo(({
                                          name,
                                          callBack,
                                          styles,
                                          disabled,
                                          status
                                      }) => {
    const styleBtn = status
      ? `${style.btn} ${style.blue} ${styles}`
      : `${style.btn} ${style.violet} ${styles}`


    return (
      <button className={styleBtn}
              onClick={() => callBack()}
              disabled={disabled}>
          {name}
      </button>
    );
});

type PropsType = {
    name: string
    callBack: () => void
    status?: boolean
    styles?: string
    disabled?: boolean
}

