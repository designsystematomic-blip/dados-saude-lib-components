export type InputProps = {
  id: string;
  type: "text" | "password" | "email" | "date";
  ariaLabel: string;
  labelId: string;
  label: string;
  placeholder: string;
  description?: string;
  height?: string;
  clear?: boolean;
  maxTextLength?: number;
  style?: React.CSSProperties;
  hasError?: boolean;
  handleClear?: () => void;
};
