import type {Meta, StoryObj} from '@storybook/react';
import {Preloader} from "./Preloader.tsx";


const meta = {
    title: 'Common/Preloader',
    component: Preloader,
    tags: ['autodocs'],

} satisfies Meta<typeof Preloader>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        styles: {width: '200px', height: '200px'}
    }
}

