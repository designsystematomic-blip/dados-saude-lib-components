export type TextareaProps = {
  ariaLabel: string;
  id: string;
	resize: boolean;
  hasError?: boolean;
  height?: string;
  label: string;
  labelId: string;
  maxTextLength?: number;
  placeholder: string;
  style?: React.CSSProperties;
	variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  color?: string;
};
