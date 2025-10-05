export type InputProps = {
  id: string;
  ariaLabel: string;
  labelId: string;
  label: string;
  placeholder: string;
  description: string;
  height?: number;
  clear?: boolean;
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password" | "email";
  maxTextLength?: number;
  regex?: "string";
};
