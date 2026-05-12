# US-LP-003 — Componentes de layout e UI

## Objetivo

Criar os componentes reutilizáveis básicos da LP.

## Contexto

Componentes esperados estão em `docs/01-arquitetura-front-lp.md` e `docs/ux-ui/06-componentes.md`.

## Escopo

- `Container`.
- `Section`.
- `Header`.
- `Footer`.
- `Button`.
- `Badge`.
- `FeatureCard`.
- `StepCard`.
- `FaqItem`.
- Estrutura de `LeadModal`, desativada por feature flag.

## Fora de escopo

- Lead capture funcional.
- Integração com formulário.
- Checkout.

## Critérios de aceite

- [ ] Componentes usam tokens globais.
- [ ] `Header` tem links para âncoras reais.
- [ ] `Footer` tem contatos e links legais corretos.
- [ ] `FaqItem` usa `aria-expanded`.
- [ ] `LeadModal` não aparece quando `leadCapture` é falso.

## Regras de negócio

- Usar `lucide-react` para ícones.
- Não usar emojis na interface final.

## Arquivos prováveis impactados

- `src/components/layout/*`
- `src/components/ui/*`
- `src/config/features.ts`

