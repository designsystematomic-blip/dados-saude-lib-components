import { Meta, StoryObj } from '@storybook/react';
import ChevronDown from './IconChevronDown';

const meta: Meta<typeof ChevronDown> = {
    title: 'Icons/ChevronDown',
    component: ChevronDown,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ChevronDown>;

export const Default: Story = {
    args: {
        // Add default props here if needed
        fillColor: 'currentColor',
        pathColor: 'currentColor',
        width: '24',
        height: '24',
    },
};