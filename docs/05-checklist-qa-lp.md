# 05 — Checklist QA da LP Angeled

## Objetivo

Garantir que a landing page esteja pronta para publicação, sem promessas incorretas, links quebrados, falhas visuais graves ou problemas básicos de SEO, acessibilidade e performance.

## 1. Checklist de copy

- [ ] Não usa “qualquer fechadura elétrica”.
- [ ] Não usa “100% seguro”.
- [ ] Não usa “impossível de clonar”.
- [ ] Não usa “histórico completo”.
- [ ] Não usa “use para sempre”.
- [ ] Não promete iOS confirmado.
- [ ] Não diz “sem necessidade de profissional especializado”.
- [ ] Usa “fechaduras elétricas residenciais compatíveis”.
- [ ] Usa “histórico por até 90 dias”.
- [ ] Usa “sem assinatura no lançamento”.
- [ ] Usa “em breve pelo Mercado Livre”.
- [ ] Usa “sem obras, com instalação guiada”.
- [ ] Explica que o Angeled não substitui a fechadura.
- [ ] Explica que o kit tem 5 cartões.

## 2. Checklist visual

- [ ] Tema dark/vinho preservado.
- [ ] Logo aparece corretamente no header.
- [ ] Footer usa logo ou nome Angeled corretamente.
- [ ] Emojis foram substituídos por ícones profissionais.
- [ ] Cards têm espaçamento consistente.
- [ ] Gradientes não prejudicam leitura.
- [ ] Contraste dos textos está adequado.
- [ ] Botões têm estados de hover/focus.
- [ ] Layout mobile não quebra.
- [ ] Mockup do app aparece bem em desktop.
- [ ] Mockup não atrapalha leitura em mobile.

## 3. Checklist responsivo

Validar manualmente em:

- [ ] 360px.
- [ ] 390px.
- [ ] 768px.
- [ ] 1024px.
- [ ] 1440px.

Verificar:

- [ ] Header mobile.
- [ ] Hero.
- [ ] Cards.
- [ ] FAQ.
- [ ] Footer.
- [ ] Botões.
- [ ] Espaçamentos laterais.

## 4. Checklist técnico

- [ ] Projeto usa React + Vite + TypeScript.
- [ ] `npm run build` executa sem erro.
- [ ] Rotas funcionam: `/`, `/privacidade`, `/termos`.
- [ ] `vercel.json` existe com rewrite para SPA.
- [ ] `lucide-react` está sendo usado para ícones.
- [ ] Feature flag `leadCapture` existe.
- [ ] Lead modal está preparado, mas desativado.
- [ ] Google Analytics depende de `VITE_GA_ID`.
- [ ] Google Analytics não carrega se `VITE_GA_ID` estiver vazio.
- [ ] Não existe checkout próprio.
- [ ] Não existe integração crítica com backend.
- [ ] Não existe link falso de compra.

## 5. Checklist de SEO

- [ ] Title configurado.
- [ ] Meta description configurada.
- [ ] `lang="pt-BR"` configurado.
- [ ] Open Graph configurado.
- [ ] Twitter Card configurado.
- [ ] Favicon configurado.
- [ ] OG image referenciada.
- [ ] robots.txt criado.
- [ ] sitemap.xml criado ou TODO claro por falta de domínio.
- [ ] Canonical com TODO se domínio ainda não existir.

## 6. Checklist de acessibilidade

- [ ] Botões têm texto claro.
- [ ] Links têm destino real.
- [ ] Foco visível.
- [ ] Contraste adequado.
- [ ] FAQ usa `aria-expanded`.
- [ ] Imagens têm `alt`.
- [ ] Navegação por teclado funciona.
- [ ] Não há texto importante apenas em imagem.
- [ ] Header fixo não cobre conteúdo ao navegar por âncoras.

## 7. Checklist de footer

- [ ] Nome: Angeled.
- [ ] Cidade: Carapicuíba, SP.
- [ ] E-mail: angeledtecnologia@gmail.com.
- [ ] WhatsApp: (11) 93930-5353.
- [ ] Link WhatsApp: https://wa.me/5511939305353.
- [ ] Link para Política de Privacidade.
- [ ] Link para Termos de Uso.

## 8. Checklist de CTA

- [ ] CTA principal é “Avise-me quando estiver disponível”.
- [ ] CTA não abre checkout.
- [ ] CTA não aponta para link falso do Mercado Livre.
- [ ] CTA rola para seção de pré-venda enquanto formulário estiver desativado.
- [ ] Se leadCapture estiver falso, formulário não aparece.

## 9. Checklist antes de publicar

Executar:

```bash
npm run build
```

Se houver lint:

```bash
npm run lint
```

Validar no preview local:

```bash
npm run preview
```

Antes do deploy:

- [ ] Revisar copy final.
- [ ] Testar links.
- [ ] Testar mobile.
- [ ] Testar `/privacidade` direto no navegador.
- [ ] Testar `/termos` direto no navegador.
- [ ] Verificar console do navegador sem erros.
