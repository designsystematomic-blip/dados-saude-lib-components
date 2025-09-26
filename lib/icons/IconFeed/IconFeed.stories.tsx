import { Meta, StoryObj } from "@storybook/react";
import Feed from "./IconFeed";

const meta: Meta<typeof Feed> = {
  title: "Icons/Feed",
  component: Feed,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Feed>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "0476D9",
  },
};
