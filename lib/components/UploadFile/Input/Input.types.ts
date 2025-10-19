export type InputProps = {
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

	variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  align?: "left" | "center" | "right" | "justify";

	showFilesList?: boolean;
	filesList?: File[] | null;
}