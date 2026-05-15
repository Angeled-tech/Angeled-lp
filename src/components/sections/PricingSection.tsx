import { ArrowRight } from "lucide-react";
import { ctaPrimaryAction } from "../../utils/cta";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import "./PricingSection.css";

const items = [
  { icon: "📦", label: "Módulo gerenciador Angeled" },
  { icon: "🔑", label: "5 cartões de acesso inclusos" },
  { icon: "📱", label: "App Angeled para Android" },
  { icon: "☁️", label: "Nuvem Angeled inclusa no lançamento" },
  { icon: "🔔", label: "Notificações em tempo real" },
  { icon: "📋", label: "Acesso ao histórico por até 90 dias" },
];

export function PricingSection() {
  return (
    <section className="section pricing-section" id="kit">
      <Container>
        <div className="pricing-layout">
          <Reveal direction="left" className="pricing-side">
            <p className="section__eyebrow">Sem assinatura no lançamento</p>
            <h2>
              Pagamento único
              <br />
              no lançamento.
            </h2>
            <p className="pricing-side__desc">
              Sem mensalidade no modelo inicial. Você compra o gerenciador e o app Angeled para Android é
              incluso. Simples assim.
            </p>
          </Reveal>

          <Reveal direction="right" className="pricing-card-wrap">
          <div className="pricing-card">
            <span className="pricing-card__tag">Kit Angeled</span>
            <h3 className="pricing-card__title">
              Gerenciador
              <br />
              Angeled
            </h3>
            <p className="pricing-card__subtitle">Tudo que você precisa para começar.</p>

            <ul className="pricing-card__items" aria-label="O que está incluso no kit">
              {items.map((item) => (
                <li key={item.label} className="pricing-card__item">
                  <span className="pricing-card__item-icon" aria-hidden>
                    {item.icon}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>

            <Button
              className="pricing-card__cta"
              iconRight={<ArrowRight aria-hidden />}
              onClick={ctaPrimaryAction}
              size="lg"
            >
              Avise-me quando estiver disponível
            </Button>

            <p className="pricing-card__note">
              Sem mensalidade no modelo inicial · Entrar na lista de lançamento
            </p>
          </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
