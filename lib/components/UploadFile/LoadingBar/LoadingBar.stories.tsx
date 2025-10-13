import { Meta, StoryObj } from '@storybook/react';
import LoadingBar from './LoadingBar';

const meta: Meta<typeof LoadingBar> = {
    title: 'Components/LoadingBar',
    component: LoadingBar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoadingBar>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};