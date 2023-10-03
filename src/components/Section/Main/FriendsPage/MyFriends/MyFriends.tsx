import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import {followOrUnfollowUsersAC, FriendType} from "../../../../../redux/reducers/usersReducer.ts";
import {FriendCard} from "../FriendCard/FriendCard.tsx";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import {memo} from "react";

export const MyFriends = memo((props: PropsType) => {
    const dispatch = useAppDispatch()
    const users = useAppSelector<FriendType[]>(state => state.usersData.users)

    let filteredUsers;
    const friends = users.filter(u => u.followed)
    const notFriends = users.filter(u => !u.followed)

    if (props.filter) {
        filteredUsers = friends
    } else {
        filteredUsers = notFriends
    }

    const changeStatusFollow = (id: string, follow: boolean) => {
        dispatch(followOrUnfollowUsersAC(id, !follow))
    }

    const mappedFriends = filteredUsers.map(f => {
        return <FriendCard key={f.id}
                           id={f.id}
                           name={f.name}
                           followed={f.followed}
                           status={f.status}
                           photo={f.photo}
                           callback={changeStatusFollow}
        />

    })

    return (
      <div>
          {mappedFriends}
      </div>
    );
});

type PropsType = {
    filter: boolean
}
