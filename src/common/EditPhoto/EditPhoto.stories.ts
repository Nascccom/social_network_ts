import type {Meta, StoryObj} from '@storybook/react';
import EditPhoto from "./EditPhoto.tsx";


const meta = {
    title: 'Common/EditPhoto',
    component: EditPhoto,
    tags: ['autodocs'],

} satisfies Meta<typeof EditPhoto>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}

