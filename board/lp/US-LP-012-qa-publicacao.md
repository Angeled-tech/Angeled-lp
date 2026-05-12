# US-LP-012 — QA final e publicação

## Objetivo

Executar validação final da LP antes de publicação ou entrega.

## Contexto

Checklist em `docs/05-checklist-qa-lp.md`.

## Escopo

- Rodar `npm run build`.
- Rodar `npm run preview`, se disponível.
- Validar rotas.
- Validar responsividade.
- Validar links.
- Validar copy proibida.
- Validar SEO.
- Validar analytics sem env.
- Validar acessibilidade básica.
- Registrar pendências.

## Fora de escopo

- Teste de campanhas.
- Teste de checkout.
- Teste de backend/app/firmware.

## Critérios de aceite

- [ ] Build sem erros.
- [ ] Rotas funcionam diretamente.
- [ ] Mobile não quebra.
- [ ] CTA correto.
- [ ] Footer correto.
- [ ] FAQ acessível.
- [ ] Sem links falsos.
- [ ] Sem promessas proibidas.
- [ ] Console sem erros.

## Regras de negócio

- Nenhuma publicação se houver promessa incorreta de compatibilidade, segurança ou compra ativa.

## Arquivos prováveis impactados

- `docs/05-checklist-qa-lp.md`
- Ajustes pontuais nas seções e configs conforme bugs encontrados.

