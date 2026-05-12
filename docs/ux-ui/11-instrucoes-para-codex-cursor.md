# Angeled LP — Instruções para Codex/Cursor

## Objetivo

Usar esta documentação como base para implementar a LP Angeled com React + Vite + TypeScript.

## Regras de implementação

1. Não implementar login.
2. Não implementar checkout.
3. Não implementar área do cliente.
4. Não integrar com backend, app ou firmware.
5. Não criar link falso do Mercado Livre.
6. Manter o visual dark/vinho.
7. Usar `lucide-react` para ícones.
8. Usar tokens globais para cores, espaçamento e tipografia.
9. Criar rotas `/`, `/privacidade` e `/termos`.
10. Criar feature flags `leadCapture` e `mercadoLivreLink`.
11. CTA principal deve rolar para a seção Mercado Livre enquanto lead capture estiver desativado.
12. Não usar frases proibidas.

## Estrutura sugerida

```text
src/
  assets/
    logo/
    images/
  components/
    layout/
    ui/
    sections/
  config/
    features.ts
    seo.ts
  data/
    faq.ts
    features.ts
    compatibility.ts
  pages/
    HomePage.tsx
    PrivacyPolicyPage.tsx
    TermsOfUsePage.tsx
  services/
    analytics.ts
    leadService.ts
  styles/
    tokens.css
    global.css
  App.tsx
  main.tsx
```

## Componentes prioritários

- `Button`.
- `Badge`.
- `Container`.
- `Section`.
- `Header`.
- `Footer`.
- `FeatureCard`.
- `FaqItem`.
- `LeadModal` preparado, mas inativo.

## Seções prioritárias

1. Hero.
2. Problema.
3. Como funciona.
4. Compatibilidade.
5. Funcionalidades.
6. Segurança/offline.
7. Kit.
8. Mercado Livre.
9. FAQ.
10. CTA final.

## Critérios de aceite

- `npm run build` sem erro.
- Rotas funcionando.
- CSS responsivo.
- SEO básico.
- Analytics opcional por env.
- CTA sem link falso.
- Footer com contatos corretos.
- Páginas legais acessíveis.
- Nenhuma promessa proibida.

