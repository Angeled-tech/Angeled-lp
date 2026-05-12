# 01 — Arquitetura Front da LP

## Objetivo técnico

Migrar a landing page atual em HTML/CSS/JS para uma aplicação React + Vite + TypeScript, com estrutura limpa, rotas públicas simples, componentes reutilizáveis e preparo para produção na Vercel.

## Stack

```text
React
Vite
TypeScript
react-router-dom
lucide-react
CSS global organizado por tokens
Vercel
```

## Rotas

```text
/             Landing principal
/privacidade  Política de Privacidade
/termos       Termos de Uso
```

## Por que usar react-router-dom

A LP precisa ter URLs próprias para Política de Privacidade e Termos de Uso. Isso é mais profissional do que usar modal ou texto escondido na home.

Benefícios:

- URLs limpas.
- Melhor manutenção.
- Footer com links reais.
- Estrutura preparada para páginas futuras.
- Boa compatibilidade com Vercel usando fallback SPA.

## Configuração Vercel

Criar `vercel.json` na raiz:

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

Isso evita erro 404 ao acessar diretamente `/privacidade` ou `/termos`.

## Estrutura recomendada

```text
src/
  assets/
    logo/
      angeled-logo.svg
    images/
      hardware-placeholder.png
      og-image.png
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

## Componentes de layout

### Header

Responsável por:

- Logo Angeled.
- Links de navegação.
- CTA principal.
- Estado fixo com blur ao rolar.
- Responsividade mobile.

Links sugeridos:

```text
Como funciona
Funcionalidades
FAQ
```

CTA:

```text
Avise-me quando estiver disponível
```

### Footer

Responsável por:

- Nome Angeled.
- E-mail.
- WhatsApp.
- Cidade.
- Links para `/privacidade` e `/termos`.
- Copyright.

### Container

Componente simples para limitar largura e padronizar padding horizontal.

### Section

Componente para padronizar espaçamento vertical e opcionalmente aplicar borda superior.

## Componentes de UI

### Button

Variações:

- primary.
- secondary/outline.
- ghost, se necessário.

Estados:

- default.
- hover.
- focus.
- disabled.

### Badge

Usar para:

- “Pré-venda”.
- “Em breve pelo Mercado Livre”.
- “Sem assinatura no lançamento”.

### FeatureCard

Usar nas seções de funcionalidades, compatibilidade, segurança e para quem é.

### FaqItem

FAQ acessível, usando botão com `aria-expanded`.

### LeadModal

Criar estrutura preparada, mas não ativar inicialmente.

## Feature flags

Criar `src/config/features.ts`:

```ts
export const features = {
  leadCapture: false,
  mercadoLivreLink: false
} as const;
```

## Comportamento do CTA

Enquanto `leadCapture` for `false`:

- CTA deve rolar para a seção Mercado Livre / Pré-venda.

Futuro comportamento:

- Se `leadCapture` for `true`, CTA abre `LeadModal`.
- Se `mercadoLivreLink` existir futuramente, CTA pode abrir o link do Mercado Livre.

## Analytics

Criar integração usando variável de ambiente:

```text
VITE_GA_ID=
```

Se a variável estiver vazia, não carregar Google Analytics.

## Estilos

Usar:

```text
src/styles/tokens.css
src/styles/global.css
```

Evitar CSS solto dentro de componentes, exceto quando for muito pontual.

## Ícones

Usar `lucide-react`.

Substituir emojis por ícones consistentes, como:

- Home.
- DoorOpen.
- KeyRound.
- Bell.
- History.
- ShieldCheck.
- WifiOff.
- Smartphone.
- Package.
- ShoppingBag.
- CheckCircle.
- AlertTriangle.

## Regras técnicas

- Não adicionar dependências desnecessárias.
- Não implementar backend.
- Não criar checkout.
- Não adicionar formulário funcional ainda.
- Não hardcodar Google Analytics ID.
- Não deixar link falso de compra.
- Não deixar links visíveis quebrados.

## Critério de pronto técnico

- `npm run build` executa sem erro.
- Rotas funcionam localmente.
- Fallback da Vercel configurado.
- CSS responsivo.
- SEO básico implementado.
- Analytics preparado.
- Feature flag de lead pronta.
