import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '../Button';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    args: {
        //  id, children, isOpen, onClose, customClassName, width
        id: 'modal-1',
        isOpen: true,
        onClose: () => alert('Modal closed'),
        children: <div style={{ padding: '20px', borderRadius: '20px' }}>
            <h2>This is a modal content</h2>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>,
        customClassName: '',
        width: 'half',
    }
};

const ModalMounted = (args: any) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>

            <Button 
                onClick={() => setIsOpen(true)}
                label="Open Modal"
                type="button"
            />

            {isOpen && <Modal 
                {...args} 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
            />}

        </div>
    );
}

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    name: 'Default',
    render: (args) => <ModalMounted {...args} />,
    args: {
        // Add default props here if needed
    },
};