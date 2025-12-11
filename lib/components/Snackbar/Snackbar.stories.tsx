import { StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "../Button";
import Snackbar from "./Snackbar";

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
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <Button 
        onClick={toggleDrawer}
        variant="primary"
        label="Action"
        type="button"
      />
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
