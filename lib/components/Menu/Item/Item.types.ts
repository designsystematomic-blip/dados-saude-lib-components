import React from "react";

export type ItemProps = {
	iconRight?: React.ReactNode;
	name?: string;
	children?: React.ReactNode;
	iconLeft?: React.ReactNode;
	variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  color?: string;
  align?: "left" | "center" | "right" | "justify";
	style?: React.CSSProperties;
};