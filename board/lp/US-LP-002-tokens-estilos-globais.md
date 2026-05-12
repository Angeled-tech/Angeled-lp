# US-LP-002 — Tokens e estilos globais

## Objetivo

Implementar a base visual dark/vinho da LP com tokens CSS e estilos globais.

## Contexto

Tokens e direção visual estão definidos em `docs/00-planejamento-lp-angeled.md` e `docs/ux-ui/02-design-system.md`.

## Escopo

- Criar `src/styles/tokens.css`.
- Criar `src/styles/global.css`.
- Configurar fontes Playfair Display e DM Sans.
- Definir tokens de cor, espaçamento, containers, tipografia, bordas e sombras.
- Definir estilos base de `body`, links, botões, foco e seleção.
- Configurar `scroll-behavior` e `scroll-margin-top` para âncoras.

## Fora de escopo

- Implementar componentes.
- Criar temas alternativos.
- Adicionar biblioteca de UI.

## Critérios de aceite

- [ ] Paleta dark/vinho implementada.
- [ ] Foco visível.
- [ ] Tipografia base aplicada.
- [ ] Layout não depende de estilos inline.
- [ ] CSS importado no entrypoint.

## Regras de negócio

- O visual deve parecer premium, tecnológico e residencial.
- Vermelho vinho deve ser identidade, não alerta constante.

## Arquivos prováveis impactados

- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/main.tsx`

