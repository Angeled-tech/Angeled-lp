import { useState } from "react";
import { Container } from "../layout/Container";
import "./FaqSection.css";

const faqs = [
  {
    q: "Preciso trocar minha fechadura para instalar o Angeled?",
    a: "Não. O Angeled é instalado na sua fechadura elétrica existente, sem substituição e sem obras, com instalação guiada pelo app. Feito para fechaduras elétricas residenciais compatíveis.",
  },
  {
    q: "A fechadura continua abrindo se a internet cair?",
    a: "Sim para acessos já cadastrados. Os RFIDs cadastrados continuam funcionando localmente mesmo sem conexão. Alterações feitas pelo app (como cadastrar ou remover acesso) ficam pendentes e são aplicadas assim que o gerenciador reconectar.",
  },
  {
    q: "Como funciona o cadastro de acessos?",
    a: "Pelo app Angeled, você inicia o cadastro, dá um nome (ex: João, Faxineira) e aproxima o cartão ou chaveiro do leitor instalado na fechadura. Em segundos o acesso está cadastrado e pronto para usar.",
  },
  {
    q: "Posso remover um acesso a distância?",
    a: "Sim. Pelo app você remove qualquer acesso a qualquer hora, mesmo estando fora de casa. Se o gerenciador estiver offline no momento, o comando fica pendente e é aplicado assim que ele reconectar.",
  },
  {
    q: "O app tem mensalidade ou assinatura?",
    a: "No modelo inicial não há mensalidade. Você adquire o módulo gerenciador e o app Angeled para Android é incluso sem custo adicional. Funcionalidades premium poderão ser oferecidas futuramente de forma opcional.",
  },
  {
    q: "Quantos gerenciadores posso ter na mesma conta?",
    a: "Você pode gerenciar múltiplas fechaduras — portão, porta da sala, garagem — todas pelo mesmo app e conta. Cada gerenciador tem seu próprio histórico e lista de acessos.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section faq-section" id="faq">
      <Container size="sm">
        <header className="faq-section__header">
          <p className="faq-section__eyebrow">FAQ</p>
          <h2>Perguntas frequentes</h2>
        </header>

        <dl className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
                <dt>
                  <button
                    className="faq-item__q"
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-item__arrow" aria-hidden>
                      ▾
                    </span>
                  </button>
                </dt>
                <dd className="faq-item__a" hidden={!isOpen}>
                  {faq.a}
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
