# 06 — Prompt para Codex/Cursor implementar a LP

Use este prompt quando for abrir o projeto no Codex/Cursor para criação dos arquivos.

---

## Prompt

Você está trabalhando no Projeto Angeled.

Precisamos migrar e lapidar a landing page do Angeled para produção usando React + Vite + TypeScript.

### Contexto do produto

O Angeled é um gerenciador inteligente para fechaduras elétricas residenciais compatíveis. Ele transforma a fechadura elétrica já existente em um sistema de acesso por cartão, com histórico no app, notificações e funcionamento offline para acessos já cadastrados.

A Angeled não vende a fechadura física. A empresa vende o Gerenciador Angeled, que será instalado em fechaduras elétricas compatíveis.

O objetivo da LP é apresentar o produto e preparar a compra futura pelo Mercado Livre. O anúncio ainda não existe, então não deve haver link falso de compra nem checkout próprio.

### Stack obrigatória

- React.
- Vite.
- TypeScript.
- react-router-dom.
- lucide-react.
- CSS organizado por tokens globais e componentes.
- Deploy preparado para Vercel.

### Rotas obrigatórias

Criar:

- `/` — Home da LP.
- `/privacidade` — Política de Privacidade simples.
- `/termos` — Termos de Uso simples.

Usar `react-router-dom`.

Criar `vercel.json` com rewrite para SPA:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Identidade visual

Manter visual dark/vinho da base atual.

Fontes:

- Playfair Display para títulos.
- DM Sans para textos.

Cores principais:

- `#4A0711`
- `#7A1020`
- `#9E1B32`
- `#D9A7AF`
- `#F8E8EB`
- `#0C0C0E`
- `#111113`
- `#161618`
- `#F5F0EE`
- `#9A9098`

Usar o logo Angeled disponível nos assets.

Substituir emojis por ícones do `lucide-react`.

### Estrutura de pastas sugerida

```txt
src/
  assets/
    logo/
    images/
  components/
    layout/
      Header.tsx
      Footer.tsx
      Container.tsx
      Section.tsx
    ui/
      Button.tsx
      Badge.tsx
      FeatureCard.tsx
      FaqItem.tsx
      IconCard.tsx
      LeadModal.tsx
    sections/
      HeroSection.tsx
      ProblemSection.tsx
      HowItWorksSection.tsx
      ForWhoSection.tsx
      CompatibilitySection.tsx
      FeaturesSection.tsx
      SecuritySection.tsx
      AppPreviewSection.tsx
      KitSection.tsx
      MercadoLivreSection.tsx
      FaqSection.tsx
      FinalCtaSection.tsx
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

### Seções obrigatórias da Home

1. Header.
2. Hero.
3. Problema.
4. Como funciona.
5. Para quem é.
6. Compatibilidade.
7. Funcionalidades.
8. Segurança e funcionamento offline.
9. Preview/mockup do app.
10. O que vem no kit.
11. Mercado Livre / Pré-venda.
12. FAQ.
13. CTA final.
14. Footer.

### CTA

CTA principal:

```text
Avise-me quando estiver disponível
```

Enquanto o formulário estiver desativado, o CTA deve rolar para a seção Mercado Livre / Pré-venda.

### Feature flags

Criar `src/config/features.ts`:

```ts
export const features = {
  leadCapture: false,
  mercadoLivreLink: false
} as const;
```

Criar estrutura para `LeadModal`, mas não exibir enquanto `leadCapture` for falso.

### Copy obrigatória

Hero:

```text
Controle inteligente para sua fechadura elétrica.
```

Subtítulo:

```text
Transforme sua fechadura elétrica residencial em um sistema de acesso por cartão, com histórico no app, notificações e funcionamento offline.
```

Texto de apoio:

```text
Pré-venda em breve pelo Mercado Livre.
```

### Regras de copy

Não usar:

- “qualquer fechadura elétrica”.
- “100% seguro”.
- “impossível de clonar”.
- “histórico completo”.
- “use para sempre”.
- “iOS & Android”.
- “sem necessidade de profissional especializado”.

Usar:

- “fechaduras elétricas residenciais compatíveis”.
- “histórico por até 90 dias”.
- “sem assinatura no lançamento”.
- “em breve pelo Mercado Livre”.
- “sem obras, com instalação guiada”.
- “mais controle”.
- “mais rastreabilidade”.

### Kit

Informar que o kit contém:

- 1 Gerenciador Angeled.
- 5 cartões de acesso.
- App Angeled incluso.
- Guia de instalação.
- Histórico de acessos por até 90 dias.
- Notificações de acesso permitido e negado.

### Footer

Incluir:

- Angeled.
- Carapicuíba, SP.
- angeledtecnologia@gmail.com.
- WhatsApp: (11) 93930-5353.
- Link: https://wa.me/5511939305353.
- Política de Privacidade.
- Termos de Uso.

### SEO

Implementar:

- Title.
- Meta description.
- Open Graph.
- Twitter Card.
- robots.txt.
- sitemap.xml.
- favicon.
- TODO para domínio/canonical final.

Title:

```text
Angeled — Controle inteligente para fechaduras elétricas
```

Description:

```text
Transforme sua fechadura elétrica residencial em um sistema de acesso por cartão, com histórico no app, notificações e funcionamento offline.
```

### Google Analytics

Preparar integração usando:

```text
VITE_GA_ID=
```

Se a variável estiver vazia, não carregar Analytics.

Não hardcodar ID.

### Política de Privacidade e Termos

Criar páginas simples, honestas e coerentes com pré-venda.

Não criar texto jurídico exagerado.

As páginas devem citar:

- caráter informativo da LP;
- pré-venda;
- Mercado Livre como canal futuro;
- compatibilidade com fechaduras elétricas residenciais;
- instalação guiada;
- contato oficial.

### Acessibilidade

Garantir:

- HTML semântico.
- Foco visível.
- Contraste adequado.
- Imagens com alt.
- FAQ com aria-expanded.
- Links reais.
- Botões claros.

### Critérios de aceite

A implementação só estará pronta quando:

- `npm run build` rodar sem erro.
- Rotas `/`, `/privacidade` e `/termos` funcionarem.
- Header e footer estiverem funcionando.
- LP estiver responsiva.
- CTA principal estiver correto.
- Não houver promessas proibidas.
- SEO básico estiver pronto.
- Google Analytics estiver preparado por env.
- Lead capture estiver preparado, mas desativado.
- Vercel estiver configurada.
- Não houver links falsos de compra.
- Não houver checkout próprio.

Antes de finalizar, execute:

```bash
npm run build
```

Se houver lint:

```bash
npm run lint
```

Corrija erros antes de concluir.
