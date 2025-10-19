import { BaseComponent } from "../common.types";

export interface CardActionProps extends BaseComponent {
	icon?: React.ReactNode;
	label: string;
	onClick: () => void;
	isDisabled?: boolean;
};