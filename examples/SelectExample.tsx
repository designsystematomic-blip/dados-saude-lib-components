import React, { useState } from 'react';
import { Select } from '@lib/components/Select';

export default function SelectExample() {
  const [value, setValue] = useState('');
  const options = [
    { label: 'Opção 1', value: '1' },
    { label: 'Opção 2', value: '2' },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Select options={options} value={value} onChange={(v: any) => setValue(v)} />
      <p>Selecionado: {value}</p>
    </div>
  );
}
