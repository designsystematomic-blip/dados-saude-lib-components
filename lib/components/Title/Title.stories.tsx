import { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
    title: 'Components/Title',
    component: Title,
    tags: ['autodocs'],
    argTypes: {
        content: { control: 'text' },
        textAlign: {
            control: { type: 'select' },
            options: ['left', 'center', 'right', 'justify'],
        },
        fontFamily: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
        },
        fontWeight: {
            control: { type: 'select' },
            options: ['light', 'normal', 'bold', 'regular'],
        }
    }
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
    args: {
        content:
        'This is a Title Component',
    },
};