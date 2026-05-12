# 01 — Arquitetura Front da LP

## Objetivo

Definir como a LP deve ser implementada em React + Vite + TypeScript, preservando simplicidade, SEO, performance e fácil manutenção.

## Princípios

1. **Conteúdo primeiro**  
   A LP deve comunicar o produto antes de demonstrar tecnologia.

2. **Componentes simples**  
   Componentes devem existir para reduzir repetição real, não para criar abstração excessiva.

3. **Dados textuais separados**  
   FAQ, features e compatibilidade devem ficar em `src/data`.

4. **Feature flags explícitas**  
   Recursos futuros não devem vazar para a UI ativa.

5. **Sem backend crítico**  
   Qualquer serviço na LP deve ser opcional e não pode impedir renderização da página.

## Camadas

### `components/layout`

- `Header`.
- `Footer`.
- `Container`.
- `Section`.
- `LegalLayout`.

### `components/ui`

- `Button`.
- `Badge`.
- `FeatureCard`.
- `StepCard`.
- `FaqItem`.
- `LeadModal`.

### `components/sections`

- Seções da home.
- Não devem conter regras globais de roteamento ou analytics.

### `config`

- `features.ts`.
- `seo.ts`.

### `data`

- `faq.ts`.
- `features.ts`.
- `compatibility.ts`.
- `kit.ts`.

### `services`

- `analytics.ts`.
- `leadService.ts` preparado para futuro, sem uso ativo se `leadCapture` for falso.

## Feature flags

```ts
export const features = {
  leadCapture: false,
  mercadoLivreLink: false,
} as const;
```

## Analytics

- Ler `VITE_GA_ID`.
- Não carregar script se env estiver vazia.
- Não falhar build por env ausente.

## Performance

- Evitar bibliotecas pesadas.
- Lazy loading para imagens fora do hero.
- CSS simples e reutilizável.
- Evitar animações excessivas.

## Acessibilidade

- Header navegável por teclado.
- FAQ com `aria-expanded`.
- Foco visível.
- Imagens com `alt`.
- Contraste adequado.

