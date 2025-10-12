import { Meta, StoryObj } from '@storybook/react';
import Menu from '.';
import { ItemProps } from './Item/Item.types';
import { IconChevronRight, IconTulip } from '@lib/icons';

const MenuMount = () => {
	const items: ItemProps[] = [
		{
			iconLeft: <IconTulip/>,
			name: 'Item 1',
			iconRight: <IconChevronRight />,
		},
		{
			iconLeft: <IconTulip/>,
			name: 'Item 2',
			iconRight: <IconChevronRight />,
		}
	];
	return (
		<Menu.List direction='column'>
			{items.map((item, index) => (
				<Menu.Item key={index} {...item} />
			))}
		</Menu.List>
	)
}

const meta: Meta<typeof MenuMount> = {
	title: 'Components/Menu',
	component: MenuMount,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MenuMount>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};