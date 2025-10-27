import { BaseComponent } from "../common.types";

export interface DroplistProps extends BaseComponent { 
	label?: string;
	name: string;
	placeholder: string;
	listTitle?: string;
	list: Items[];
	customClassName?: string;
	width?: 'full' | 'half' | 'third';
  color?: string;
  hasError?: boolean;
	handleSelectItem: (item: Items) => void;
};

export type Items = {
	name: string,
	value: string | number
}