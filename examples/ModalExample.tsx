import React, { useState } from 'react';
import { Modal } from '@lib/components/Modal';
import { Button } from '@lib/components/Button';

export default function ModalExample() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: 16 }}>
          <h3>Título da Modal</h3>
          <p>Conteúdo interno da modal.</p>
          <Button onClick={() => setOpen(false)}>Fechar</Button>
        </div>
      </Modal>
    </div>
  );
}
