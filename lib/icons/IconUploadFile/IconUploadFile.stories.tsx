import { Meta, StoryObj } from "@storybook/react";
import UploadFile from "./IconUploadFile";

const meta: Meta<typeof UploadFile> = {
  title: "Icons/UploadFile",
  component: UploadFile,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UploadFile>;

export const Default: Story = {
  args: {
    // Add default props here if needed
    fillColor: "#0476D9",
    pathColor: "currentColor",
    width: "24",
    height: "24",
  },
};
