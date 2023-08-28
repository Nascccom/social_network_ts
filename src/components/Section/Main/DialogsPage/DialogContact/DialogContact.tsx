import {AddMessageForm} from "./AddMessageForm/AddMessageForm.tsx";
import {FC} from "react";
import {Dialog} from "./Dialog/Dialog.tsx";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import {addMessageAC} from "../../../../../redux/reducers/usersReducer.ts";
import styles from "./DialogContact.module.css"

export const DialogContact: FC<PropsType> = ({friendId}) => {
    const dispatch = useAppDispatch()

    const addMessageHandler = (newMessage: string) => {
        dispatch(addMessageAC(friendId, newMessage))
    }

    return (
      <div className={styles.dialog}>
          <Dialog friendId={friendId}/>
          <AddMessageForm
            addMessage={(newMessage) => addMessageHandler(newMessage)}/>
      </div>
    );
};

type PropsType = {
    friendId: string
}

