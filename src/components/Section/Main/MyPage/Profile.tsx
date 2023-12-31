import {ProfileInfo} from "./ProfileInfo/ProfileInfo.tsx";
import {AddPost} from "./AddPost/AddPost.tsx";
import {Posts} from "./Posts/Posts.tsx";
import {useAppSelector} from "../../../../hooks/useAppSelector.ts";
import {memo} from "react";

export const Profile = memo(() => {
    const authId = useAppSelector(state => state.authData.userId)
    const profileId = useAppSelector(state => state.profileData.profile?.userId)

    if (authId !== profileId) {
        return <ProfileInfo/>
    }

    return (
      <div>
          <ProfileInfo/>
          <AddPost/>
          <Posts/>
      </div>
    );
});

