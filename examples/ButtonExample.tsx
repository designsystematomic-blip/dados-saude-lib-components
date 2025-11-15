import React from 'react';
import { Button } from '@lib/components/Button';

export default function ButtonExample() {
  return (
    <div style={{ padding: 20 }}>
      <Button onClick={() => alert('Salvo')}>Salvar</Button>
      <Button onClick={() => {}} disabled style={{ marginLeft: 8 }}>
        Desabilitado
      </Button>
    </div>
  );
}
