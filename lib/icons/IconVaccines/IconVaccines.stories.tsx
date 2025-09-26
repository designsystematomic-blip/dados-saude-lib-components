import { Meta, StoryObj } from "@storybook/react";
import Vaccines from "./IconVaccines";

const meta: Meta<typeof Vaccines> = {
  title: "Icons/Vaccines",
  component: Vaccines,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Vaccines>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "#0476D9",
    pathColor: "currentColor",
    width: "24",
    height: "24",
  },
};
