import { Camera, Cpu, KeyRound } from "lucide-react";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import "./ProductShowcaseSection.css";

const highlights = [
  {
    icon: Cpu,
    title: "Módulo discreto",
    desc: "Pensado para ficar embutido na sua fechadura elétrica residencial compatível.",
  },
  {
    icon: KeyRound,
    title: "Leitor RFID dedicado",
    desc: "Aceita cartões e tags. Cadastro e remoção feitos pelo app em segundos.",
  },
];

export function ProductShowcaseSection() {
  return (
    <Section
      id="produto"
      eyebrow="O produto"
      title="O hardware do Angeled."
      description="Um módulo gerenciador que se conecta à sua fechadura elétrica residencial compatível e converte cartões e tags em acessos rastreáveis pelo app."
      variant="alt"
    >
      <div className="showcase-layout">
        <Reveal direction="up" className="showcase-figure-wrapper">
          <figure className="showcase-figure" aria-label="Foto do Gerenciador Angeled em breve">
            <div className="showcase-figure__inner">
              <div className="showcase-figure__glow" aria-hidden />
              <div className="showcase-figure__placeholder" aria-hidden>
                <Camera size={28} strokeWidth={1.4} />
                <span>Foto real em breve</span>
              </div>
            </div>
            <figcaption className="showcase-figure__caption">
              Gerenciador Angeled · protótipo de bancada
            </figcaption>
          </figure>
        </Reveal>

        <div className="showcase-points">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 80}>
                <div className="showcase-point">
                  <span className="showcase-point__icon" aria-hidden>
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="showcase-point__title">{item.title}</h3>
                    <p className="showcase-point__desc">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={200}>
            <p className="showcase-disclaimer">
              Imagens reais do produto estão sendo finalizadas e serão publicadas antes do
              lançamento.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
