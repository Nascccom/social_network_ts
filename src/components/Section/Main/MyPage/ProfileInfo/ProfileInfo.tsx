import style from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus.tsx";
import userAvatar from "../../../../../img/userAvatar.png"
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import {UserAvatar} from "../../../../../common/UserAvatar/UserAvatar.tsx";
import {memo, useEffect} from "react";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import {getStatusTC, getUserProfileTC} from "../../../../../redux/reducers/profileReducer.ts";
import {useParams} from "react-router-dom";

export const ProfileInfo = memo(() => {
    const dispatch = useAppDispatch()

    const infoProfile = useAppSelector(state => state.profileData.profile)
    const authId = useAppSelector(state => state.authData.userId)

    const params = useParams<"*">()
    let id: number | null = Number(params["*"])
    if (params["*"] === "") {
        id = authId
    }

    useEffect(() => {
        dispatch(getUserProfileTC(Number(id)))
        dispatch(getStatusTC(Number(id)))
    }, [dispatch, id])

    return (
      <div className={style.profileInfo}>
          <div className={style.photoAndStatusBlock}>
              <UserAvatar photo={infoProfile?.photos.large || userAvatar}
                          alt={'userAvatar'}/>
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

              <hr/>
              <p>Contacts</p>
              <hr/>

              <p>vk: {infoProfile?.contacts.vk || "vk.com"}</p>
              <p>twitter: {infoProfile?.contacts.twitter || "twitter.com"}</p>
              <p>facebook: {infoProfile?.contacts.facebook || "facebook.com"}</p>
              <p>instagram: {infoProfile?.contacts.instagram || "instagram.com"}</p>
              <p>github: {infoProfile?.contacts.github || "github.com"}</p>
          </div>
      </div>
    );
});
