import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import "./FeaturesSection.css";

const features = [
  {
    icon: "🔔",
    title: "Notificações em tempo real",
    desc: "Receba um aviso no celular sempre que alguém acessar — ou tentar acessar sem permissão — a sua fechadura.",
    badge: "MVP",
    featured: true,
  },
  {
    icon: "📋",
    title: "Histórico de acessos",
    desc: '"João abriu o Portão às 14h20." Histórico detalhado dos acessos no app, com retenção de até 90 dias.',
  },
  {
    icon: "🔑",
    title: "Gerenciamento de acessos",
    desc: "Cadastre ou remova cartões e chaveiros pelo app, em segundos. Sem trocar a fechadura, sem chaveiro.",
  },
  {
    icon: "📶",
    title: "Funcionamento offline",
    desc: "RFIDs já cadastrados continuam funcionando localmente mesmo sem conexão. Alterações remotas ficam pendentes e são aplicadas ao reconectar.",
  },
  {
    icon: "🔧",
    title: "Configuração guiada",
    desc: "O app conduz você passo a passo pela configuração inicial. Não precisa de nenhum conhecimento técnico.",
  },
  {
    icon: "🛡️",
    title: "Sua fechadura, sua regra",
    desc: "O Angeled não substitui sua fechadura — ele adiciona inteligência a ela. Você mantém o controle físico e digital.",
  },
];

export function FeaturesSection() {
  return (
    <Section
      id="funcionalidades"
      eyebrow="Funcionalidades"
      title="Tudo que você precisa para controlar o acesso da sua casa."
      variant="alt"
    >
      <div className="features-grid">
        {features.map((f, index) => (
          <Reveal key={f.title} delay={index * 60}>
            <div className={`feature-card${f.featured ? " feature-card--featured" : ""}`}>
              <div
                className={`feature-card__icon${f.featured ? " feature-card__icon--wine" : ""}`}
                aria-hidden
              >
                {f.icon}
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
              {f.badge ? <span className="feature-card__badge">{f.badge}</span> : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
