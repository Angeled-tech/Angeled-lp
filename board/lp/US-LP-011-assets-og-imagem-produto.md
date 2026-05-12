# US-LP-011 — Assets, OG image e imagem do produto

## Objetivo

Organizar assets visuais da LP e preparar placeholders honestos para produto, logo e compartilhamento.

## Contexto

Pendências visuais estão listadas em `docs/00-planejamento-lp-angeled.md` e `docs/03-seo-analytics-deploy.md`.

## Escopo

- Estruturar `src/assets/logo`.
- Estruturar `src/assets/images`.
- Definir placeholder visual do hardware.
- Preparar espaço para `public/og-image.png`.
- Definir alt text para imagens.

## Fora de escopo

- Criar render final do hardware, se ainda não houver aprovação.
- Criar logo definitivo, se marca ainda estiver em definição.

## Critérios de aceite

- [ ] Assets organizados por tipo.
- [ ] Placeholder não finge ser produto final.
- [ ] Imagens fora do hero usam lazy loading.
- [ ] OG image tem TODO claro se não existir.

## Regras de negócio

- Imagem não pode sugerir que a Angeled vende a fechadura física.

## Arquivos prováveis impactados

- `src/assets/logo/*`
- `src/assets/images/*`
- `public/og-image.png`
- `src/components/sections/HeroSection.tsx`

