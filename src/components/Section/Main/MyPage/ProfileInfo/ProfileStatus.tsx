import {ChangeEvent, KeyboardEvent, useState} from "react";
import style from "./ProfileStatus.module.css"
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import {updateStatusTC} from "../../../../../redux/reducers/profileReducer.ts";

export const ProfileStatus = () => {
    const profileStatus = useAppSelector(status => status.profileData.status)
    const dispatch = useAppDispatch()

    const [status, setStatus] = useState(profileStatus)
    const [editMode, setEditMode] = useState(false)

    const updateStatus = (): void => {
        if (!status) {
            dispatch(updateStatusTC("Set your status"))
            setEditMode(!editMode)
        } else {
            dispatch(updateStatusTC(status))
            setEditMode(!editMode)
        }
    }

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setEditMode(true)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            updateStatus()
        }
    }

    const onBlurStatusHandler = () => {
        updateStatus()
    }

    return (
      <div className={style.profileStatus}>
          {
              editMode
                ?
                <input value={status}
                       onBlur={onBlurStatusHandler}
                       onChange={onChangeStatusHandler}
                       onKeyDown={onKeyDownHandler}
                       autoFocus/>
                :
                <span onClick={onClickHandler}>
                    {status.length > 15 ? `${status.slice(0, 15)}...` : status}
                </span>
          }
      </div>
    )
};