import type {Meta, StoryObj} from '@storybook/react';
import {Checkbox} from "./Checkbox.tsx";
import {action} from "@storybook/addon-actions";


const meta = {
    title: 'Common/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],

} satisfies Meta<typeof Checkbox>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onChange: action('Click')
    }
}

