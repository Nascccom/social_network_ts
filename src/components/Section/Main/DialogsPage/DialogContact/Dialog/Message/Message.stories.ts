import type {Meta, StoryObj} from '@storybook/react';
import {Message} from "./Message.tsx";
import {mockStore} from "../../../../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";


const meta = {
    title: 'Components/Section/Main/DialogsPage/Message',
    component: Message,
    tags: ['autodocs'],
    decorators: [mockStore]

} satisfies Meta<typeof Message>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Message for message'
    }
}

