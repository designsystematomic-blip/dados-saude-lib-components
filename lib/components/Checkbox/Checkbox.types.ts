export type CheckboxProps = { 
	id: string;
	ariaLabel: string;
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
	disabled?: boolean;
	customClassName?: string;
	color?: string;
};