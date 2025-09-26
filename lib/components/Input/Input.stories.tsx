import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { ReactEventHandler, useState } from "react";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Type here",
  },
};

const Template = (args: any) => {
  const [info, setInfo] = useState<string>("");

  return (
    <Input
      {...args}
      id={"input-storybook"}
      ariaLabel={"input-storybook"}
      labelId={"input-storybook"}
      type={"text"}
      height={42}
      label={"Enter your name"}
      placeholder="Ex: Maria"
      info="Only text"
      description="Max caracteres: 100"
      content={info}
      value={info}
      handleOnChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setInfo(e.target.value)
      }
      protect={true}
    />
  );
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: Template,
  args: {
    // Add default props here if needed
  },
};
