# Angeled LP — Identidade Visual

## Direção visual

A LP deve usar uma direção visual:

- dark/vinho;
- premium;
- tecnológica;
- residencial;
- confiável;
- calma;
- clara para compra futura.

A estética deve ser mais institucional e aspiracional que o app, mas ainda ancorada em produto real e uso doméstico.

## Personalidade

| Atributo | Direção |
|---|---|
| Segurança | Presente, sem alarmismo |
| Tecnologia | Sofisticada, sem jargão |
| Residencial | Próxima e prática |
| Controle | Organizado e rastreável |
| Pré-venda | Transparente e sem pressa falsa |

## Paleta principal

```css
:root {
  --wine-dark: #4A0711;
  --wine: #7A1020;
  --wine-bright: #9E1B32;
  --wine-border: #D9A7AF;
  --wine-soft: #F8E8EB;

  --bg: #0C0C0E;
  --bg-2: #111113;
  --bg-card: #161618;
  --bg-elevated: #1D1D20;

  --text-1: #F5F0EE;
  --text-2: #B8ADB4;
  --text-3: #8D838A;

  --success: #1F8A4C;
  --danger: #C53030;
  --warning: #B7791F;
  --offline: #718096;
}
```

## Uso das cores

- `--bg`: fundo principal da página.
- `--bg-2`: faixas alternadas.
- `--bg-card`: cards e FAQ.
- `--wine`: botões primários e destaques.
- `--wine-bright`: hover e acentos.
- `--wine-soft`: textos ou chips claros apenas sobre fundos escuros quando necessário.
- `--success`: estados positivos, como funcionamento offline e benefício confirmado.
- `--danger`: usar com moderação, apenas para alertas/negação em seções explicativas.

## Tipografia

- Títulos: Playfair Display.
- Textos, botões e navegação: DM Sans.

Direção:

- Títulos com presença editorial, sem ficar decorativo demais.
- Corpo com alta legibilidade.
- Nada de texto pequeno para informações importantes.

## Ícones

Usar `lucide-react`.

Sugestões:

| Uso | Ícone |
|---|---|
| Casa/residência | `Home` |
| Fechadura/porta | `DoorOpen`, `LockKeyhole`, `KeyRound` |
| Cartões/acesso | `BadgeCheck`, `CreditCard`, `KeyRound` |
| Histórico | `History`, `Clock` |
| Notificações | `Bell` |
| Offline | `WifiOff` |
| Segurança | `ShieldCheck` |
| App | `Smartphone` |
| Kit | `Package` |
| Mercado Livre | `ShoppingBag` |

## Imagens

Prioridade:

1. Foto/render real do Gerenciador Angeled.
2. Mockup visual do app.
3. Placeholder elegante com texto “Imagem do produto em breve”.

Evitar:

- Imagens genéricas de casa inteligente que não expliquem o produto.
- Fotos que pareçam fechadura física vendida pela Angeled.
- Hero abstrato sem sinal claro do produto.

