# 00 — Planejamento da LP Angeled

## Objetivo

Criar a landing page oficial do Angeled para apresentar o produto, explicar seu funcionamento e preparar o cliente para a compra futura pelo Mercado Livre.

A LP não será responsável por funções críticas do produto. Ela é uma frente comercial/institucional separada do backend, app mobile, firmware e painel Admin.

## Definição do produto para a LP

O Angeled é um gerenciador inteligente para fechaduras elétricas residenciais compatíveis. Ele transforma a fechadura elétrica já existente em um sistema de controle de acesso por cartão, com histórico no app, notificações e funcionamento offline para acessos já cadastrados.

## Público inicial

- Donos de casa.
- Famílias.
- Residências com fechadura elétrica.
- Portões residenciais.
- Pessoas que querem saber quem entrou e quando entrou.
- Pessoas que recebem familiares, visitantes, prestadores ou funcionários domésticos.

## Modelo comercial inicial

- Pré-venda.
- Compra futura pelo Mercado Livre.
- Venda nacional desde o início.
- Sem assinatura no lançamento.
- Kit com 1 Gerenciador Angeled e 5 cartões de acesso.
- Histórico de acessos por até 90 dias.

## Objetivo principal da LP

A LP deve fazer o visitante entender rapidamente:

1. O que é o Angeled.
2. Que ele não substitui a fechadura, mas adiciona controle inteligente.
3. Que funciona com fechaduras elétricas residenciais compatíveis.
4. Que usa cartões de acesso.
5. Que mostra histórico e notificações no app.
6. Que continua funcionando offline para acessos já cadastrados.
7. Que estará disponível em breve pelo Mercado Livre.

## Stack definida

- React.
- Vite.
- TypeScript.
- React Router DOM.
- lucide-react.
- CSS organizado por tokens globais e componentes.
- Deploy na Vercel.

## Rotas

- `/` — Landing principal.
- `/privacidade` — Política de Privacidade simples.
- `/termos` — Termos de Uso simples.

## Identidade visual

A LP deve manter a direção visual já criada:

- Tema dark/vinho.
- Visual premium, tecnológico e residencial.
- Fundo escuro.
- Cards escuros.
- Gradientes vinho.
- Bordas suaves.
- Animações discretas.
- Ícones profissionais com lucide-react.

## Fontes

- Títulos: Playfair Display.
- Textos: DM Sans.

## Paleta base

```css
--wine-dark: #4A0711;
--wine: #7A1020;
--wine-bright: #9E1B32;
--wine-border: #D9A7AF;
--wine-soft: #F8E8EB;
--bg: #0C0C0E;
--bg-2: #111113;
--bg-card: #161618;
--text-1: #F5F0EE;
--text-2: #9A9098;
--success: #1F8A4C;
--danger: #C53030;
--offline: #718096;
```

## CTA atual

CTA principal:

```text
Avise-me quando estiver disponível
```

Enquanto o formulário estiver desativado, o CTA deve rolar até a seção de pré-venda/Mercado Livre.

Quando o formulário for ativado futuramente, o CTA poderá abrir um modal ou seção de captura de lead.

## Canal futuro de venda

A LP deve citar:

```text
Em breve pelo Mercado Livre.
```

Não deve simular checkout próprio nem prometer link de compra antes do anúncio existir.

## Contato institucional

- Nome: Angeled.
- E-mail: angeledtecnologia@gmail.com.
- WhatsApp: (11) 93930-5353.
- Link WhatsApp: https://wa.me/5511939305353.
- Cidade: Carapicuíba, SP.

## O que a LP deve evitar

Não usar:

- “qualquer fechadura elétrica”.
- “100% seguro”.
- “impossível de clonar”.
- “histórico completo”.
- “use para sempre”.
- “iOS & Android”, porque iOS ainda não está confirmado.
- “sem necessidade de profissional especializado”.
- “sem instalação”.

## O que a LP deve usar

Usar:

- “fechaduras elétricas residenciais compatíveis”.
- “controle inteligente para sua fechadura elétrica”.
- “histórico por até 90 dias”.
- “sem assinatura no lançamento”.
- “em breve pelo Mercado Livre”.
- “sem obras, com instalação guiada”.
- “mais controle”.
- “mais rastreabilidade”.
- “funcionamento offline para acessos já cadastrados”.

## Escopo fora da LP

A LP não deve implementar:

- Login.
- Cadastro real de usuário.
- Checkout próprio.
- Gestão de dispositivos.
- Integração com ESP32.
- Integração com app mobile.
- Área do cliente.
- Painel Admin.
- Chamadas críticas ao backend.

## Pendências futuras

- Definir domínio oficial.
- Criar OG image 1200x630.
- Criar foto/render real do hardware.
- Definir se haverá formulário de pré-venda.
- Definir destino real do CTA quando o anúncio do Mercado Livre estiver ativo.
- Criar manual/guia de instalação antes da venda nacional.
