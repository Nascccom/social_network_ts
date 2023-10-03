import type {Meta, StoryObj} from '@storybook/react';
import {FriendCard} from "./FriendCard.tsx";
import {mockStore} from "../../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'Components/Section/Main/FriendsPage/FriendCard',
    component: FriendCard,
    tags: ['autodocs'],
    decorators: [mockStore],

} satisfies Meta<typeof FriendCard>;


export default meta;
type Story = StoryObj<typeof meta>;

export const FollowedPerson: Story = {
    args: {
        id: '1',
        name: 'Jonh Doe',
        followed: true,
        status: 'I love this life',
        photo: '',
        disabled: false,
        callback: action('callback')
    }
}

export const UnfollowedPerson: Story = {
    args: {
        ...FollowedPerson.args,
        followed: false,
        status: 'Check me',
    }
}

