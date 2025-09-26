import { Meta, StoryObj } from "@storybook/react";
import ContactPeople from "./IconContactPeople";

const meta: Meta<typeof ContactPeople> = {
  title: "Icons/ContactPeople",
  component: ContactPeople,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ContactPeople>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "#0476D9",
    pathColor: "currentColor",
    width: "24",
    height: "24",
  },
};
