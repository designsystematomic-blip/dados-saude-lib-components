export type TitleProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: "light" | "regular" | "semibold" | "bold";
  content: string;
  variant?: "primary" | "secondary" | "tertiary";
  color?: string;
  align?: "left" | "center" | "right" | "justify";
};
