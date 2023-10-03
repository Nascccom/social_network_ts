import type {Meta, StoryObj} from '@storybook/react';
import {DialogsPage} from "./DialogsPage.tsx";
import {mockStore} from "../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";

const meta = {
    title: 'Components/Section/Main/DialogsPage/DialogPage',
    component: DialogsPage,
    tags: ['autodocs'],
    decorators: [mockStore],

} satisfies Meta<typeof DialogsPage>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}

