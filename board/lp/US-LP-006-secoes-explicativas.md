# US-LP-006 — Seções explicativas

## Objetivo

Implementar as seções que explicam funcionamento, público, compatibilidade e funcionalidades.

## Contexto

Conteúdo definido em `docs/02-copy-e-secoes.md`.

## Escopo

- `HowItWorksSection`.
- `ForWhoSection`.
- `CompatibilitySection`.
- `FeaturesSection`.
- Cards e passos com ícones lucide.
- Nota de instalação guiada.

## Fora de escopo

- Tabela técnica de compatibilidade.
- Manual de instalação completo.

## Critérios de aceite

- [ ] Seções explicam sem termos técnicos.
- [ ] Compatibilidade deixa claro que são fechaduras elétricas residenciais compatíveis.
- [ ] “Não substitui sua fechadura” aparece de forma clara.
- [ ] Cards são consistentes visualmente.

## Regras de negócio

- Compatibilidade deve ser conservadora.
- Não prometer instalação sem profissional em todos os casos.

## Arquivos prováveis impactados

- `src/components/sections/HowItWorksSection.tsx`
- `src/components/sections/ForWhoSection.tsx`
- `src/components/sections/CompatibilitySection.tsx`
- `src/components/sections/FeaturesSection.tsx`
- `src/data/features.ts`
- `src/data/compatibility.ts`

