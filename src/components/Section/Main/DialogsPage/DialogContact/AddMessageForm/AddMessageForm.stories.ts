import type {Meta, StoryObj} from '@storybook/react';
import {AddMessageForm} from "./AddMessageForm.tsx";
import {action} from "@storybook/addon-actions";


const meta = {
    title: 'Components/Section/Main/DialogsPage/AddMessageForm',
    component: AddMessageForm,
    tags: ['autodocs'],


} satisfies Meta<typeof AddMessageForm>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        addMessage: action('callBack')
    }
}

