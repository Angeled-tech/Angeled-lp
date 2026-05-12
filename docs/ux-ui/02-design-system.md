# Angeled LP — Design System

## Objetivo

Criar uma base visual consistente para a implementação da LP em React + Vite + TypeScript.

## Tokens

### Espaçamento

| Token | Valor | Uso |
|---|---:|---|
| `space.xs` | 4px | Ajustes finos |
| `space.sm` | 8px | Gaps pequenos |
| `space.md` | 16px | Espaçamento padrão |
| `space.lg` | 24px | Blocos internos |
| `space.xl` | 32px | Grupos de conteúdo |
| `space.2xl` | 48px | Seções compactas |
| `space.3xl` | 72px | Seções desktop |
| `space.4xl` | 96px | Hero e respiros grandes |

### Largura

| Token | Valor | Uso |
|---|---:|---|
| `container.sm` | 760px | Textos legais, FAQ |
| `container.md` | 1040px | Seções comuns |
| `container.lg` | 1200px | Hero e grids |

### Bordas

| Token | Valor |
|---|---:|
| `radius.sm` | 8px |
| `radius.md` | 12px |
| `radius.lg` | 16px |
| `radius.full` | 999px |

### Tipografia

| Estilo | Desktop | Mobile | Uso |
|---|---:|---:|---|
| `display` | 64px | 42px | Hero |
| `title.lg` | 44px | 32px | Títulos de seção |
| `title.md` | 30px | 24px | Blocos internos |
| `body.lg` | 20px | 18px | Subtítulos |
| `body.md` | 16px | 16px | Texto padrão |
| `caption` | 13px | 13px | Badges e metadados |

## Componentes base

### `Button`

Variantes:

- `primary`
- `secondary`
- `ghost`
- `link`

Estados:

- default;
- hover;
- focus;
- disabled;
- loading futuro.

Regras:

- Botão principal usa vinho.
- Botão secundário pode usar borda clara/translúcida.
- CTA não deve apontar para compra antes do anúncio existir.

### `Badge`

Usos:

- “Pré-venda”.
- “Em breve pelo Mercado Livre”.
- “Sem assinatura no lançamento”.
- “Funciona offline”.

### `FeatureCard`

Usado para funcionalidades e benefícios.

Conteúdo:

- ícone;
- título curto;
- descrição simples.

### `FaqItem`

Requisitos:

- botão semântico;
- `aria-expanded`;
- navegação por teclado;
- animação discreta opcional.

### `Section`

Padroniza:

- `id` para navegação;
- espaçamento vertical;
- variação de fundo;
- título e subtítulo opcionais.

## Grids

- Mobile: 1 coluna.
- Tablet: 2 colunas.
- Desktop: 3 colunas quando fizer sentido.
- Seções críticas com copy longa devem evitar grids complexos.

## Movimento

Permitido:

- fade-in discreto;
- transições de hover;
- abertura suave de FAQ.

Evitar:

- animações longas;
- movimento excessivo no hero;
- efeitos que prejudiquem leitura ou performance.

