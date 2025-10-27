import { BaseComponent } from "../common.types";

export interface CheckboxProps extends BaseComponent { 
	id: string;
	ariaLabel: string;
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
	disabled?: boolean;
	customClassName?: string;
};