export type InputProps = {
  id: string;
  ariaLabel: string;
  labelId: string;
  label: string;
  placeholder: string;
  description: string;
  info: string;
  height: number;
  clear?: boolean;
  protect?: boolean;
  value: string;
  handleOnChange: () => void;
  type: "text" | "password" | "email";
  maxTextLength?: number;
  regex?: "string";
};
