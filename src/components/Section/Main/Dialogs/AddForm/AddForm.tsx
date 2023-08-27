import style from "../Dialogs.module.css";


export const AddForm = () => {
    return (
      <form className={style.addMessageForm}>
          <input type="text"
                 placeholder={'Write your message...'}/>
          <button className={style.btn}></button>
      </form>
    );
};

