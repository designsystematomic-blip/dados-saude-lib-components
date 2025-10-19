import { BaseComponent } from "@lib/components/common.types";
import React from "react";

export interface ItemProps extends BaseComponent {
	iconRight?: React.ReactNode;
	name?: string;
	children?: React.ReactNode;
	iconLeft?: React.ReactNode;
  color?: string;
	style?: React.CSSProperties;
};