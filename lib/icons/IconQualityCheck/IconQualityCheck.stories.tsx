import { Meta, StoryObj } from "@storybook/react";
import QualityCheck from "./IconQualityCheck";

const meta: Meta<typeof QualityCheck> = {
  title: "Icons/QualityCheck",
  component: QualityCheck,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof QualityCheck>;

export const Default: Story = {
  args: {},
};
