import { Meta, StoryObj } from '@storybook/react';
import VetorialImage from './VetorialImage';

const meta: Meta<typeof VetorialImage> = {
    title: 'Components/VetorialImage',
    component: VetorialImage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VetorialImage>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};