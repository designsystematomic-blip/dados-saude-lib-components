import { Meta, StoryObj } from '@storybook/react';
import Action from './Action';

const meta: Meta<typeof Action> = {
    title: 'Components/Header/Action',
    component: Action,
    tags: ['autodocs'],
    args: {
        icon: '',
        ariaLabel: 'Close',
        name: 'header-action',
        label: 'Close',
        onClick: () => alert('Action clicked'),
    },
    argTypes: {
        icon: { control: "text" },
        ariaLabel: { control: "text" },
        name: { control: "text" },
        label: { control: "text" },
    },
};

export default meta;

type Story = StoryObj<typeof Action>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};