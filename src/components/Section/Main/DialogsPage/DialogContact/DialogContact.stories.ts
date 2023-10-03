import type {Meta, StoryObj} from '@storybook/react';
import {DialogContact} from "./DialogContact.tsx";
import {mockStore} from "../../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";
import * as Dialog from "./Dialog/Dialog.stories.ts"

const meta = {
    title: 'Components/Section/Main/DialogsPage/DialogContact',
    component: DialogContact,
    tags: ['autodocs'],
    decorators: [mockStore],

} satisfies Meta<typeof DialogContact>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...Dialog.Default.args
    }
}

