import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import "./ProblemSection.css";

const problems = [
  {
    icon: "🔓",
    title: "Sem controle de quem acessa",
    desc: "Qualquer chaveiro abre. Não há como saber se foi sua faxineira, seu filho ou alguém desconhecido.",
  },
  {
    icon: "📵",
    title: "Sem avisos no celular",
    desc: "A fechadura abre e você não fica sabendo. Nenhuma notificação, nenhum registro no app.",
  },
  {
    icon: "🗂️",
    title: "Sem histórico de entradas",
    desc: "Não há registro de quem entrou, quando entrou, nem com qual chave. O passado desaparece.",
  },
  {
    icon: "🔑",
    title: "Remoção de acesso é trabalhosa",
    desc: "Para revogar um acesso, você precisa trocar a fechadura ou o cilindro. Caro, demorado e inconveniente.",
  },
  {
    icon: "🏗️",
    title: "Soluções atuais exigem obras",
    desc: "As fechaduras inteligentes do mercado exigem substituição total. Custo alto, instalação técnica.",
  },
];

export function ProblemSection() {
  return (
    <Section
      id="problema"
      eyebrow="O problema"
      title="Sua fechadura elétrica não te conta nada."
      description="Você sabe que alguém entrou, mas não sabe quem, quando, nem se foi com a sua permissão."
      variant="alt"
    >
      <div className="problem-grid">
        {problems.map((p, index) => (
          <Reveal key={p.title} delay={index * 60}>
            <div className="problem-card">
              <div className="problem-card__icon" aria-hidden>
                {p.icon}
              </div>
              <h3 className="problem-card__title">{p.title}</h3>
              <p className="problem-card__desc">{p.desc}</p>
            </div>
          </Reveal>
        ))}

        <Reveal delay={problems.length * 60}>
          <div className="problem-card problem-card--solution">
            <div className="problem-card__icon problem-card__icon--wine" aria-hidden>
              ✅
            </div>
            <h3 className="problem-card__title problem-card__title--wine">
              É aí que o Angeled entra
            </h3>
            <p className="problem-card__desc">
              Instala na sua fechadura elétrica residencial compatível, sem obras, e traz mais
              controle e rastreabilidade pelo app.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
