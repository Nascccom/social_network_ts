import {FC} from "react";
import style from "./AddPostForm.module.css";
import {SubmitHandler, useForm} from "react-hook-form";

export const AddPostForm: FC<PropsType> = ({addPost}) => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FormTextarea>();

    const onSubmit: SubmitHandler<FormTextarea> = (data) => {
        addPost(data.newPost)
        reset()
    };


    return (
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <textarea {...register('newPost', {required: true})}
                    placeholder={'I wait...'}>
          </textarea>
          <button>Publish</button>
      </form>
    );
};

type PropsType = {
    addPost: (newPost: string) => void
}

type FormTextarea = {
    newPost: string;
};