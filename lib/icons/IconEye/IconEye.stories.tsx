import { Meta, StoryObj } from "@storybook/react";
import Eye from "./IconEye";

const meta: Meta<typeof Eye> = {
  title: "Icons/Eye",
  component: Eye,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Eye>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "#A1ABB2",
    pathColor: "currentColor",
    width: "24",
    height: "24",
  },
};
