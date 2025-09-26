import { Meta, StoryObj } from "@storybook/react";
import PeopleAlt from "./IconPeopleAlt";

const meta: Meta<typeof PeopleAlt> = {
  title: "Icons/PeopleAlt",
  component: PeopleAlt,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PeopleAlt>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "#0476D9",
    pathColor: "currentColor",
    width: "24",
    height: "24",
  },
};
