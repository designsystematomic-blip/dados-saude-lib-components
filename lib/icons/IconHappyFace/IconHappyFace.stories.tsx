import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HappyFace from './IconHappyFace';

const meta: Meta<typeof HappyFace> = {
    title: 'Icons/HappyFace',
    component: HappyFace,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HappyFace>;

export const Default: Story = {
    args: {
        // Add default props here if needed
        fillColor: 'currentColor',
        pathColor: 'currentColor',
        width: '24',
        height: '24',
    },
};