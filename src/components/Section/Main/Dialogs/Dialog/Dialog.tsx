import style from "./Dialog.module.css";
import femaleFriend from "../../../../../img/femaleFriend.png";

export const Dialog = () => {


    return (
      <div className={style.dialog}>
          <div className={style.contact}>
              <div className={style.avatar}>
                  <img src={femaleFriend} alt={"Katya Salimova"}/>
              </div>

              <div className={style.contactInfo}>
                  <div className={style.name}>Katya Salimova</div>
                  <div className={style.online}>Online</div>
              </div>
          </div>

          <div className={style.messages}>

          </div>
      </div>
    );
};

