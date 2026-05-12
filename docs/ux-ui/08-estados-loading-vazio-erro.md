# Angeled LP — Estados, Placeholders e Pendências

## Objetivo

Padronizar estados visuais que a LP pode precisar sem parecer app operacional.

## Estado de imagem do produto pendente

Quando ainda não houver foto/render:

Título:

> Imagem do produto em breve

Descrição:

> Estamos preparando a apresentação visual das primeiras unidades do Gerenciador Angeled.

Regra:

- Não usar imagem genérica que pareça produto final.

## Estado de lead capture desativado

Enquanto `features.leadCapture === false`:

- Não exibir formulário.
- CTA rola para `#mercado-livre`.
- Se houver texto de apoio, usar “As primeiras unidades estão sendo preparadas”.

## Estado de link do Mercado Livre desativado

Enquanto `features.mercadoLivreLink === false`:

- Não renderizar botão “Comprar”.
- Não renderizar botão com href vazio.
- Usar “Em breve pelo Mercado Livre”.

## Estado de analytics ausente

Quando `VITE_GA_ID` estiver vazio:

- Não carregar script.
- Não exibir erro para usuário.
- Build continua normal.

## Erro de rota

Se for criada página de erro:

Título:

> Página não encontrada

Texto:

> O endereço acessado não está disponível. Você pode voltar para a página inicial do Angeled.

CTA:

> Voltar para a página inicial

## Loading

A LP deve evitar loaders desnecessários. Conteúdo principal deve ser renderizado estaticamente sempre que possível.

Uso permitido:

- carregamento futuro de lead modal;
- envio futuro de formulário;
- lazy loading de imagens.

