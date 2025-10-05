import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    content: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: { control: "color" },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at massa convallis aliquam.",
  },
};
