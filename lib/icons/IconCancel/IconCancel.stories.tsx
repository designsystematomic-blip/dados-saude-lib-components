import { Meta, StoryObj } from '@storybook/react';
import Cancel from './IconCancel';

const meta: Meta<typeof Cancel> = {
    title: 'Icons/Cancel',
    component: Cancel,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Cancel>;

export const Default: Story = {
    args: {
        // Add default props here if needed
        fillColor: 'currentColor',
        pathColor: 'currentColor',
        width: '24',
        height: '24',
    },
};