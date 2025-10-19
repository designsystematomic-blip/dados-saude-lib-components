import { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
    tags: ['autodocs'],
    argTypes: {
        thickness: {
            control: { type: 'number', min: 1, max: 10, step: 1 },
        },
        color: { control: 'color' },
        children: { control: 'text' },  
    },
    args: {
        thickness: '1px',
        color: '#000000',
    }
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
    args: {
        children: 'Divider',
        borderLeft: true,
        borderRight: true,
    },
};