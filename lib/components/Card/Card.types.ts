import { BaseComponent } from "../common.types";

export interface CardProps extends BaseComponent { 
	title?: string;
	titleColor?: string;
	subtitle?: string;
	subtitleColor?: string;
	link?: {
		href: string;
		text: string;
		textColor?: string;
	};
	children?: React.ReactNode;
	style?: React.CSSProperties;
};