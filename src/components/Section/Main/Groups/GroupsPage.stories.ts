import type {Meta, StoryObj} from '@storybook/react';
import {GroupsPage} from "./GroupesPage.tsx";
import {mockStore} from "../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";

const meta = {
    title: 'Components/Section/Main/GroupsPage/GroupsPage',
    component: GroupsPage,
    tags: ['autodocs'],
    decorators: [mockStore],

} satisfies Meta<typeof GroupsPage>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}

