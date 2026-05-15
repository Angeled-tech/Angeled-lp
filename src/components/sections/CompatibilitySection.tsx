import { CheckCircle2, ClipboardList, ShieldCheck, Wrench } from "lucide-react";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import "./CompatibilitySection.css";

const points = [
  {
    icon: CheckCircle2,
    title: "Fechaduras compatíveis",
    desc: "Compatível com fechaduras elétricas residenciais selecionadas. Verifique se o seu modelo é suportado antes da compra.",
  },
  {
    icon: Wrench,
    title: "Instalação guiada",
    desc: "O app conduz a configuração inicial passo a passo. Sem obras, sem trocar a fechadura.",
  },
  {
    icon: ClipboardList,
    title: "Pode exigir avaliação",
    desc: "Modelos fora da lista podem precisar de uma avaliação rápida. A equipe ajuda a confirmar a compatibilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Sua fechadura segue sua",
    desc: "O Angeled não substitui a fechadura física. Ele adiciona inteligência à fechadura elétrica que você já tem.",
  },
];

export function CompatibilitySection() {
  return (
    <Section
      id="compatibilidade"
      eyebrow="Compatibilidade"
      title="Feito para fechaduras elétricas residenciais compatíveis."
      description="A Angeled não vende a fechadura física. O Gerenciador Angeled é instalado na fechadura elétrica que já existe na sua casa, desde que ela esteja na lista de compatibilidade."
    >
      <div className="compat-grid">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <Reveal key={point.title} delay={index * 70}>
              <article className="compat-card">
                <span className="compat-card__icon" aria-hidden>
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <h3 className="compat-card__title">{point.title}</h3>
                <p className="compat-card__desc">{point.desc}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <p className="compat-note" role="note">
          Em dúvida sobre o seu modelo? Antes da pré-venda, fale com a gente pelo WhatsApp e a
          equipe confirma se a sua fechadura é compatível.
        </p>
      </Reveal>
    </Section>
  );
}
