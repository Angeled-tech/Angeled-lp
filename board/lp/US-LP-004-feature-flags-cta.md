# US-LP-004 — Feature flags e comportamento do CTA

## Objetivo

Implementar feature flags da LP e garantir que o CTA principal tenha comportamento seguro durante a pré-venda.

## Contexto

As flags estão definidas em `docs/01-arquitetura-front-lp.md`.

## Escopo

- Criar `src/config/features.ts`.
- Definir `leadCapture: false`.
- Definir `mercadoLivreLink: false`.
- Criar helper para ação do CTA principal.
- Se `leadCapture` for falso, rolar para `#mercado-livre`.
- Se `mercadoLivreLink` for falso, não renderizar link de compra.

## Fora de escopo

- Formulário funcional.
- Endpoint de leads.
- Link real do Mercado Livre.

## Critérios de aceite

- [ ] CTA “Avise-me quando estiver disponível” rola para a seção Mercado Livre.
- [ ] Nenhum botão “Comprar agora” aparece.
- [ ] Nenhum href vazio ou `#` falso é usado como compra.
- [ ] Feature flags estão centralizadas.

## Regras de negócio

- Não criar checkout próprio.
- Não simular compra.

## Arquivos prováveis impactados

- `src/config/features.ts`
- `src/utils/cta.ts`
- `src/components/layout/Header.tsx`
- `src/components/sections/*`

