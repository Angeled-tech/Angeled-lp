import { ArrowRight } from "lucide-react";
import { ctaPrimaryAction } from "../../utils/cta";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import "./FinalCtaSection.css";

export function FinalCtaSection() {
  return (
    <section className="final-cta" id="cta-final">
      <div className="final-cta__glow" aria-hidden />
      <Container>
        <Reveal className="final-cta__inner">
          <h2 className="final-cta__title">
            Sua casa merece
            <br />
            saber quem entrou.
          </h2>
          <p className="final-cta__sub">
            Instale o Angeled na sua fechadura elétrica residencial compatível e tenha mais
            controle sobre os acessos da sua casa — sem obras, sem mensalidade no lançamento.
          </p>
          <div className="final-cta__actions">
            <Button iconRight={<ArrowRight aria-hidden />} onClick={ctaPrimaryAction} size="lg">
              Avise-me quando estiver disponível
            </Button>
            <a className="final-cta__secondary" href="#como-funciona">
              Como funciona
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
