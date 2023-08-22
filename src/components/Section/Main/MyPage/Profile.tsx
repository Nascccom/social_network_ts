import {ProfileInfo} from "./ProfileInfo/ProfileInfo.tsx";
import {AddPost} from "./AddPost/AddPost.tsx";
import {Post} from "./Post/Post.tsx";

export const Profile = () => {
    return (
      <div>
          <ProfileInfo/>
          <AddPost/>
          <Post/>
      </div>
    );
};

