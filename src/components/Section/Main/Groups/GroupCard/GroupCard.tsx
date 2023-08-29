import style from "./GroupCard.module.css";
import {CategoryType, unfollowGroupAC} from "../../../../../redux/reducers/groupsReducer.ts";
import {FC, memo} from "react";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import groupImg from "./../../../../../img/group/groupImg.png"
import {Button} from "../../../../../common/Button/Button.tsx";

export const GroupCard: FC<PropsType> = memo(({
                                             id,
                                             type,
                                             name,
                                             subscribers,
                                             logo,
                                         }) => {
    const dispatch = useAppDispatch()

    const onClickUnfollowedGroup = () => {
        dispatch(unfollowGroupAC(id))
    }

    return (
      <div className={style.groupCard}>
          <div className={style.info}>
              <img src={logo ? logo : groupImg} alt={name}/>
              <div>
                  <a href="#">{name}</a>
                  <p>{type} Group</p>
              </div>
          </div>

          <div className={style.btn}>
              <p>{subscribers} Followers</p>
              <Button name={'Unfollowed'} callBack={onClickUnfollowedGroup}/>
          </div>
      </div>

    );
});

type PropsType = {
    id: string
    name: string
    type: CategoryType
    subscribers: number
    logo: string
}
