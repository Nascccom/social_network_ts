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

              <span> Полоса </span>

              <p>vk: {infoProfile?.contacts.vk || "vk.com"}</p>
              <p>twitter: {infoProfile?.contacts.twitter || "twitter.com"}</p>
              <p>facebook: {infoProfile?.contacts.facebook || "facebook.com"}</p>
              <p>instagram: {infoProfile?.contacts.instagram || "instagram.com"}</p>
              <p>github: {infoProfile?.contacts.github || "github.com"}</p>
          </div>
      </div>
    );
};
