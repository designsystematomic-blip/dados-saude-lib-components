export type ButtonProps = {
  type: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  label: string;
  ariaLabel?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
};
