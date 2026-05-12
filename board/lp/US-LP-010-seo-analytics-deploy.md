# US-LP-010 — SEO, analytics e deploy

## Objetivo

Preparar a LP para publicação em produção com SEO básico, analytics opcional e Vercel.

## Contexto

Regras em `docs/03-seo-analytics-deploy.md`.

## Escopo

- Title.
- Meta description.
- Open Graph.
- Twitter Card.
- Favicon.
- Robots.
- Sitemap.
- Canonical com TODO enquanto domínio não existir.
- Serviço `analytics.ts` usando `VITE_GA_ID`.
- Page view em mudança de rota, se aplicável.

## Fora de escopo

- Domínio definitivo.
- OG image final, se asset não existir.
- Campanhas pagas.

## Critérios de aceite

- [ ] `lang="pt-BR"` configurado.
- [ ] SEO básico presente.
- [ ] Analytics não carrega sem `VITE_GA_ID`.
- [ ] Build não quebra sem env.
- [ ] Robots e sitemap existem ou têm TODO claro.

## Regras de negócio

- Não hardcodar ID de analytics.
- Não coletar dados sensíveis.

## Arquivos prováveis impactados

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/config/seo.ts`
- `src/services/analytics.ts`

