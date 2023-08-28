import style from "./Button.module.css"
import {FC} from "react";

export const Button: FC<PropsType> = ({
                                          name,
                                          callBack,
                                          styles,
                                          disabled,
                                          status
                                      }) => {
    const styleBtn = status
      ? `${style.btn} ${style.violet} ${styles}`
      : `${style.btn} ${style.grey} ${styles}`

    return (
      <button className={styleBtn}
              onClick={() => callBack()}
              disabled={disabled}>
          {name}
      </button>
    );
};

type PropsType = {
    name: string
    callBack: () => void
    status?: boolean
    styles?: string
    disabled?: boolean
}

