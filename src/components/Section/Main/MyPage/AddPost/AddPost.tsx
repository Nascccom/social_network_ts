import style from "./AddPost.module.css"
import {UserAvatar} from "../../../../../common/UserAvatar/UserAvatar.tsx";
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import userAvatar from "../../../../../img/userAvatar.png";
import {AddPostForm} from "./AddPostForm/AddPostForm.tsx";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import {addPostAC} from "../../../../../redux/reducers/profileReducer.ts";

export const AddPost = () => {
    const profileName = useAppSelector(state => state.profileData.profile?.fullName)

    const profileUserAvatar = useAppSelector(
      state => state.profileData.profile?.photos.large)

    const dispatch = useAppDispatch()

    const addNewPost = (newPost: string) => {
        dispatch(addPostAC(newPost))
    }

    return (
      <div className={style.addPost}>
          <UserAvatar photo={profileUserAvatar ? profileUserAvatar : userAvatar}
                      alt={profileName || 'Avatar'}
                      styles={style.avatar}/>

          <AddPostForm addPost={addNewPost}/>
      </div>
    );
};