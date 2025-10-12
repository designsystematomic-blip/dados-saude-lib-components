export type DrawerProps = {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
	position?: 'left' | 'right';
	customClassName?: string;
	width: 'full' | 'half' | 'third';
};