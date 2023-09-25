import type {Meta, StoryObj} from '@storybook/react';
import {UserAvatar} from "./UserAvatar.tsx";


const meta = {
    title: 'Common/UserAvatar',
    component: UserAvatar,
    tags: ['autodocs'],
    parameters: {
        sex: {
            type: 'radio',
            options: ['Male', 'Female']
        }
    }

} satisfies Meta<typeof UserAvatar>;


export default meta;
type Story = StoryObj<typeof meta>;

export const ManAvatar: Story = {
    args: {
        photo: '',
        alt: `Avatar`,
        sex: 'male'
    },
}

export const WomanAvatar: Story ={
    args: {
        ...ManAvatar.args,
        sex: 'female'
    }
}

