import {Post} from "./Post/Post.tsx";
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import {PostType} from "../../../../../redux/reducers/profileReducer.ts";
import {memo} from "react";

export const Posts = memo(() => {
    const posts = useAppSelector<PostType[]>(state => state.profileData.posts)

    const mappedPosts = posts.map(p => {
        return <Post key={p.id}
                     id={p.id}
                     name={p.name}
                     date={p.date}
                     text={p.text}
                     isLike={p.isLike}
                     like={p.like}
                     isDislike={p.isDislike}
                     dislike={p.dislike}
                     comments={p.comments}
                     views={p.views}/>
    })

    return <div> {mappedPosts} </div>

});