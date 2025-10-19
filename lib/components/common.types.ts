export interface BaseComponent {
	tag?: "p" | "a" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	textSize?: "small" | "medium" | "large";
	fontFamily?: "primary" | "secondary" | "tertiary";
	fontWeight?: "light" | "regular" | "semibold" | "bold";
  textAlign?: "left" | "center" | "right" | "justify";
	textColor?: string;
}