# US-LP-007 — Segurança, offline, app preview e kit

## Objetivo

Mostrar os benefícios centrais do produto: funcionamento offline, rastreabilidade, app e itens do kit.

## Contexto

As promessas aprovadas estão em `docs/02-copy-e-secoes.md`.

## Escopo

- `SecuritySection`.
- `AppPreviewSection`.
- `KitSection`.
- Explicar funcionamento offline para acessos já cadastrados.
- Explicar que eventos sincronizam quando a internet voltar.
- Mostrar preview ilustrativo do app.
- Listar itens do kit.

## Fora de escopo

- Screenshots reais se ainda não existirem.
- Garantias absolutas de segurança.
- Funcionalidades futuras não confirmadas.

## Critérios de aceite

- [ ] Offline é explicado com clareza.
- [ ] Remoções offline são tratadas com cautela, se citadas.
- [ ] Preview do app não mostra abertura pelo app.
- [ ] Kit informa 1 Gerenciador e 5 cartões.

## Regras de negócio

- Não usar “histórico completo”; usar “histórico por até 90 dias”.
- Não prometer iOS.

## Arquivos prováveis impactados

- `src/components/sections/SecuritySection.tsx`
- `src/components/sections/AppPreviewSection.tsx`
- `src/components/sections/KitSection.tsx`

