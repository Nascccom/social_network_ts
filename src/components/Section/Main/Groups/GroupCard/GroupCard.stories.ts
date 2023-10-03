import type {Meta, StoryObj} from '@storybook/react';
import {mockStore} from "../../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";
import {GroupCard} from "./GroupCard.tsx";

const meta = {
    title: 'Components/Section/Main/GroupsPage/GroupCard',
    component: GroupCard,
    tags: ['autodocs'],
    decorators: [mockStore],
} satisfies Meta<typeof GroupCard>;


export default meta;
type Story = StoryObj<typeof meta>;

export const PublicGroup: Story = {
    args: {
        id: '1',
        type: 'Public',
        name: 'My own group',
        subscribers: 50,
        logo: ''
    }
}

export const PrivateGroup: Story = {
    args: {
        ...PublicGroup.args,
        type: 'Private',
    }
}

