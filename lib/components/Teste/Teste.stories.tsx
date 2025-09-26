import { Meta, StoryObj } from "@storybook/react";
import Teste from "./Teste";

const meta: Meta<typeof Teste> = {
  title: "Components/Teste",
  component: Teste,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Teste>;

export const Default: Story = {
  args: {
    // Add default props here if needed
  },
};
