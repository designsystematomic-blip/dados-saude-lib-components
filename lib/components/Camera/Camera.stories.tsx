import { Meta, StoryObj } from '@storybook/react';
import Camera from './Camera';

const meta: Meta<typeof Camera> = {
    title: 'Components/Camera',
    component: Camera,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Camera>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};