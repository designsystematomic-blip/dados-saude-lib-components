import { Meta, StoryObj } from '@storybook/react';
import Filter from './IconFilter';

const meta: Meta<typeof Filter> = {
    title: 'Icons/Filter',
    component: Filter,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
    args: {
        // Add default props here if needed
        fillColor: 'currentColor',
        pathColor: 'currentColor',
        width: '24',
        height: '24',
    },
};