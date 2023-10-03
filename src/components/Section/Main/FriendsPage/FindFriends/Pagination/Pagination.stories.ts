import type {Meta, StoryObj} from '@storybook/react';
import {mockStore} from "../../../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";
import {Pagination} from "./Pagination.tsx";

const meta = {
    title: 'Components/Section/Main/FriendsPage/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    decorators: [mockStore],

} satisfies Meta<typeof Pagination>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentPage: 4,
        totalCountUsers: 100,
        pageSize: 5
    }
}

