import style from "./AddMessageForm.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShare} from "@fortawesome/free-solid-svg-icons/faShare";
import {FC, memo} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "../../../../../../common/Button/Button.tsx";


export const AddMessageForm: FC<PropsType> = memo(({addMessage}) => {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        addMessage(data.newMessage)
        reset()
    };

    return (
      <form className={style.addMessageForm} onSubmit={handleSubmit(onSubmit)}>
          <input type="text"
                 placeholder={'Write your message...'}
                 {...register('newMessage', {required: true})}/>

          <Button name={<FontAwesomeIcon icon={faShare} size="lg" style={{color: "#fff"}}/>}
                  callBack={ () => {} }
                  styles={style.roundedButton}/>
      </form>
    );
});

type PropsType = {
    addMessage: (newMessage: string) => void
}

interface FormInput {
    newMessage: string;
}

