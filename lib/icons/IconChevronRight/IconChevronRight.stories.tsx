import { Meta, StoryObj } from "@storybook/react";
import ChevronRight from "./IconChevronRight";

const meta: Meta<typeof ChevronRight> = {
  title: "Icons/ChevronRight",
  component: ChevronRight,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChevronRight>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "currentColor",
  },
};
