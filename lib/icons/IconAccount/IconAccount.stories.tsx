import { Meta, StoryObj } from "@storybook/react";
import Account from "./IconAccount";

const meta: Meta<typeof Account> = {
  title: "Icons/Account",
  component: Account,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Account>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "currentColor",
  },
};
