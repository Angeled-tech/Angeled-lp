# 03 — SEO, Analytics e Deploy

## Objetivo

Preparar a LP Angeled para publicação em produção com SEO completo, Google Analytics opcional e deploy na Vercel.

## SEO obrigatório

Implementar no `index.html` e/ou configuração central de SEO:

- `<title>`.
- Meta description.
- Canonical.
- Open Graph.
- Twitter Card.
- Favicon.
- Robots.txt.
- Sitemap.xml.
- Metadados básicos de idioma.

## Título sugerido

```text
Angeled — Controle inteligente para fechaduras elétricas
```

## Meta description sugerida

```text
Transforme sua fechadura elétrica residencial em um sistema de acesso por cartão, com histórico no app, notificações e funcionamento offline.
```

## Open Graph

### og:title

```text
Angeled — Controle inteligente para fechaduras elétricas
```

### og:description

```text
Gerenciador inteligente para fechaduras elétricas residenciais compatíveis, com acesso por cartão, histórico no app e funcionamento offline.
```

### og:type

```text
website
```

### og:image

Criar imagem em:

```text
/public/og-image.png
```

Tamanho recomendado:

```text
1200x630 px
```

Conteúdo sugerido:

- Logo Angeled.
- Fundo dark/vinho.
- Texto: “Controle inteligente para sua fechadura elétrica”.
- Subtexto: “Em breve pelo Mercado Livre”.

## Canonical

Como o domínio ainda não está definido, deixar TODO claro:

```html
<!-- TODO: atualizar canonical quando o domínio oficial for definido -->
```

Quando houver domínio:

```html
<link rel="canonical" href="https://DOMINIO_OFICIAL/" />
```

## robots.txt

Criar em `/public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://DOMINIO_OFICIAL/sitemap.xml
```

Enquanto não houver domínio, deixar TODO no arquivo ou gerar sitemap provisório com URL temporária apenas se necessário.

## sitemap.xml

Rotas iniciais:

```text
/
/privacidade
/termos
```

Quando o domínio existir, atualizar as URLs.

## Google Analytics

Usar variável de ambiente:

```text
VITE_GA_ID=
```

Regra:

- Se `VITE_GA_ID` estiver vazia, não carregar o script.
- Não hardcodar ID no código.
- Não quebrar build se a variável não existir.

## Serviço sugerido

Criar `src/services/analytics.ts`:

Responsabilidades:

- Ler `import.meta.env.VITE_GA_ID`.
- Injetar script do Google Analytics apenas se existir ID.
- Enviar page view em mudanças de rota, se necessário.

## Deploy na Vercel

Criar `vercel.json`:

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

## Variáveis de ambiente na Vercel

Inicialmente:

```text
VITE_GA_ID=
```

Futuras:

```text
VITE_MERCADO_LIVRE_URL=
VITE_LEAD_CAPTURE_ENDPOINT=
```

Não implementar uso dessas futuras variáveis agora se o recurso estiver desativado.

## Performance

Meta Lighthouse:

```text
Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 90+
```

Boas práticas:

- Evitar bibliotecas pesadas.
- Usar SVG e imagens otimizadas.
- Evitar animações excessivas.
- Usar `loading="lazy"` para imagens fora do hero.
- Evitar fontes desnecessárias.
- Minimizar CSS duplicado.

## Acessibilidade

Obrigatório:

- Contraste adequado.
- Foco visível.
- Botões com texto claro.
- Links com destino real.
- FAQ com `aria-expanded`.
- Imagens com `alt`.
- Navegação por teclado.
- Header não deve bloquear conteúdo ao usar âncoras.

## Checklist antes do deploy

- Build sem erros.
- Rotas funcionando.
- SEO tags presentes.
- OG image referenciada.
- robots.txt criado.
- sitemap.xml criado ou TODO claro se domínio indefinido.
- Google Analytics não carrega sem ID.
- Links de footer funcionando.
- WhatsApp formatado corretamente.
- CTA sem link falso de compra.
