import { Meta, StoryObj } from '@storybook/react';
import Item from './Item';

const meta: Meta<typeof Item> = {
    title: 'Components/Menu/Item',
    component: Item,
    tags: ['autodocs'],
    args: {
        iconLeft: '',
        iconRight: '>',
        children: 'Menu Item',
        name: '',
        fontFamily: 'primary',
        textSize: 'medium',
        textAlign: 'left',
        color: '#000000',
        style: { padding: '8px 16px', cursor: 'pointer' }
    },
    argTypes: {
        iconLeft: { control: "text" },
        iconRight: { control: "text" },
        children: { control: "text" },
        name: { control: "text" },
        fontFamily: { control: "text" },
        textSize: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        textAlign: {
            control: { type: "select" },
            options: ["left", "center", "right"],
        },
        color: { control: "color" },
        style: { control: "object" },
    }
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};