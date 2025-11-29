import { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
    id: { control: 'text' },
    resize: { control: 'boolean' },
    hasError: { control: 'boolean' },
    height: { control: 'text' },
    label: { control: 'text' },
    labelId: { control: 'text' },
    maxTextLength: { control: 'number' },
    placeholder: { control: 'text' },
    style: { control: 'object' },
    fontFamily: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    textSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    // Add default props here if needed
  },
};
