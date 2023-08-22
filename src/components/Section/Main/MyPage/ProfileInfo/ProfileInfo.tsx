import style from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus.tsx";
import userAvatar from "../../../../../img/userAvatar.png"
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";

export const ProfileInfo = () => {
    const infoProfile = useAppSelector(state => state.profileData.profile)
    return (
      <div className={style.profileInfo}>
          <div className={style.userAvatar}>
              <img
                src={infoProfile?.photos.large ? infoProfile.photos.large : userAvatar} alt="userAvatar"/>
              <ProfileStatus/>
          </div>
          <div>
              <p>Name: {infoProfile?.fullName}</p>
              <p>About Me:
                  {infoProfile?.aboutMe ? infoProfile?.aboutMe : "No information about you"}
              </p>
              <p>Job:
                  {infoProfile?.lookingForAJobDescription
                    ? infoProfile?.lookingForAJobDescription
                    : "No information"}
              </p>
              <span> Полоса </span>
              <p>Contacts</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
          </div>
      </div>
    );
};
