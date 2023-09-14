import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Button} from './Button';
import addMessageFormStyle
    from './../../components/Section/Main/DialogsPage/DialogContact/AddMessageForm/AddMessageForm.module.css';
import showMoreStyle from './../ShowMore/ShowMore.module.css';
import loginFormStyle from './../../components/Section/Main/Logout/LoginForm/LoginForm.module.css'
import {faShare} from "@fortawesome/free-solid-svg-icons/faShare";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const meta = {
    title: 'Common/Button',
    component: Button,
    tags: ['autodocs'],

} satisfies Meta<typeof Button>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'Button',
        callBack: action('Clicked button'),
    },

    decorators: [],    // we can add decorators and parameters for each story
    parameters: {},
}

export const Follow: Story = {
    args: {
        ...Default.args,
        status: true
    },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true
    }
}

export const WithIcon: Story = {
    args: {
        ...Default.args,
        name: <FontAwesomeIcon icon={faShare} size="lg" style={{color: "#fff"}}/>,
        styles: addMessageFormStyle.roundedButton
    },
}


export const ShowMore: Story = {
    args: {
        ...Default.args,
        styles: showMoreStyle.btn
    },
};

export const Login: Story = {
    args: {
        ...Default.args,
        styles: loginFormStyle.btn
    }
}


//
// export const Small: Story = {
//     args: {
//         size: 'small',
//         label: 'Button',
//     },
// };
//
// export const Warning: Story = {
//     args: {
//         primary: true,
//         label: 'Delete now',
//         backgroundColor: 'red',
//     }
// };
