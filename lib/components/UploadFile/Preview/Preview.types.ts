import { BaseComponent } from "@lib/components/common.types";

export interface PreviewProps extends BaseComponent {
	title?: string;
	files: File[] | null;
	onRemove: (file: File) => void;
	allowMultipleSelection?: boolean;
	showFileInfo?: boolean;
};