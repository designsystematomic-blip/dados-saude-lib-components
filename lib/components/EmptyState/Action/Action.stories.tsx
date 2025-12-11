import { Meta, StoryObj } from '@storybook/react';
import Action from './Action';

const meta: Meta<typeof Action> = {
    title: 'Components/EmptyState/Action',
    component: Action,
    tags: ['autodocs'],
    args: {
        children: 'Empty State Action',
    },
    argTypes: {
        children: { control: "text" },
    },
};

export default meta;

type Story = StoryObj<typeof Action>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};