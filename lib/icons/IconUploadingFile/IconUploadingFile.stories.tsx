import { Meta, StoryObj } from "@storybook/react";
import UploadingFile from "./IconUploadingFile";

const meta: Meta<typeof UploadingFile> = {
  title: "Icons/UploadingFile",
  component: UploadingFile,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UploadingFile>;

export const Default: Story = {
  args: {},
};
