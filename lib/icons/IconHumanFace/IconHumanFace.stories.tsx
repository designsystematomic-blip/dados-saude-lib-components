import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HumanFace from "./IconHumanFace";

const meta: Meta<typeof HumanFace> = {
  title: "Icons/HumanFace",
  component: HumanFace,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HumanFace>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "currentColor",
  },
};
