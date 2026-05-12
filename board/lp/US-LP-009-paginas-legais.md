# US-LP-009 — Páginas legais

## Objetivo

Implementar `/privacidade` e `/termos` com textos simples e coerentes com a fase de pré-venda.

## Contexto

Texto base em `docs/04-termos-privacidade-base.md`.

## Escopo

- `PrivacyPolicyPage`.
- `TermsOfUsePage`.
- Layout textual com boa leitura.
- Data de atualização preenchível.
- Footer e link de retorno.
- Citar caráter informativo da LP, pré-venda, Mercado Livre, compatibilidade e contato.

## Fora de escopo

- Texto jurídico final revisado por advogado.
- Cookies avançados.
- Consent management platform.

## Critérios de aceite

- [ ] `/privacidade` abre diretamente.
- [ ] `/termos` abre diretamente.
- [ ] Conteúdo não contradiz a LP.
- [ ] Contatos oficiais aparecem.
- [ ] Textos deixam claro que não substituem revisão jurídica.

## Regras de negócio

- Não prometer garantias legais além do que está aprovado.

## Arquivos prováveis impactados

- `src/pages/PrivacyPolicyPage.tsx`
- `src/pages/TermsOfUsePage.tsx`
- `src/components/layout/LegalLayout.tsx`

