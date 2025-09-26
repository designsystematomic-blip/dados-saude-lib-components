import { Meta, StoryObj } from "@storybook/react";
import Snackbar from "./Snackbar";
import { useState } from "react";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  args: {
    content: "Lorem ipsum dolor",
    type: "success",
    isOpen: false,
  },
};

const Template = (args: any) => {
  // Use a state to manage the drawer visibility for demonstration
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <button onClick={toggleDrawer}>Open </button>
      <Snackbar {...args} isOpen={open} onClose={toggleDrawer} />
    </>
  );
};

type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  render: Template,
  args: {
    isOpen: false,
    content: "Lorem ipsum dolor",
    type: "success",
  },
};
