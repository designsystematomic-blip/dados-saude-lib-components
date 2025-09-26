import { Meta, StoryObj } from "@storybook/react";
import MedicalInformation from "./IconMedicalInformation";

const meta: Meta<typeof MedicalInformation> = {
  title: "Icons/MedicalInformation",
  component: MedicalInformation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MedicalInformation>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "#0476D9",
    pathColor: "currentColor",
    width: "24",
    height: "24",
  },
};
