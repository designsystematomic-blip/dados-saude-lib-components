import { Meta, StoryObj } from "@storybook/react";
import Medication from "./IconMedication";

const meta: Meta<typeof Medication> = {
  title: "Icons/Medication",
  component: Medication,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Medication>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "#0476D9",
    pathColor: "currentColor",
    width: "24",
    height: "24",
  },
};
