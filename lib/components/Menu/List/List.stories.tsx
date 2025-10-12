import { Meta, StoryObj } from '@storybook/react';
import List from './List';

const meta: Meta<typeof List> = {
    title: 'Components/Menu/List',
    component: List,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};