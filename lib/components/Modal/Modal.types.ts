export type ModalProps = {
	id: string;
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
	position?: 'left' | 'right';
	customClassName?: string;
	width: 'full' | 'half' | 'large' | 'third';
};