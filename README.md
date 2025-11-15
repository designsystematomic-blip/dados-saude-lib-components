# **Dados Saúde — Lib Components**

**Descrição:** Biblioteca de componentes React focada em aplicações de saúde, criada para ser publicada como pacote reutilizável. Fornece componentes UI, ícones, hooks e estilos prontos para uso. Para impulsionar o reuso e escalabilidade dos componentes, está sendo aplicatido o padrão de composição (composition pattern).

---

## **Pré-requisitos (O que instalar na máquina)**

### 1. Node.js
- **Versão recomendada:** Node.js 18.x ou superior
- **Download:** https://nodejs.org/
- **Como verificar se está instalado:**

```cmd
node --version
```

### 2. NPM (Node Package Manager)
- Vem junto com Node.js
- **Versão recomendada:** npm 9.x ou superior (confira em `package.json`: `npm 11.6.0+`)
- **Como verificar:**

```cmd
npm --version
```

### 3. Git (opcional, mas recomendado)
- Para clonar o repositório e fazer contribuições
- **Download:** https://git-scm.com/

### 4. Editor de Código (recomendado: VS Code)
- **Download:** https://code.visualstudio.com/
- **Extensões recomendadas:**
  - ES7+ React/Redux/React-Native snippets
  - ESLint
  - Prettier
  - Storybook

---

## **Guia Rápido de Instalação**

### 1. Clonar o repositório
```cmd
git clone https://github.com/designsystematomic-blip/dados-saude-lib-components-2.git
cd dados-saude-lib-components-2
```

### 2. Instalar dependências
```cmd
npm install
```

Isso instala automaticamente:
- **React** e **React DOM** (peer dependencies)
- **Vite** (build tool)
- **TypeScript** (tipagem)
- **ESLint** e **Prettier** (linting e formatação)
- **Storybook** (documentação visual)
- **Plop** (gerador de componentes)
- Todas as outras devDependencies listadas em `package.json`

### 3. Verificar instalação
```cmd
npm run build
```

Se não houver erros, está pronto para usar!

---

## **Dependências do Projeto (do `package.json`)**

### Peer Dependencies (obrigatórias no projeto consumidor)
- **React** ^19.1.0
- **React DOM** ^19.1.0
- **react-webcam** ^7.2.0 (para componente Camera)

### Runtime Dependencies
- **react-webcam** ^7.2.0 (para captura de câmera)

### Build & Development Tools
- **Vite** ^7.1.7 (bundler)
- **TypeScript** ~5.8.3 (linguagem)
- **Storybook** ^9.1.8 (documentação de componentes)
- **ESLint** ^9.38.0 (linter)
- **Prettier** ^3.6.2 (formatador de código)
- **Plop** ^4.0.3 (gerador de código)
- **Vitest** ^3.2.4 (testes unitários)

---

**Ferramentas e Dependências de Desenvolvimento**
- Build: `vite` e `rollup` (via Vite internamente).
- Tipos: `typescript`, `vite-plugin-dts`.
- Lint: `eslint`, `prettier`.
- Storybook: `@storybook/react-vite`.
- Gerador automatizado de componentes: `plop`.
- Biblioteca: `ReactJS`
- Gerenciador de pacotes: `npm 11.6.0+`

**Tecnologias necessárias**



**Para desenvolvedor localmente**

Após instalar os pré-requisitos (Node.js, npm) e clonar o repositório:

1. **Instalar dependências do projeto:**

```cmd
npm install
```

2. **Iniciar ambiente de desenvolvimento (com hot-reload):**

```cmd
npm run dev
```

Acesse em `http://localhost:5173` (porta padrão do Vite).

3. **Visualizar componentes no Storybook (recomendado para desenvolvimento):**

```cmd
npm run storybook
```

Acesse em `http://localhost:6006`.

4. **Gerar um novo componente rapidamente:**

```cmd
npm run generate
```

Siga as instruções do prompt.

5. **Fazer build para produção:**

```cmd
npm run build
```

6. **Fazer lint do código:**

```cmd
npm run lint
```

---


## **Lista de Componentes (baseado em `lib/components`)**
- Button
- Camera
- Card
- CardAction
- Checkbox
- Divider
- Drawer
- Droplist
- EmptyState
- Header
- Image
- Input
- Menu
- Modal
- Select
- Snackbar
- Tag
- Text
- Textarea
- Title
- ToggleSwitch
- UploadFile
- VetorialImage
- Wrapper

> Observação: os componentes acima correspondem às pastas encontradas em `lib/components`. Alguns componentes podem ter subcomponentes ou arquivos de tipagem separados.

**Storybook**
- O projeto inclui suporte a Storybook para documentar e visualizar componentes isoladamente.
- Como rodar localmente:

```cmd
npm run storybook
```

- O Storybook roda em `http://localhost:6006` por padrão e mostra cada componente em diferentes estados (stories). Use-o para revisar visuais, acessibilidade e exemplos de props.
- Para gerar uma build estática do Storybook (útil para documentação pública):

```cmd
npm run build-storybook
```

**Plop (Gerador de Componentes)**
- O repositório inclui templates Plop em `generate/plop-templates` e um `plopfile.ts` em `generate/` para criar rapidamente novos componentes seguindo o padrão do projeto.
- Para executar o gerador:

```cmd
npm run generate
```

- O comando irá executar o plop com o `plopfile` do projeto e promptar informações (nome do componente, criar arquivos de teste, story, etc.). Ele automatiza:
	- criação de pasta do componente
	- arquivos `.tsx`, `.module.css`, `.stories.tsx` e `.types.ts` a partir de templates

**Como executar os exemplos localmente**

- Copie o conteúdo do exemplo desejado para `src/App.tsx` (ou importe o componente de `examples/` — veja abaixo).
- Rode o ambiente de desenvolvimento:

```cmd
npm install
npm run dev
```

**Exemplos Detalhados (Componentes Principais)**

Observação: os exemplos abaixo assumem que você está desenvolvendo dentro do monorepo. Para consumir a lib como pacote publicado use `import { Button } from 'dados-saude';`.

1) Button

```tsx
import React from 'react';
import { Button } from '@lib/components/Button';

export default function ButtonExample() {
	return (
		<div style={{ padding: 20 }}>
			<Button onClick={() => alert('Salvo')}>
				Salvar
			</Button>
			<Button onClick={() => {}} disabled style={{ marginLeft: 8 }}>
				Desabilitado
			</Button>
		</div>
	);
}
```

2) Input

```tsx
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
```

3) Modal

```tsx
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
```

4) Camera

```tsx
import React from 'react';
import { Camera } from '@lib/components/Camera';

export default function CameraExample() {
	function handleCapture(dataUrl: string) {
		// dataUrl é a imagem capturada em base64
		console.log('captured', dataUrl);
	}

	return (
		<div style={{ padding: 20 }}>
			<Camera onCapture={handleCapture} />
		</div>
	);
}
```

5) Select (exemplo rápido)

```tsx
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
			<Select options={options} value={value} onChange={(v) => setValue(v)} />
			<p>Selecionado: {value}</p>
		</div>
	);
}
```



Arquivos de exemplo

Há exemplos prontos em `examples/` (componentes individuais). Você pode importar qualquer um em `src/App.tsx` para rodar rapidamente.

**Exemplos de Uso**

Import básico de um componente (após instalar o pacote):

```tsx
import React from 'react';
import { Button } from 'dados-saude';

export default function Example() {
	return (
		<div>
			<Button onClick={() => alert('clicou')}>Salvar</Button>
		</div>
	);
}
```

Import por subpath (quando disponível):

```tsx
import { Button } from 'dados-saude/components';
import { Camera } from 'dados-saude/components/Camera';
```

Importando estilos da biblioteca (se preferir aplicar globalmente):

```css
@import 'dados-saude/styles/style.css';
/* ou importar arquivos específicos em seu entrypoint */
```

Uso de componentes comuns — exemplos rápidos:

- Button: `<Button onClick={...}>Texto</Button>`
- Input: `<Input value={value} onChange={...} />`
- Checkbox: `<Checkbox checked={x} onChange={...} />`
- Camera: `<Camera onCapture={...} />` (usa `react-webcam` como peer dependency)
- Modal: `<Modal open={open} onClose={...}><p>Conteúdo</p></Modal>`
- Select: `<Select options={[...]} value={v} onChange={...} />`
- UploadFile: `<UploadFile onUpload={...} />`

Se precisar, eu posso adicionar exemplos de uso por prop para componentes específicos.


**Export Map / Entradas Principais**
- `package.json` fornece entradas exportáveis, por exemplo:
- `."` aponta para `./dist/main.js` (main import),
- `./components` aponta para `./dist/components/index.js`.

Verifique `package.json` para o mapa completo de `exports` caso precise de import por subpath.

**Dicas e Troubleshooting**
- Se receber erros de peer dependency, instale a versão apropriada do `react`/`react-dom` no projeto consumidor.
- Se os tipos não aparecerem após instalar o pacote, confirme se `types` em `package.json` aponta para `dist/main.d.ts` e que o pacote foi publicado com as declarações.
- Para ver os arquivos que serão publicados, confira a seção `files` em `package.json`.

**Licença**
- Verifique se há um arquivo `LICENSE` no repositório. Se não houver, pergunte ao mantenedor sobre a licença desejada antes de usar em projetos proprietários.

**Contato / Repositório**
- Código-fonte: URL do repositório está em `package.json` (`repository.url`).
- Para dúvidas e suporte, abra uma issue no repositório ou contate os mantenedores listados no projeto.
