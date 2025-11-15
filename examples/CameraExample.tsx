import React from 'react';
import { Camera } from '@lib/components/Camera';

export default function CameraExample() {
  function handleCapture(dataUrl: string) {
    console.log('captured', dataUrl);
    // Exemplo: abrir em nova aba
    const w = window.open();
    if (w) w.document.write(`<img src="${dataUrl}"/>`);
  }

  return (
    <div style={{ padding: 20 }}>
      <Camera onCapture={handleCapture} />
    </div>
  );
}
