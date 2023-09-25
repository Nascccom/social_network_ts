import style from "./UserAvatar.module.css";
import maleFriend from "../../img/photoFriend/maleFriend.png";
import femaleFriend from "../../img/photoFriend/femaleFriend.png";
import {FC, memo} from "react";
import {SexType} from "../../redux/reducers/usersReducer.ts";

export const UserAvatar: FC<PropsType> = memo(({
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
});

type PropsType = {
    /**
     * It's photo's src
     **/
    photo: string
    /**
     * If there is no photo from the server, then the avatar is selected;
     * if the gender is male, then the avatar is male; if it is female, then the avatar is female.
     **/
    sex?: SexType
    /**
     * Description of the photo if there are problems with the path
     **/
    alt: string
    /**
     * Additional styles
     **/
    styles?: string
}
