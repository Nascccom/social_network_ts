import {ChangeEvent, KeyboardEvent, memo, useCallback, useEffect, useState} from "react";
import style from "./ProfileStatus.module.css"
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import {getStatusTC, updateStatusTC} from "../../../../../redux/reducers/profileReducer.ts";
import {useParams} from "react-router-dom";

export const ProfileStatus = memo(() => {
    const authId = useAppSelector(state => state.authData.userId)
    const profileId = useAppSelector(status => status.profileData.profile?.userId)
    const profileStatus = useAppSelector(status => status.profileData.status)
    const dispatch = useAppDispatch()

    const [status, setStatus] = useState<string>(profileStatus)
    const [editMode, setEditMode] = useState(false)

    const params = useParams<"*">()
    let id: number  = Number(params["*"])
    if (params["*"] === "") {
        id = authId
    }

    useEffect(() => {
        dispatch(getStatusTC(id))
    }, [dispatch, id])

    const updateStatus = useCallback((): void => {
        console.log('updateStatus')
        if (!status) {
            dispatch(updateStatusTC("..."))
            setEditMode(!editMode)
        } else {
            dispatch(updateStatusTC(status))
            setEditMode(!editMode)
        }
    }, [dispatch, editMode, status])

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onClickHandler = () => {
        if (authId === profileId) {
            dispatch(getStatusTC(id))
            setEditMode(!editMode)
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
                <input value={!status ? '...' : status}
                       onBlur={onBlurStatusHandler}
                       onChange={onChangeStatusHandler}
                       onKeyDown={onKeyDownHandler}
                       autoFocus/>
                :
                <span onClick={onClickHandler}>
                    {status.length > 15 ? `${status.slice(0, 15)}...`: status }
                </span>
          }
      </div>
    )
});