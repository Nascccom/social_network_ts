import style from "./UserAvatar.module.css";
import maleFriend from "../../img/photoFriend/maleFriend.png";
import femaleFriend from "../../img/photoFriend/femaleFriend.png";
import {FC} from "react";

export const UserAvatar: FC<PropsType> = ({
                                              photo,
                                              sex = 'male',
                                              alt,
                                              styles
                                          }) => {
    let src;

    if (['.png', '.jpeg', '.jpg', '.gif',
        '.bmp', '.tiff', '.webp', '.svg',
        '.ico', '.psd', '.ai', '.pdf']
      .some(ext => photo.includes(ext))) {
        src = photo
    } else {
        src = sex === 'male' ? maleFriend : femaleFriend
    }

    return (
      <div className={`${styles} ${style.avatar}`}>
          <img src={src} alt={alt}/>
      </div>
    );
};

type PropsType = {
    photo: string
    sex?: string
    alt: string
    styles?: string
}
