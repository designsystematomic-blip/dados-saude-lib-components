import { StoryObj } from "@storybook/react";
import Input from "./Input";
import { useState } from "react";

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

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(event.target.value);
  };

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
      {...{ onChange: handleOnChange, value: info }}
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
