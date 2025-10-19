import { BaseComponent } from "../common.types";

export interface DroplistProps extends BaseComponent { 
	label?: string;
	name: string;
	placeholder: string;
	listTitle?: string;
	list: Items[];
	handleSelectItem: (item: Items) => void;
	customClassName?: string;
	width?: 'full' | 'half' | 'third';
  color?: string;
};

export type Items = {
	name: string,
	value: string | number
}