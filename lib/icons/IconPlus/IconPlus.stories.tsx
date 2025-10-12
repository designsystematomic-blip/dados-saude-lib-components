import { Meta, StoryObj } from '@storybook/react';
import Plus from './IconPlus';

const meta: Meta<typeof Plus> = {
    title: 'Icons/Plus',
    component: Plus,
    tags: ['autodocs'],
    args: {
        fillColor: "#ccc"
    },
    argTypes: {
        fillColor: {
            control: "text",
        }
    }
};

export default meta;

type Story = StoryObj<typeof Plus>;

export const Default: Story = {
    args: {
        // Add default props here if needed
        fillColor: 'currentColor',
        pathColor: 'currentColor',
        width: '24',
        height: '24',
    },
};