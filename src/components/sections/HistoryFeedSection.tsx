import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import "./HistoryFeedSection.css";

const points = [
  {
    key: "permitidos",
    label: "Acessos permitidos",
    suffix: "com nome de quem entrou e horário",
  },
  {
    key: "negados",
    label: "Tentativas negadas",
    suffix: "com horário e qual fechadura",
  },
  {
    key: "eventos",
    label: "Eventos do gerenciador",
    suffix: "como online, offline e configurações",
  },
  {
    key: "data",
    label: "Organizado por data",
    suffix: "fácil de consultar a qualquer hora",
  },
];

type EventType = "allowed" | "denied" | "warn" | "info";

const events: { type: EventType; icon: string; text: string; time: string }[] = [
  { type: "allowed", icon: "✅", text: "João abriu Portão da casa", time: "14:20" },
  { type: "denied", icon: "❌", text: "Acesso negado no Portão da casa", time: "13:05" },
  { type: "allowed", icon: "✅", text: "Maria abriu Portão da casa", time: "10:15" },
  { type: "allowed", icon: "✅", text: "Faxineira abriu Porta da sala", time: "08:00" },
  { type: "warn", icon: "⚠️", text: "Porta da sala ficou offline", time: "Ontem" },
  { type: "info", icon: "🔧", text: "Novo acesso cadastrado: Visitante", time: "Ontem" },
];

export function HistoryFeedSection() {
  return (
    <Section
      id="historico"
      eyebrow="Histórico real"
      title="Saber quem entrou muda tudo."
      description="Acompanhe cada acesso da sua casa com linguagem simples e humana — não logs técnicos."
    >
      <div className="history-layout">
        <div className="history-points">
          {points.map((p, i) => (
            <Reveal key={p.key} delay={i * 70}>
              <div className="history-point">
                <div className="history-point__check" aria-hidden>
                  ✓
                </div>
                <p className="history-point__text">
                  <strong>{p.label}</strong> {p.suffix}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" className="history-feed-wrap">
          <div className="history-feed" aria-label="Feed de eventos de acesso">
            {events.map((ev, i) => (
              <div key={i} className="history-event">
                <div
                  className={`history-event__dot history-event__dot--${ev.type}`}
                  aria-hidden
                >
                  {ev.icon}
                </div>
                <span className="history-event__text">{ev.text}</span>
                <span className="history-event__time">{ev.time}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
