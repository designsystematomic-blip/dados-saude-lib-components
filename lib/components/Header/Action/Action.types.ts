export type ActionProps = {
  ariaLabel: string;
  name: string;
  label?: string;
  icon?: string | React.ReactNode;
  onClick: () => void;
};
