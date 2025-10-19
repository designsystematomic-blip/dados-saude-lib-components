export type LoadingBarProps = {
	files: File[] | undefined;
	showPercentage?: boolean;
	backgroundColor?: string;
	progressColor?: string;
	loadingMessage?: string;
	loadedMessage?: string;
	onChange?: (progress: number) => void;
};