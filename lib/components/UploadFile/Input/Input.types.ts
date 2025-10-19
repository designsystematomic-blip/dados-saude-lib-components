import { BaseComponent } from "@lib/components/common.types";

export interface InputProps extends BaseComponent {
	icon?: React.ReactNode;
	label: string;
	name: string;
	id: string;
	accept: string;
	acceptDescription?: string;
	multiple?: boolean;
	buttonColor?: string;
	acceptDescriptionColor?: string;

	isDisabled?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

	showFilesList?: boolean;
	filesList?: File[] | null;
}