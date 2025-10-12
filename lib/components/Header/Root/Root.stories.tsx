import { Meta, StoryObj } from "@storybook/react";
import Root from "./Root";

const meta: Meta<typeof Root> = {
  title: "Components/Header/Root",
  component: Root,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Root>;

export const Default: Story = {
  args: {
    children: "Root of component Header",
  },
};
