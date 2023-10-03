import type {Meta, StoryObj} from '@storybook/react';
import EditPhoto from "./EditPhoto.tsx";
import {mockStore} from "../../redux/decoratorForStorybook/decoratorForStorybook.tsx";


const meta = {
    title: 'Common/EditPhoto',
    component: EditPhoto,
    tags: ['autodocs'],
    decorators: [mockStore],
} satisfies Meta<typeof EditPhoto>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

