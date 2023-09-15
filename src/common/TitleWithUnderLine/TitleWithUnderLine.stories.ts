import type {Meta, StoryObj} from '@storybook/react';
import {TitleWithUnderLine} from "./TitleWithUnderLine.tsx";

const meta = {
    title: 'Common/Title',
    component: TitleWithUnderLine,
    tags: ['autodocs'],

} satisfies Meta<typeof TitleWithUnderLine>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Page',
    },
}

