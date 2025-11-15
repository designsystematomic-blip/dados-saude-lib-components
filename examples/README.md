Exemplos prontos para copiar/colar no `src/App.tsx` ou importar diretamente em um projeto que use o alias `@lib`.

Como usar:

1. Copie o arquivo desejado (por exemplo `examples/ButtonExample.tsx`) para `src/App.tsx` ou importe no `src/App.tsx`:

```tsx
import ButtonExample from '../examples/ButtonExample';

export default function App() {
  return <ButtonExample />;
}
```

2. Rode o dev server:

```cmd
npm install
npm run dev
```

Observações:
- Os exemplos usam o alias `@lib` configurado em `vite.config.ts`. Se você estiver consumindo a lib como pacote (após publicar), troque os imports para `import { Button } from 'dados-saude'`.
- Alguns exemplos (como `Camera`) dependem de peer-dependencies (por exemplo `react-webcam`) — instale no projeto host se necessário.
