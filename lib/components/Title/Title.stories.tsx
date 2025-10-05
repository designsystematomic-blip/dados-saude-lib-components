import { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
    title: 'Components/Title',
    component: Title,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};