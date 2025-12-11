import { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
    title: 'Components/Image',
    component: Image,
    tags: ['autodocs'],
    argTypes: {
        src: { control: "text" },
        alt: { control: "text" },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large", "original"],
        },
    }
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: '../../../assets/logoWithName.png',
        alt: 'Logo Placeholder',
        size: 'medium',
    },
};