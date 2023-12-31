import {useAppDispatch} from "../../../../../hooks/useAppDispatch.ts";
import {FriendCard} from "../FriendCard/FriendCard.tsx";
import style from "./FindFriends.module.css";
import {useAppSelector} from "../../../../../hooks/useAppSelector.ts";
import {
    followingUserTC,
    FriendType,
    getUsersTC, setCurrentPageAC,
    showMoreAC,
    unfollowingUserTC
} from "../../../../../redux/reducers/usersReducer.ts";
import {memo, useEffect} from "react";
import {Preloader} from "../../../../../common/Preloader/Preloader.tsx";
import {Pagination} from "./Pagination/Pagination.tsx";
import {ShowMore} from "../../../../../common/ShowMore/ShowMore.tsx";

export const FindFriends = memo(() => {
    const dispatch = useAppDispatch()

    const foundUsers = useAppSelector<FriendType[]>(state => state.usersData.foundFriends)
    const pageSize = useAppSelector(state => state.usersData.pageSize)
    const currentPage = useAppSelector(state => state.usersData.currentPage)
    const totalCountUsers = useAppSelector(state => state.usersData.totalCountUsers)
    const isFetching = useAppSelector(state => state.usersData.isFetching)
    const isFollowingInProgress = useAppSelector<string[]>(state => state.usersData.isFollowingInProgress)

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [currentPage, dispatch, pageSize, totalCountUsers])

    useEffect(() => {
        return () => {
            dispatch(setCurrentPageAC(1));
        };
    }, [dispatch]);

    const changeStatusFollow = (id: string, followed: boolean) => {
        if (followed) {
            dispatch(unfollowingUserTC(id))
        } else {
            dispatch(followingUserTC(id))
        }
    }

    const loadMoreUsers = () => {
        dispatch(showMoreAC())
    }

    const mappedUsers = foundUsers.map(f => {
        return <FriendCard key={f.id}
                           id={f.id}
                           name={f.name}
                           followed={f.followed}
                           status={f.status}
                           photo={f.photo}
                           callback={changeStatusFollow}
                           disabled={isFollowingInProgress.some(id => id === f.id)}
        />
    })


    return isFetching
      ? <Preloader/>
      : <div className={style.findFriends}>
          {mappedUsers}
          <ShowMore onLoadMore={loadMoreUsers}/>
          <Pagination currentPage={currentPage}
                      totalCountUsers={totalCountUsers}
                      pageSize={pageSize}/>
      </div>
});

