import style from './MyFriends.module.css'
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import {followOrUnfollowAC, FriendType} from "../../../../../redux/reducers/usersReducer.ts";
import {FriendCard} from "../FriendCard/FriendCard.tsx";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";

export const MyFriends = () => {
    const dispatch = useAppDispatch()

    const myFriends = useAppSelector<FriendType[]>(state => state.usersData.friends)

    const changeStatusFollow = (id: string, follow: boolean) => {
        dispatch(followOrUnfollowAC(id, !follow))
    }

    const mappedFriends = myFriends.map(f => {
        if (f.followed) {
            return <FriendCard key={f.id}
                               id={f.id}
                               name={f.name}
                               followed={f.followed}
                               status={f.status}
                               photo={f.photo}
                               callback={changeStatusFollow}/>
        } else {
            return null
        }
    })

    return (
      <div className={style.myFriends}>
          {mappedFriends}
      </div>
    );
};

