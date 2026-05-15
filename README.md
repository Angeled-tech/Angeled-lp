# Angeled — Documentação da LP

Este pacote contém documentos de planejamento para migrar a landing page do Angeled para React + Vite + TypeScript, mantendo a identidade visual dark/vinho e preparando a página para pré-venda futura pelo Mercado Livre.

## Documentos principais

1. `00-planejamento-lp-angeled.md` — visão geral, decisões fixas e escopo.
2. `01-arquitetura-front-lp.md` — estrutura técnica, rotas, pastas, componentes e feature flags.
3. `02-copy-e-secoes.md` — copy aprovada, seções da home e regras de linguagem.
4. `03-seo-analytics-deploy.md` — SEO, Google Analytics, Vercel e domínio.
5. `04-termos-privacidade-base.md` — base inicial para páginas `/termos` e `/privacidade`.
6. `05-checklist-qa-lp.md` — checklist de QA visual, técnico, SEO e conversão.

## Estrutura de execução

- `.cursor/rules/` — regras para orientar implementação, copy, design, SEO, QA e acessibilidade.
- `.cursor/skills/` — skills especializadas para front, UX/UI, produto, SEO/analytics e QA.
- `board/lp/` — histórias de implementação da LP.
- `docs/architecture/` — arquitetura técnica e roadmap incremental da LP.
- `docs/ux-ui/` — base visual, fluxos, componentes, wireframes, microcopy e acessibilidade.

## Estado atual

A LP será migrada da base HTML/CSS/JS atual para uma aplicação React + Vite + TypeScript, com rotas públicas simples e sem dependência do backend operacional do produto.
