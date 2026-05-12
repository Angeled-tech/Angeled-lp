# US-LP-001 — Estrutura inicial React/Vite

## Objetivo

Criar a base técnica da LP Angeled em React + Vite + TypeScript, preparada para rotas públicas e deploy na Vercel.

## Contexto

A LP hoje está documentada, mas ainda não possui scaffold de implementação. A arquitetura prevista está em `docs/01-arquitetura-front-lp.md`.

## Escopo

- Criar projeto React + Vite + TypeScript.
- Configurar `react-router-dom`.
- Criar estrutura base de pastas.
- Criar `App.tsx` e `main.tsx`.
- Criar rotas `/`, `/privacidade`, `/termos`.
- Criar `vercel.json` com rewrite SPA.
- Criar scripts de build e preview.

## Fora de escopo

- Implementar todas as seções da home.
- SEO completo.
- Analytics.
- Lead capture funcional.

## Critérios de aceite

- [ ] `npm run build` executa sem erro.
- [ ] Rotas `/`, `/privacidade` e `/termos` renderizam páginas básicas.
- [ ] `vercel.json` existe com fallback para `index.html`.
- [ ] Estrutura de pastas segue `docs/01-arquitetura-front-lp.md`.
- [ ] TypeScript compila sem erro.

## Regras de negócio

- A LP não deve incluir login, checkout, área do cliente ou integrações operacionais.

## Arquivos prováveis impactados

- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `index.html`
- `vercel.json`
- `src/App.tsx`
- `src/main.tsx`
- `src/pages/*`

