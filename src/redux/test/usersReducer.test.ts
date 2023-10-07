import {
    addMessageAC, followingUserAC,
    followOrUnfollowUsersAC,
    FriendType,
    InitialUsersStateType, setCurrentPageAC, setTotalCountUsersAC,
    setUsersAC, showMoreAC, toggleIsFetchingAC, toggleIsFollowingInProgressAC, unfollowingUserAC,
    usersReducer
} from "../reducers/usersReducer.ts";
import {v1} from "uuid";
import {describe} from "vitest";


describe("Users reducer", () => {
    let startState: InitialUsersStateType

    beforeEach(() => {
        startState = {
            users: [
                {
                    id: '1',
                    sex: "female",
                    name: 'Katya Salimova',
                    photo: '',
                    followed: true,
                    status: 'Life is cool',
                    email: 'ttt_0a@bk.ru',
                    messages: [
                        {id: v1(), message: 'Hello! How are you?'},
                        {id: v1(), message: 'I love you!'},
                        {id: v1(), message: 'Yo'},
                    ]
                },
                {
                    id: '2',
                    sex: "male",
                    name: 'Ruslan Smirnov',
                    photo: '',
                    followed: true,
                    status: 'Ooops!',
                    email: 'ruslan@mail.ru',
                    messages: [
                        {id: v1(), message: 'Hello!'},
                        {id: v1(), message: 'You are crazy!'},
                    ]
                },
            ],
            foundFriends: [
                {
                    id: '3',
                    sex: "male",
                    name: 'Artem Gurin',
                    photo: '',
                    followed: false,
                    status: 'Doctor!',
                    email: 'tatatumba@mail.ru',
                    messages: [
                        {id: v1(), message: 'You like it?!'},
                        {id: v1(), message: 'No, of course!'},
                    ]
                },
                {
                    id: '4',
                    sex: "male",
                    name: 'Vasya Bond',
                    photo: '',
                    followed: true,
                    status: 'BlaBla!',
                    email: 'vasyabond@mail.ru',
                    messages: []
                }
            ],
            currentPage: 1,
            pageSize: 10,
            totalCountUsers: 0,
            isFetching: false,
            isFollowingInProgress: []
        }
    })

    test("one user should be unfollowed", () => {

        const endState: InitialUsersStateType = usersReducer(
          startState, followOrUnfollowUsersAC('1', false))

        expect(endState.users[0].id).toBe('1')
        expect(endState.users[0].followed).toBe(false)
    })

    test("new users should be added in 'foundFriends'", () => {
        const newUsers: FriendType[] = [
            {
                id: v1(),
                sex: "male",
                name: 'Matte Salimov',
                photo: '',
                followed: true,
                status: 'Kill you!',
                email: 'matte_salimov@gmail.com',
                messages: []
            },
            {
                id: v1(),
                sex: "female",
                name: 'Sophi Loran',
                photo: '',
                followed: true,
                status: 'Singer!',
                email: 'loren1995@gmail.com',
                messages: []
            }
        ]

        const endState: InitialUsersStateType = usersReducer(
          startState, setUsersAC(newUsers))

        expect(endState.foundFriends.length).toBe(4)
    })

    test("new message should be added", () => {
        const newMessage = "This is new message"

        const endState: InitialUsersStateType = usersReducer(
          startState, addMessageAC('1', newMessage))

        expect(endState.users[0].messages.length).toBe(4)
    })

    test("new current page should be set", () => {
        const newPage = 5

        const endState: InitialUsersStateType = usersReducer(
          startState, setCurrentPageAC(newPage))

        expect(endState.currentPage).toBe(5)
    })

    test("new total count users should be set", () => {
        const endState: InitialUsersStateType = usersReducer(
          startState, setTotalCountUsersAC(200))

        expect(startState.totalCountUsers).toBe(0)
        expect(endState.totalCountUsers).toBe(200)
    })

    test("isFetching should change its value", () => {
        const endState: InitialUsersStateType = usersReducer(
          startState, toggleIsFetchingAC(true))

        expect(startState.isFetching).toBe(false)
        expect(endState.isFetching).toBe(true)
    })

    test("IsFollowingInProgress must change its value when following or unsubscribing", () => {
        const endState: InitialUsersStateType = usersReducer(
          startState, toggleIsFollowingInProgressAC('1', true))

        expect(startState.isFollowingInProgress.length).toBe(0)
        expect(endState.isFollowingInProgress.length).toBe(1)
        expect(endState.isFollowingInProgress).toContain('1')
    })

    test("user from foundFriends should be followed", () => {
        const endState: InitialUsersStateType = usersReducer(
          startState, followingUserAC('3'))

        expect(startState.foundFriends[0].followed).toBe(false)
        expect(endState.foundFriends[0].followed).toBe(true)

    })

    test("user from foundFriends should be unfollowed", () => {
        const endState: InitialUsersStateType = usersReducer(
          startState, unfollowingUserAC('4'))

        expect(startState.foundFriends[1].followed).toBe(true)
        expect(endState.foundFriends[1].followed).toBe(false)
    })

    test("when clicking showMore page size should be increased by 10", () => {
        const endState: InitialUsersStateType = usersReducer(
          startState, showMoreAC())

        expect(startState.pageSize).toBe(10)
        expect(endState.pageSize).toBe(20)
    })
})
