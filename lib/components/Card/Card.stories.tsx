import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    args: {
        title: 'Card Title',
        subtitle: 'This is a subtitle for the card component.',
        link: {
            href: '#',
            text: 'Learn More',
            textColor: '#1E90FF'
        },
        fontFamily: 'primary',
        fontWeight: 'regular',
        textAlign: 'left',
        textSize: 'medium',
        titleColor: '#000000',
        subtitleColor: '#555555',
        style: { padding: '16px', border: '1px solid #ddd', borderRadius: '8px' }
    }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};