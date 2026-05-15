# 07 - Prompt inicial do projeto: Plan -> Execucao

Use este prompt para abrir a primeira rodada de trabalho da LP Angeled no Codex/Cursor. Ele foi escrito para comecar em modo de planejamento, alinhar o escopo e depois executar a primeira entrega com seguranca.

---

## Prompt

Voce esta trabalhando no projeto **Angeled LP**.

Quero iniciar este projeto em duas fases:

1. **PLAN**: primeiro leia o contexto, entenda o estado atual, proponha um plano claro e nao edite arquivos.
2. **EXECUCAO**: depois da aprovacao do plano, implemente a primeira entrega tecnica da LP, valide e reporte o que foi feito.

## Referencias obrigatorias

Antes de propor o plano, leia e considere:

- `README.md`
- `docs/00-planejamento-lp-angeled.md`
- `docs/01-arquitetura-front-lp.md`
- `docs/02-copy-e-secoes.md`
- `docs/03-seo-analytics-deploy.md`
- `docs/04-termos-privacidade-base.md`
- `docs/05-checklist-qa-lp.md`
- `docs/ux-ui/00-visao-geral.md`
- `docs/ux-ui/01-identidade-visual.md`
- `docs/ux-ui/02-design-system.md`
- `docs/ux-ui/11-instrucoes-para-codex-cursor.md`
- `.cursor/rules/project-context.mdc`
- `.cursor/rules/copy-rules.mdc`
- `.cursor/rules/design-rules.mdc`
- `.cursor/rules/seo-analytics-rules.mdc`
- `board/lp/US-LP-001-estrutura-inicial-react-vite.md`
- `board/lp/US-LP-002-tokens-estilos-globais.md`
- `board/lp/US-LP-003-componentes-layout-ui.md`
- `board/lp/US-LP-004-feature-flags-cta.md`

Tambem use como referencia visual, se estiverem acessiveis:

- `angeled-logo.svg`
- `angeled-logo-sheet.html`
- `landing.html`

Importante: o `landing.html` antigo serve como referencia de direcao visual, layout, ritmo, mockup e atmosfera. A copy antiga nao deve ser copiada cegamente, porque contem promessas que a documentacao nova proibiu.

## Contexto do produto

O Angeled e um gerenciador inteligente para fechaduras eletricas residenciais compativeis. Ele adiciona controle de acesso por cartao, historico no app, notificacoes e funcionamento offline para acessos ja cadastrados.

A Angeled nao vende a fechadura fisica. A empresa vende o **Gerenciador Angeled**, que sera instalado em fechaduras eletricas residenciais compativeis.

A LP e comercial/institucional. Ela deve explicar o produto, preparar a compra futura pelo Mercado Livre e manter uma comunicacao confiavel para pre-venda.

## Decisoes fixas

- Stack: React + Vite + TypeScript.
- Rotas: `/`, `/privacidade`, `/termos`.
- Usar `react-router-dom`.
- Usar `lucide-react` para icones.
- Usar CSS global organizado por tokens e componentes.
- Preparar deploy na Vercel.
- Criar `vercel.json` com rewrite para SPA.
- Preparar Google Analytics por `VITE_GA_ID`, sem hardcodar ID.
- Criar feature flags `leadCapture` e `mercadoLivreLink`.
- Enquanto `leadCapture` estiver desativado, o CTA principal deve rolar para a secao Mercado Livre / Pre-venda.
- Nao criar login, checkout, area do cliente, backend, integracao com app, firmware ou painel Admin.
- Nao criar link falso de compra.

## Direcao visual

Mantenha a direcao visual dark/vinho ja definida:

- premium;
- tecnologica;
- residencial;
- confiavel;
- com foco em produto real;
- sem parecer dashboard operacional;
- sem landing generica de SaaS.

Use o logo Angeled dos assets. Se o arquivo `angeled-logo.svg` estiver acessivel, copie-o para a estrutura de assets do projeto.

Fontes:

- Titulos: Playfair Display.
- Textos, navegacao e botoes: DM Sans.

Cores base:

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
--text-2: #B8ADB4;
--text-3: #8D838A;
--success: #1F8A4C;
--danger: #C53030;
--warning: #B7791F;
--offline: #718096;
```

## Copy obrigatoria

Use como base a copy aprovada em `docs/02-copy-e-secoes.md`.

Hero:

```text
Controle inteligente para sua fechadura eletrica.
```

Subtitulo:

```text
Transforme sua fechadura eletrica residencial em um sistema de acesso por cartao, com historico no app, notificacoes e funcionamento offline.
```

CTA principal:

```text
Avise-me quando estiver disponivel
```

Texto de apoio:

```text
Pre-venda em breve pelo Mercado Livre.
```

## Frases proibidas

Nao use:

- "qualquer fechadura eletrica";
- "100% seguro";
- "impossivel de clonar";
- "historico completo";
- "use para sempre";
- "iOS & Android";
- "sem necessidade de profissional especializado";
- "sem instalacao";
- "controle total";
- qualquer promessa que sugira compra ativa antes do anuncio existir.

Prefira:

- "fechaduras eletricas residenciais compativeis";
- "historico por ate 90 dias";
- "sem assinatura no lancamento";
- "em breve pelo Mercado Livre";
- "sem obras, com instalacao guiada";
- "mais controle";
- "mais rastreabilidade";
- "funcionamento offline para acessos ja cadastrados".

## Fase 1 - PLAN

Na fase de planejamento:

1. Inspecione a estrutura atual do repositorio.
2. Identifique se ja existe scaffold React/Vite ou se a primeira entrega deve cria-lo do zero.
3. Leia a documentacao listada acima e extraia as decisoes que impactam a implementacao.
4. Compare a referencia `landing.html` com as regras atuais e destaque o que deve ser reaproveitado visualmente e o que deve ser corrigido na copy.
5. Proponha um plano de execucao por etapas, preferencialmente alinhado ao board `board/lp/`.
6. Defina a primeira entrega executavel.
7. Liste os arquivos que provavelmente serao criados ou alterados.
8. Liste os comandos de validacao que serao usados.

Nao edite arquivos durante esta fase.

Ao final do PLAN, pare e apresente:

- resumo do entendimento;
- plano de execucao;
- escopo da primeira entrega;
- riscos ou decisoes pendentes;
- criterio de pronto.

Pergunte se pode executar.

## Fase 2 - EXECUCAO

Depois da aprovacao, execute a primeira entrega.

Escopo recomendado para a primeira execucao:

- criar ou ajustar o scaffold React + Vite + TypeScript;
- instalar/configurar `react-router-dom` e `lucide-react`;
- criar rotas `/`, `/privacidade` e `/termos`;
- criar `vercel.json`;
- criar estrutura base de pastas em `src/`;
- criar `src/styles/tokens.css` e `src/styles/global.css`;
- criar componentes base: `Button`, `Badge`, `Container`, `Section`, `Header`, `Footer`;
- criar `src/config/features.ts`;
- criar `src/config/seo.ts`;
- criar `src/services/analytics.ts` preparado para `VITE_GA_ID`;
- copiar o logo para `src/assets/logo/angeled-logo.svg`, se o arquivo de referencia estiver acessivel;
- criar uma Home inicial responsiva com Hero, secoes placeholder coerentes e CTA apontando para Mercado Livre / Pre-venda;
- criar paginas simples de Privacidade e Termos com base em `docs/04-termos-privacidade-base.md`;
- garantir que nao existam links falsos de compra nem promessas proibidas.

Se o repositorio ja tiver parte disso pronta, nao recrie do zero. Trabalhe com o que existir e preserve alteracoes do usuario.

## Validacao obrigatoria

Antes de concluir a execucao, rode:

```bash
npm run build
```

Se existir lint configurado:

```bash
npm run lint
```

Corrija erros de build/lint antes de finalizar, salvo se houver bloqueio externo claro.

## Resposta final esperada

Ao finalizar a execucao, responda com:

- o que foi implementado;
- arquivos principais alterados/criados;
- comandos de validacao executados e resultado;
- pendencias recomendadas para a proxima rodada.

Mantenha a resposta objetiva e tecnica, sem repetir toda a documentacao.
