export type CardActionProps = {
	icon?: React.ReactNode;
	label: string;
	onClick: () => void;
	variant?: "primary" | "secondary" | "tertiary";
	size?: "small" | "medium" | "large";
	isDisabled?: boolean;
};