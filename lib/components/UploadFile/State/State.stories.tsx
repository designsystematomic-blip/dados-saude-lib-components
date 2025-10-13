import { Meta, StoryObj } from '@storybook/react';
import State from './State';

const meta: Meta<typeof State> = {
    title: 'Components/State',
    component: State,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof State>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};