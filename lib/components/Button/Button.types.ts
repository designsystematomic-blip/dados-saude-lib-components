export type ButtonProps = {
  type: "button" | "submit" | "reset";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label: string;
  ariaLabel?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
};
