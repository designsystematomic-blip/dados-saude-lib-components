export type TextProps = {
  content?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  color?: string;
  align?: "left" | "center" | "right" | "justify";
  children?: React.ReactNode;
};
