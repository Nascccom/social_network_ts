import type {Meta, StoryObj} from '@storybook/react';
import {Input} from "./Input.tsx";
import {action} from "@storybook/addon-actions";


const meta = {
    title: 'Common/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: {type: 'select'},
            options: ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email',
                'file', 'hidden', 'image', 'month', 'number', 'password',
                'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text',
                'time', 'url', 'week']
        }
    }

} satisfies Meta<typeof Input>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'search',
        placeholder: "Search contact...",
        onChangeCallback: (text) => action(text),
        styles: ''
    }
}

