# US-LP-008 — Mercado Livre, FAQ e CTA final

## Objetivo

Fechar a LP com pré-venda honesta, dúvidas frequentes e chamada final para interesse.

## Contexto

FAQ e CTA final estão em `docs/02-copy-e-secoes.md`.

## Escopo

- `MercadoLivreSection`.
- `FaqSection`.
- `FinalCtaSection`.
- Dados de FAQ em arquivo separado.
- CTA principal reaproveitando comportamento das feature flags.

## Fora de escopo

- Link real de compra.
- Checkout.
- Captura de lead funcional.

## Critérios de aceite

- [ ] Seção Mercado Livre comunica “em breve”.
- [ ] FAQ é acessível.
- [ ] CTA final não cria promessa de disponibilidade imediata.
- [ ] Perguntas críticas de compatibilidade, instalação, offline, assinatura e kit aparecem.

## Regras de negócio

- Não usar “Comprar agora”.
- Não usar link falso para Mercado Livre.

## Arquivos prováveis impactados

- `src/components/sections/MercadoLivreSection.tsx`
- `src/components/sections/FaqSection.tsx`
- `src/components/sections/FinalCtaSection.tsx`
- `src/data/faq.ts`

