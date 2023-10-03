import type {Meta, StoryObj} from '@storybook/react';
import {Contact} from "./Contact.tsx";
import {action} from "@storybook/addon-actions";
import {mockStore} from "../../../../redux/decoratorForStorybook/decoratorForStorybook.tsx";
import styles from './Contact.module.css'

const meta = {
    title: 'Components/Section/Contacts/Contact',
    component: Contact,
    tags: ['autodocs'],
    decorators: [
        mockStore,
        (Story) => (
          <div className={styles.contact}>
              <Story/>
          </div>
        ),
    ],
} satisfies Meta<typeof Contact>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: '1',
        sex: 'male',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Doe',
        email: 'john.doe@example.com',
        setFriendId: action('setFriendId'),
        changePageLayout: action('changePageLayout'),
    },
}

export const FemaleContact: Story = {
    args: {
        ...Default.args,
        id: '2',
        sex: 'female',
        photo: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
    }
}

export const NoPhotoContact: Story = {
    args: {
        ...Default.args,
        id: '3',
        photo: '',
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
    }
}

