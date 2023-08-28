import style from "./FriendCard.module.css";
import {NavLink} from "react-router-dom";
import {FC} from "react";
import catFriend from "../../../../../img/photoFriend/catFriend.avif"
import {Button} from "../../../../../common/Button/Button.tsx";

export const FriendCard: FC<PropsType> = ({
                                              id,
                                              name,
                                              followed,
                                              status,
                                              photo,
                                              disabled,
                                              callback
                                          }) => {

    const onClickFollowHandler = () => {
        callback(id, followed)
    }

    return (
      <div className={style.friendCard}>

          <NavLink to={`/profile/${id}`} className={style.info}>
              <img src={photo ? photo : catFriend} alt={name}/>
              <span>{name}</span>
          </NavLink>

          <div>{status}</div>

          <Button name={followed ? 'Unfollow' : 'Follow'}
                  callBack={onClickFollowHandler}
                  styles={style.btn}
                  disabled={disabled}
                  status={followed}
          />
      </div>
    );
};

type PropsType = {
    id: string
    name: string
    followed: boolean
    status: string
    photo: string
    disabled?: boolean
    callback: (id: string, followed: boolean) => void
}

