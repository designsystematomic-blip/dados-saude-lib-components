export type SelectProps = {
  id: string;
  ariaLabel: string;
  labelId: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  style?: React.CSSProperties;
	variant?: "primary" | "secondary" | "tertiary";
	size?: "small" | "medium" | "large";
	isDisabled?: boolean;
	defaultValue?: string;
};
