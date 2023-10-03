import type {Meta, StoryObj} from '@storybook/react';
import {FindFriends} from "./FindFriends.tsx";
import {mockStore} from "../../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";

const meta = {
    title: 'Components/Section/Main/FriendsPage/FindFriends',
    component: FindFriends,
    tags: ['autodocs'],
    decorators: [mockStore],

} satisfies Meta<typeof FindFriends>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}

