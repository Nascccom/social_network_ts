import style from "./Dialog.module.css";
import {Message} from "./Message/Message.tsx";
import {useAppSelector} from "../../../../../../hooks/useAppSelector.ts";
import {FriendType} from "../../../../../../redux/reducers/usersReducer.ts";
import {FC, memo} from "react";
import {UserAvatar} from "../../../../../../common/UserAvatar/UserAvatar.tsx";

export const Dialog: FC<PropsType> = memo(({friendId}) => {
    const friend = useAppSelector<FriendType | undefined>(
      state => state.usersData.users.find(f => f.id === friendId))

    if (!friend) {
        return (
          <div className={style.notice}>
              <p>Do you want to see the correspondence?</p>
              <p>Choose an interlocutor!</p>
          </div>)
    }

    const mappedMessages = friend.messages.map(mes => (
      <Message key={mes.id} text={mes.message}/>))

    return (
      <div className={style.dialog}>
          <div className={style.contact}>
              <UserAvatar photo={friend.photo} sex={friend.sex} alt={friend.name} styles={style.avatar}/>

              <div className={style.contactInfo}>
                  <div className={style.name}>{friend.name}</div>
                  <div className={style.online}>Online</div>
              </div>
          </div>

          <div className={style.messages}>
              {mappedMessages}
          </div>
      </div>
    );
});

type PropsType = {
    friendId: string
}

