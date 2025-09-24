import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Wrapper from './Wrapper';

const meta: Meta<typeof Wrapper> = {
    title: 'Components/Wrapper',
    component: Wrapper,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};