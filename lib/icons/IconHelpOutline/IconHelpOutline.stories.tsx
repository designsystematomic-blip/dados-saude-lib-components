import { Meta, StoryObj } from "@storybook/react";
import HelpOutline from "./IconHelpOutline";

const meta: Meta<typeof HelpOutline> = {
  title: "Icons/HelpOutline",
  component: HelpOutline,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HelpOutline>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "#0476D9",
    pathColor: "currentColor",
    width: "24",
    height: "24",
  },
};
