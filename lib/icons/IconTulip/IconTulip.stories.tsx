import { Meta, StoryObj } from "@storybook/react";
import Tulip from "./IconTulip";

const meta: Meta<typeof Tulip> = {
  title: "Icons/Tulip",
  component: Tulip,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tulip>;

export const Default: Story = {
  args: {},
};
