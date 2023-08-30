import {groupsReducer, GroupType, unfollowGroupAC} from "../reducers/groupsReducer.ts";

test("one group must be correctly lost", () => {

    const startState: GroupType[] = [
        {id: "1", nameGroup: "A", subscribers: 50, type: "Public", logo: "group1", followed: true},
        {id: "2", nameGroup: "B", subscribers: 5, type: "Private", logo: "group2", followed: true},
        {id: "3", nameGroup: "C", subscribers: 15, type: "Public", logo: "group3", followed: true},
    ]

    const endState = groupsReducer(startState, unfollowGroupAC('2'))

    expect(endState.length).toBe(2);
    expect(endState[0].id).toBe("1");
    expect(endState[1].id).toBe("3");
})