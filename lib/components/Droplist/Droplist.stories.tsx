import { Meta, StoryObj } from '@storybook/react';
import Droplist from './Droplist';
import { useState } from 'react';

const meta: Meta<typeof Droplist> = {
    title: 'Components/Droplist',
    component: DroplistMounted,
    tags: ['autodocs'],
    args: {
        listTitle: "Lista",
        list: [
            { value: 1, name: 'Opção 1' },
            { value: 2, name: 'Opção 2' },
            { value: 3, name: 'Opção 3' },
        ],
        placeholder: "Selecione a especialidade",
        label: "Especialidade (Opcional)",
        name: "Selectione o tipo",
        variant: "primary",
        size: "medium"
    },
    argTypes: {
        listTitle: {
            control: "text"
        },
        list: {
            control: "object"
        },
        label: {
            control: "text"
        },
        name: {
            control: "text"
        },
        placeholder: {
            control: "text"
        },
        variant: {
            control: { type: "select" },
            options: ["primary", "secondary", "tertiary"],
        },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
    }
};

function DroplistMounted(args: any) {

    const [selectedItem, setSelectedItem] = useState<{ value: string | number; name: string }>();

    const handleSelectItem = (item: { value: string | number; name: string }) => {
        setSelectedItem(item)
    }

    return (
        <div>
            <Droplist
                placeholder={args.placeholder}
                handleSelectItem={handleSelectItem}
                label={args.label}
                name={args.name}
                listTitle={args.listTitle}
                list={args.list}
                variant={args.variant}
                size={args.size}
            />

            Item selecionado: {selectedItem?.name}
        </div>
    )
}

export default meta;

type Story = StoryObj<typeof Droplist>;

export const Default: Story = {
    args: {
        // Add default props here if needed
    },
};