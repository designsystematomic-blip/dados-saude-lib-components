import { Meta, StoryObj } from '@storybook/react';
import Close from './IconClose';

const meta: Meta<typeof Close> = {
    title: 'Icons/Close',
    component: Close,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Close>;

export const Default: Story = {
    args: {
        // Add default props here if needed
        fillColor: 'currentColor',
        pathColor: 'currentColor',
        width: '24',
        height: '24',
    },
};