import { Meta, StoryObj } from '@storybook/react';
import DocumentEmptyFolder from './IconDocumentEmptyFolder';

const meta: Meta<typeof DocumentEmptyFolder> = {
    title: 'Icons/DocumentEmptyFolder',
    component: DocumentEmptyFolder,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DocumentEmptyFolder>;

export const Default: Story = {
    args: {
        // Add default props here if needed
        fillColor: 'currentColor',
        pathColor: 'currentColor',
        width: '24',
        height: '24',
    },
};