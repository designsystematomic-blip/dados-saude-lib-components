import { Meta, StoryObj } from "@storybook/react";
import Spinner from "./IconSpinner";

const meta: Meta<typeof Spinner> = {
  title: "Icons/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    stopColor: "#FF156D",
    strokeColor: "#FF156D",
  },
};
