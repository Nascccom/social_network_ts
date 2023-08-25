import style from "./Post.module.css";
import userAvatar from "../../../../../../img/userAvatar.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faThumbsDown, faThumbsUp, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useAppSelector} from "../../../../../../hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../../../../hooks/useAppDispatch.ts";
import {clickLikeOrDislikeAC, deletePostAC} from "../../../../../../redux/reducers/profileReducer.ts";

export const Post = (props: PropsType) => {
    const profileUserAvatar = useAppSelector(
      state => state.profileData.profile?.photos.large)

    const dispatch = useAppDispatch()

    const onClickButtonHandler = () => {
        dispatch(deletePostAC(props.id))
    }

    const onClickLikeHandler = () => {
        if (!props.isLike){
            dispatch(clickLikeOrDislikeAC(props.id, 'like'))
        }
    }

    const onClickDislikeHandler = () => {
        if (!props.isDislike) {
            dispatch(clickLikeOrDislikeAC(props.id, 'dislike'))
        }
    }

    const clickedLike = props.isLike ? `${style.icon}` : ''
    const clickedDislike = props.isDislike ? `${style.icon}` : ''

    return (
      <div className={style.post}>
          <div className={style.title}>
              <div className={style.avatar}>
                  <img src={profileUserAvatar ? profileUserAvatar : userAvatar} alt={"avatar"}/>
              </div>
              <div className={style.info}>
                  <div>
                      <div className={style.name}>{props.name}</div>
                      <div className={style.date}>{props.date}</div>
                  </div>
                  <div>
                      <button onClick={onClickButtonHandler}>
                          <FontAwesomeIcon icon={faXmark} size="lg"/>
                      </button>
                  </div>
              </div>
          </div>

          <div className={style.text}>
              {props.text}
              <div className={style.icons}>
                  <span className={clickedLike} onClick={onClickLikeHandler}>
                      <FontAwesomeIcon icon={faThumbsUp} size="lg"/>
                      {` ${props.like}`}
                  </span>
                  <span className={clickedDislike} onClick={onClickDislikeHandler}>
                      <FontAwesomeIcon icon={faThumbsDown} size="lg"/>
                      {` ${props.dislike}`}
                  </span>
                  <span>
                      <FontAwesomeIcon icon={faComment} size="lg"/>
                      {` ${props.comments}`}
                  </span>
              </div>
          </div>
      </div>
    );
};

type PropsType = {
    id: string
    name: string
    date: string
    text: string
    isLike: boolean
    like: number
    isDislike: boolean
    dislike: number
    comments: number
    views: number
}