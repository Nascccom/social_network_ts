import type {Meta, StoryObj} from '@storybook/react';
import {MyFriends} from "./MyFriends.tsx";
import {mockStore} from "../../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";

const meta = {
    title: 'Components/Section/Main/FriendsPage/MyFriends',
    component: MyFriends,
    tags: ['autodocs'],
    decorators: [mockStore],

} satisfies Meta<typeof MyFriends>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        filter: true
    }
}

