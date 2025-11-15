import React, { useState } from 'react';
import { Input } from '@lib/components/Input';

export default function InputExample() {
  const [value, setValue] = useState('');
  return (
    <div style={{ padding: 20 }}>
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Valor atual: {value}</p>
    </div>
  );
}
