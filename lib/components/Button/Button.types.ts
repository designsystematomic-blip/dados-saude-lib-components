export type ButtonProps = {
  icon: React.ReactNode;
  label: string;
  ariaLabel?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
};
