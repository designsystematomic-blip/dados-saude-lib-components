import { BaseComponent } from "../common.types";

export interface DividerProps extends BaseComponent { 
	thickness?: string;
	color?: string;
	borderRight?: boolean;
	borderLeft?: boolean;
	children?: React.ReactNode;
};