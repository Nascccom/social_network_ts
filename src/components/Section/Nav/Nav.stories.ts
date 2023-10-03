import type {Meta, StoryObj} from '@storybook/react';
import {Nav} from "./Nav.tsx";
import {action} from "@storybook/addon-actions";
import {mockStore} from "../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";


const meta = {
    title: 'Components/Nav',
    component: Nav,
    tags: ['autodocs'],
    decorators: [mockStore]
} satisfies Meta<typeof Nav>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        section: "sectionAll",
        changePageLayout: action('Section'),
        showContacts: false
    },
}

