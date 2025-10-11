import { Meta, StoryObj } from '@storybook/react';
import Action from './Action';

const meta: Meta<typeof Action> = {
    title: 'Components/Action',
    component: Action,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Action>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};