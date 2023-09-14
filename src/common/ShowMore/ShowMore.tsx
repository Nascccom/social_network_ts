import {FC, memo} from "react";
import style from "./ShowMore.module.css"
import {Button} from "../Button/Button.tsx";

export const ShowMore: FC<PropsType> = memo(({onLoadMore}) => {

    const onClickHandler = () => {
        onLoadMore()
    };

    return (
      <div className={style.showMore}>
          <Button name={'Show more'} callBack={onClickHandler} styles={style.btn}/>
      </div>
    );
});

type PropsType = {
    onLoadMore: () => void
}