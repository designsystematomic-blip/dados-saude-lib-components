export type TextProps = {
  content?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  align?: "left" | "center" | "right" | "justify";
  color?: string;
  children?: React.ReactNode;
};
