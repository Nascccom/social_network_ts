import type {Meta, StoryObj} from '@storybook/react';
import {Header} from "./Header.tsx";
import {mockStore} from "../../redux/decoratorForStorybook/decoratorForStorybook.tsx";


const meta = {
    title: 'Components/Header',
    component: Header,
    tags: ['autodocs'],
    decorators: [mockStore]
} satisfies Meta<typeof Header>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        section: "sectionAll"
    },
}

