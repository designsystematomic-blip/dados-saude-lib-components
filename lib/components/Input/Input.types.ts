export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  type: "text" | "password" | "email" | "date";
  ariaLabel: string;
  labelId: string;
  label: string;
  showLabel?: boolean;
  placeholder: string;
  description?: string;
  height?: string;
  clear?: boolean;
  maxTextLength?: number;
  style?: React.CSSProperties;
  hasError?: boolean;
  handleClear?: () => void;
};
