import style from "./TitleWithUnderline.module.css";
import {FC, memo} from "react";

export const TitleWithUnderLine: FC<PropsType> = memo(({title, styles}) => {

    return (
      <p className={`${style.title} ${styles}`}>{title}</p>
    );
});

type PropsType = {
    title: string
    styles?: string;
}
