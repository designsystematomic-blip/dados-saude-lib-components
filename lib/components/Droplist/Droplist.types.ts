export type DroplistProps = { 
	label?: string;
	name: string;
	placeholder: string;
	listTitle?: string;
	list: Items[];
	handleSelectItem: (item: Items) => void;
	customClassName?: string;
	width?: 'full' | 'half' | 'third';
	variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  color?: string;
};

export type Items = {
	name: string,
	value: string | number
}