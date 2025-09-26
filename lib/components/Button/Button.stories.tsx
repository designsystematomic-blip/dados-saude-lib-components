import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Me",
    ariaLabel: "Sample Button",
    icon: <span>🚀</span>,
    onClick: () => alert("Button clicked!"),
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Click Me",
    ariaLabel: "Sample Button",
    icon: <span>🚀</span>,
    onClick: () => alert("Button clicked!"),
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    ariaLabel: "Sample Button",
    icon: <span>🚀</span>,
    onClick: () => alert("Button clicked!"),
    variant: "secondary",
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "On Loading",
    ariaLabel: "Sample Button",
    icon: <span>🚀</span>,
    onClick: () => alert("Button clicked!"),
    variant: "secondary",
    isDisabled: true,
    isLoading: true,
  },
};
