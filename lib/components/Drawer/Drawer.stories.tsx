import { IconClose } from '@lib/icons';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Drawer from './Drawer';

type Story = StoryObj<typeof Drawer>;

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    args: {
        position: 'left',
        width: 'half',
        children: 'Teste',
    },
    argTypes: {
        position: { control: "text" },
        width: {
            control: { type: "select" },
            options: ["full", "half", "third"],
        },
        children: {
            control: "text",
            "defaultValue": "Teste"
        }
    },
};

export default meta;

const DrawerLeft = (args: any) => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);
    const isDirection = args.position;
    return (
        <>
            <div
                style={{
                    width: '100%',
                    display: 'flex'
                }}
            >
                <button 
                    style={{ 
                        padding: '10px', 
                        border: '1px solid', 
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: isDirection === 'right' ? 'auto' : '',
                        marginLeft: isDirection === 'left' ? 'auto' : '',
                    }} 
                    onClick={toggleDrawer}
                >
                    Open drawer
                </button>
            </div>
            <Drawer {...args} isOpen={open} onClose={toggleDrawer} />
        </>
    );
};

export const Default: Story = {
    name: 'Drawer Left',
    render: DrawerLeft,
    args: {
        position: 'left',
        width: 'half',
        children: <>Teste</>,
    },
    argTypes: {
        position: { control: "text" },
        width: {
            control: { type: "select" },
            options: ["full", "half", "third"],
        },
        children: {
            control: "text",
            "defaultValue": "Teste"
        }
    },
};

export const DrawerChildren: Story = {
    name: 'Drawer Children',
    render: DrawerChildrenComponent,
    args: {
        position: 'left',
        width: 'half',
    },
    argTypes: {
        position: { control: "text" },
        width: {
            control: { type: "select" },
            options: ["full", "half", "third"],
        },
        children: {
            control: "text"
        }
    },
}

function DrawerChildrenComponent (args: any) {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);
    const isDirection = args.position;
    return (
        <>
            <div
                style={{
                    width: '100%',
                    display: 'flex'
                }}
            >
                <button 
                    style={{ 
                        padding: '10px', 
                        border: '1px solid', 
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: isDirection === 'right' ? 'auto' : '',
                        marginLeft: isDirection === 'left' ? 'auto' : '',
                    }} 
                    onClick={toggleDrawer}
                    name="open"
                    aria-label="open"
                >
                    Open drawer
                </button>
            </div>
            <Drawer {...args} isOpen={open} onClose={toggleDrawer} >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <p>Component Header</p>
                    <button 
                        type="button" 
                        onClick={() => {
                        console.log('drawer overlay') 
                        setOpen(!open)
                        }}
                        style={{
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        name="close"
                        aria-label="close"
                    >
                        <IconClose />
                    </button>
                </div>
                <h1>Olá, sou o título filho</h1>
                {args.children}
            </Drawer>
        </>
    );
};