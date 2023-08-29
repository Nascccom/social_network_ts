import style from "./Message.module.css";
import femaleFriend from "../../../../../../../img/photoFriend/femaleFriend.png"
import {FC, memo} from "react";
import {useAppSelector} from "../../../../../../../hooks/useAppSelector.ts";

export const Message: FC<PropsType> = memo(({text}) => {
    const profileUserAvatar = useAppSelector(
      state => state.profileData.profile?.photos.large)

    return (
      <div className={style.message}>
          <div className={style.avatar}>
              <img
                src={profileUserAvatar ? profileUserAvatar : femaleFriend}
                alt="logo"/>
          </div>
          <div className={style.text}>
              {text}
          </div>
      </div>
    );
});

type PropsType = {
    text: string
}