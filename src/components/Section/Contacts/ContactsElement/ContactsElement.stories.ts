import type {Meta, StoryObj} from '@storybook/react';
import {ContactsElement} from "./ContactsElement.tsx";
import {mockStore} from "../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";
import * as Contact from "../Contact/Contact.stories.tsx";
import {action} from "@storybook/addon-actions";


const meta = {
    title: 'Components/Section/Contacts/ContactsElement',
    component: ContactsElement,
    tags: ['autodocs'],
    decorators: [mockStore]

} satisfies Meta<typeof ContactsElement>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        contactsArray: [
            {
                ...Contact.Default.args,
                followed: true,
                status: 'I am a decorator',
                messages: [{id: '1', message: 'Hello, Guys'}]
            },
            {
                ...Contact.FemaleContact.args,
                followed: true,
                status: 'I am a producer',
                messages: [{id: '2', message: 'Hello, Girls'}]
            },
            {
                ...Contact.NoPhotoContact.args,
                followed: false,
                status: 'I am a manager',
                messages: [{id: '3', message: 'Hi'}]
            }
        ],
        setFriendId: action('Id'),
        changePageLayout: action('Section')
    },
}

