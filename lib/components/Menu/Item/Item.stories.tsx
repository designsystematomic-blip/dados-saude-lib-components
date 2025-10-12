import { Meta, StoryObj } from '@storybook/react';
import Item from './Item';

const meta: Meta<typeof Item> = {
    title: 'Components/Menu/Item',
    component: Item,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};