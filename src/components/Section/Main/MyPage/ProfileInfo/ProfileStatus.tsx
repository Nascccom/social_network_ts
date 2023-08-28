import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import style from "./ProfileStatus.module.css"
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import {getStatusTC, updateStatusTC} from "../../../../../redux/reducers/profileReducer.ts";

export const ProfileStatus = () => {
    const authId = useAppSelector(state => state.authData.userId)
    const profileId = useAppSelector(status => status.profileData.profile?.userId)
    const profileStatus = useAppSelector(status => status.profileData.status)
    const dispatch = useAppDispatch()

    const [status, setStatus] = useState(profileStatus)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        if (authId) {
            dispatch(getStatusTC(authId))
        }
    }, [dispatch, authId])

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
        if (authId === profileId) {
            setEditMode(true)
        }
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
                    {status && status.length > 15 ? `${status.slice(0, 15)}...` : '...'}
                </span>
          }
      </div>
    )
};