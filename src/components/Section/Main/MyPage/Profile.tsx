import {ProfileInfo} from "./ProfileInfo/ProfileInfo.tsx";
import {AddPost} from "./AddPost/AddPost.tsx";
import {Posts} from "./Posts/Posts.tsx";

export const Profile = () => {
    return (
      <div>
          <ProfileInfo/>
          <AddPost/>
          <Posts/>
      </div>
    );
};

