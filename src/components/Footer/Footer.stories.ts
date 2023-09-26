import type {Meta, StoryObj} from '@storybook/react';
import {Footer} from "./Footer.tsx";


const meta = {
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],

} satisfies Meta<typeof Footer>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        section: "sectionAll"
    },
}

export const FooterOnTablet: Story = {
    args: {...Default.args},
    parameters: {
        viewport: {
            defaultViewport: 'tablet'
        }
    }
}

export const FooterOnMobile: Story = {
    args: {...Default.args},
    parameters: {
        viewport: {
            defaultViewport: 'mobile1'
        }
    }
}

