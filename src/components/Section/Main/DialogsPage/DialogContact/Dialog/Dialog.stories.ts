import type {Meta, StoryObj} from '@storybook/react';
import {Dialog} from "./Dialog.tsx";
import {mockStore} from "../../../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";


const meta = {
    title: 'Components/Section/Main/DialogsPage/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    decorators: [mockStore],
    argTypes: {

    },
} satisfies Meta<typeof Dialog>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        friendId: '1'
    }
}

