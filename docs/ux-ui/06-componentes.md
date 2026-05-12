# Angeled LP — Componentes Principais

## Componentes de layout

### `Header`

Responsabilidades:

- Logo/nome Angeled.
- Links âncora.
- CTA principal.
- Estado responsivo.

### `Footer`

Responsabilidades:

- Contato institucional.
- Links legais.
- WhatsApp.
- Cidade.

### `Container`

Limita largura e padroniza padding lateral.

### `Section`

Padroniza:

- espaçamento vertical;
- id de navegação;
- fundo;
- título/subtítulo.

## Componentes de UI

### `Button`

Props sugeridas:

```ts
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
};
```

### `Badge`

Usado para rótulos pequenos e confiáveis:

- Pré-venda.
- Em breve pelo Mercado Livre.
- Sem assinatura no lançamento.
- Funciona offline.

### `FeatureCard`

Conteúdo:

- ícone lucide;
- título;
- descrição.

### `StepCard`

Usado no “Como funciona”.

Conteúdo:

- número do passo;
- título;
- descrição.

### `FaqItem`

FAQ acessível com botão.

Props sugeridas:

```ts
type FaqItemProps = {
  question: string;
  answer: string;
};
```

### `LeadModal`

Preparado para futuro, mas não renderizado enquanto `features.leadCapture === false`.

Campos futuros possíveis:

- nome;
- e-mail;
- WhatsApp;
- cidade/estado.

### `AppMockup`

Preview ilustrativo do app.

Regras:

- Deve deixar claro que é ilustrativo se não forem screenshots reais.
- Não pode mostrar funcionalidades ocultas no MVP, como abertura pelo app.

### `ProductVisual`

Imagem/render/placeholder do Gerenciador Angeled.

Regra:

- Se não houver imagem real, usar placeholder honesto: “Imagem do produto em breve”.

## Componentes de página

### `HomePage`

Composição das seções da LP.

### `PrivacyPolicyPage`

Conteúdo simples e honesto para pré-venda.

### `TermsOfUsePage`

Termos com foco em compatibilidade, instalação e canal futuro.

