import { Meta, StoryObj } from "@storybook/react";
import Wrapper from "./Wrapper";

const meta: Meta<typeof Wrapper> = {
  title: "Components/Header/Wrapper",
  component: Wrapper,
  tags: ["autodocs"],
  args: {
    children: 'Header Wrapper Content',
  },
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
  args: {
    // Add default props here if needed
  },
};
