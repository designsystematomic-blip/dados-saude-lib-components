export type ListProps = { 
	children: React.ReactNode;
	listStyle?: 'bullet' | 'noBullet';
	direction: 'row' | 'column';
	style?: React.CSSProperties;
};