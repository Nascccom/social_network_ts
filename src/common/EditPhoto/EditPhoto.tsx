import {ChangeEvent} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import style from "./EditPhoto.module.css"
import {updatePhotoTC} from "../../redux/reducers/profileReducer.ts";
import {faCamera} from "@fortawesome/free-solid-svg-icons/faCamera";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const EditPhoto = () => {
    const dispatch = useAppDispatch()

    const authId = useAppSelector(state => state.authData.userId)
    const profileInfo = useAppSelector(state => state.profileData.profile)

    const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(updatePhotoTC(e.target.files[0]))
        }
    };

    return ((authId === profileInfo?.userId) &&
      <div className={style.editPhoto}>
        <input type="file" id="inputFile" onChange={handlePhotoChange}/>
        <label htmlFor="inputFile">
          <FontAwesomeIcon icon={faCamera} size="lg"/>
          <span>Edit Photo</span>
        </label>
      </div>
    )
}

export default EditPhoto;
