import {FC, memo} from "react";
import style from "./ShowMore.module.css"

export const ShowMore: FC<PropsType> = memo(({onLoadMore}) => {

    const onClickHandler = () => {
        onLoadMore()
    };

    return (
      <div className={style.showMore}>
          <div className={style.btn} onClick={onClickHandler}>
              Show more
          </div>
      </div>
    );
});

type PropsType = {
    onLoadMore: () => void
}