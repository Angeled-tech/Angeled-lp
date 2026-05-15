import { Bell, CreditCard, DoorClosed, Radio } from "lucide-react";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import "./HowItWorksSection.css";

const flow = [
  { icon: CreditCard, label: "Cartão ou tag RFID" },
  { icon: Radio, label: "Gerenciador Angeled" },
  { icon: DoorClosed, label: "Fechadura elétrica" },
  { icon: Bell, label: "Histórico e avisos no app" },
];

const steps = [
  {
    num: 1,
    title: "Instale o gerenciador",
    desc: "O módulo Angeled é conectado à sua fechadura elétrica existente. Sem trocar, sem obras. Em minutos.",
  },
  {
    num: 2,
    title: "Configure pelo app",
    desc: "Baixe o app Angeled, crie sua conta e conecte o gerenciador ao Wi-Fi da sua casa em poucos toques.",
  },
  {
    num: 3,
    title: "Cadastre os acessos",
    desc: "Aproxime o cartão ou chaveiro do leitor e dê um nome — João, Maria, Faxineira. Em segundos está feito.",
  },
  {
    num: 4,
    title: "Acompanhe tudo pelo celular",
    desc: "Receba notificações em tempo real, veja o histórico de acessos e remova permissões a qualquer hora, de qualquer lugar.",
  },
];

const nodes = [
  { icon: "📱", name: "App Angeled", sub: "Android no lançamento" },
  { icon: "☁️", name: "Nuvem Angeled", sub: "Sincronização segura" },
  { icon: "📡", name: "Gerenciador Angeled", sub: "Wi-Fi · Instalado na fechadura" },
  {
    icon: "🚪",
    name: "Sua fechadura elétrica",
    sub: "A que já existe na sua casa",
    highlighted: true,
  },
];

export function HowItWorksSection() {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Simples de instalar, poderoso no dia a dia."
    >
      <Reveal>
        <ol className="how-flow" aria-label="Fluxo de funcionamento do Angeled">
          {flow.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="how-flow__item">
                <span className="how-flow__icon" aria-hidden>
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className="how-flow__label">{item.label}</span>
                {index < flow.length - 1 ? (
                  <span className="how-flow__arrow" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </Reveal>

      <div className="how-layout">
        <ol className="how-steps" aria-label="Passos de instalação">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.num} delay={index * 70} className="how-step">
              <div className="how-step__num" aria-hidden>
                {step.num}
              </div>
              <div>
                <h3 className="how-step__title">{step.title}</h3>
                <p className="how-step__desc">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="how-visual" aria-label="Diagrama do sistema Angeled">
          {nodes.map((node, i) => (
            <div key={node.name}>
              <div className={`how-node${node.highlighted ? " how-node--highlighted" : ""}`}>
                <div
                  className={`how-node__icon${node.highlighted ? " how-node__icon--wine" : ""}`}
                  aria-hidden
                >
                  {node.icon}
                </div>
                <div>
                  <div className="how-node__name">{node.name}</div>
                  <div className="how-node__sub">{node.sub}</div>
                </div>
              </div>
              {i < nodes.length - 1 && <div className="how-connector" aria-hidden />}
            </div>
          ))}

          <div className="how-offline-note" role="note">
            <span aria-hidden>🔋</span>
            <div>
              <strong>Continua funcionando mesmo sem internet</strong>
              <p className="how-offline-note__sub">
                RFIDs já cadastrados continuam funcionando localmente. Alterações remotas ficam pendentes até reconexão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
