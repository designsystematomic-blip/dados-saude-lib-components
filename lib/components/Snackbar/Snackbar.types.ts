export type SnackbarProps = {
  content: string | React.ReactNode;
  type: "success" | "error" | "warning" | "info";
  isOpen: boolean;
  onClose: () => void;
};
