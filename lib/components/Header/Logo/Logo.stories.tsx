import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
    title: 'Components/Header/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
        src: { control: "text" },
        svg: { control: "text" },
        size: {
            control: { type: "select" },
            options: ["slim", "regular", "medium", "large", "original"],
        },
        alt: { control: "text" },
        url: { control: "text" },
        type: {
            control: { type: "select" },
            options: ["img", "svg"],
        }
    }
};


export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
    args: {
        type: 'img',
        src: '../../../assets/logoWithName.png',
        size: 'original',
        alt: 'Logo Placeholder',
        url: 'https://example.com',
    },
};