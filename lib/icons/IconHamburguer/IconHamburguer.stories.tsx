import { Meta, StoryObj } from '@storybook/react';
import Hamburguer from './IconHamburguer';

const meta: Meta<typeof Hamburguer> = {
    title: 'Icons/Hamburguer',
    component: Hamburguer,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Hamburguer>;

export const Default: Story = {
    args: {
        // Add default props here if needed
        fillColor: 'currentColor',
        pathColor: 'currentColor',
        width: '24',
        height: '24',
    },
};