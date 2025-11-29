import { IconMedication } from '@lib/icons';
import { Meta, StoryObj } from '@storybook/react';
import CardAction from './CardAction';

const meta: Meta<typeof CardAction> = {
  title: 'Components/CardAction',
  component: CardAction,
  tags: ['autodocs'],
  args: {
    label: 'Medicamentos',
    icon: <IconMedication fillColor="rgba(4, 118, 217, 0.6)" />,
    onClick: () => alert('Button clicked!'),
    isDisabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof CardAction>;

export const Default: Story = {
  args: {
    label: 'Medicamentos',
    icon: <IconMedication fillColor="rgba(4, 118, 217, 0.6)" />,
    onClick: () => alert('Button clicked!'),
    isDisabled: false,
  },
};
