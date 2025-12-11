import { Meta, StoryObj } from '@storybook/react';
import VetorialImage from './VetorialImage';

const meta: Meta<typeof VetorialImage> = {
    title: 'Components/VetorialImage',
    component: VetorialImage,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ["slim", "regular", "medium", "large", "natural"],
        },
        svg: { control: 'object' },
    }
};

export default meta;

type Story = StoryObj<typeof VetorialImage>;

export const Default: Story = {
    args: {
        size: "regular",
        svg: '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
    },
};