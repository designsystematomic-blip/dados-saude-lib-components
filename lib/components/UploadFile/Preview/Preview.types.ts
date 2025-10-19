export type PreviewProps = {
	title?: string;
	files: File[] | null;
	onRemove: (file: File) => void;
	allowMultipleSelection?: boolean;
	showFileInfo?: boolean;
};