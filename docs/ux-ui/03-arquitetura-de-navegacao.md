# Angeled LP — Arquitetura de Navegação

## Rotas

```text
/             Landing principal
/privacidade  Política de Privacidade
/termos       Termos de Uso
```

## Âncoras da Home

```text
#como-funciona
#funcionalidades
#compatibilidade
#mercado-livre
#faq
```

## Header

Links sugeridos:

- Como funciona
- Funcionalidades
- FAQ

CTA:

- Avise-me quando estiver disponível

Comportamento:

- Desktop: links visíveis.
- Mobile: menu compacto ou links reduzidos.
- Header pode ficar fixo com blur, desde que não cubra conteúdo ao navegar por âncoras.

## Footer

Conteúdo obrigatório:

- Angeled.
- Carapicuíba, SP.
- angeledtecnologia@gmail.com.
- WhatsApp: (11) 93930-5353.
- Link WhatsApp: `https://wa.me/5511939305353`.
- Política de Privacidade.
- Termos de Uso.

## Fluxo de CTA

Enquanto `leadCapture` for `false`:

```text
CTA -> rolar para #mercado-livre
```

Futuro com lead capture:

```text
CTA -> abrir LeadModal ou seção de captura
```

Futuro com anúncio ativo:

```text
CTA -> abrir link oficial do Mercado Livre
```

Regras:

- Não exibir link de compra falso.
- Não abrir checkout próprio.
- Não prometer disponibilidade imediata.

## Páginas legais

As páginas `/privacidade` e `/termos` devem usar layout simples:

- Header reduzido.
- Conteúdo textual com largura confortável.
- Footer completo.
- Link de retorno para home.

