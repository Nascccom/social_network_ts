import {ChangeEvent, FC, InputHTMLAttributes} from "react";
import style from './Input.module.css'

export const Input: FC<PropsType> = ({
                                         type,
                                         placeholder,
                                         onChangeCallback,
                                         styles
                                     }) => {

    const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeCallback(e.currentTarget.value)
    }

    const inputStyles = `${styles} ${style.input}`

    return (
      <input className={inputStyles}
             type={type}
             placeholder={placeholder}
             onChange={onChangeCallBack}/>
    );
};

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
    onChangeCallback: (necessaryText: string) => void
    styles: string
}