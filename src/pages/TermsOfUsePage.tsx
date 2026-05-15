import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import "./LegalPage.css";

export function TermsOfUsePage() {
  return (
    <main className="legal-page">
      <Container size="sm">
        <header className="legal-page__header">
          <Link to="/">Voltar para a página inicial</Link>
          <h1>Termos de Uso</h1>
          <p className="legal-page__updated">Última atualização: 12/05/2026</p>
          <p>Estes Termos de Uso regulam o acesso e uso da landing page da Angeled.</p>
        </header>

        <div className="legal-page__content">
          <section className="legal-page__section">
            <h2>1. Sobre a página</h2>
            <p>
              A landing page da Angeled tem finalidade informativa e comercial.
              Ela apresenta o produto Angeled, suas principais funcionalidades e
              informações sobre a futura disponibilidade para compra.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>2. Sobre o produto</h2>
            <p>
              O Angeled é um gerenciador inteligente para fechaduras elétricas
              residenciais compatíveis. Ele não substitui a fechadura física,
              mas adiciona uma camada de controle de acesso por cartão,
              histórico no app, notificações e funcionamento offline para
              acessos já cadastrados.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>3. Compatibilidade</h2>
            <p>
              O Angeled foi pensado para fechaduras elétricas residenciais
              compatíveis. Alguns modelos, instalações ou condições elétricas
              podem exigir validação antes da compra ou adaptação técnica.
            </p>
            <p>
              A Angeled não garante funcionamento com todos os tipos de
              fechadura, porta, portão ou instalação elétrica.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>4. Instalação</h2>
            <p>
              A instalação do Angeled não exige obras, mas envolve conexão com
              fechadura elétrica e deve seguir o guia de instalação do produto.
            </p>
            <p>Em caso de dúvida, recomenda-se buscar apoio técnico qualificado.</p>
          </section>

          <section className="legal-page__section">
            <h2>5. Pré-venda e Mercado Livre</h2>
            <p>
              A compra do Angeled está prevista para ocorrer futuramente pelo
              Mercado Livre. Enquanto o anúncio oficial não estiver disponível,
              qualquer informação de pré-venda poderá ser atualizada.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>6. Alterações nas informações</h2>
            <p>
              As informações da landing page podem ser atualizadas a qualquer
              momento, especialmente durante a fase de desenvolvimento,
              pré-venda e preparação comercial do produto.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>7. Limitação de responsabilidade</h2>
            <p>
              A landing page não substitui o manual técnico, o guia de
              instalação ou as condições comerciais finais do produto.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>8. Contato</h2>
            <p>
              Angeled
              <br />
              Carapicuíba, SP
              <br />
              E-mail:{" "}
              <a href="mailto:angeledtecnologia@gmail.com">
                angeledtecnologia@gmail.com
              </a>
              <br />
              WhatsApp:{" "}
              <a href="https://wa.me/5511939305353" rel="noreferrer" target="_blank">
                (11) 93930-5353
              </a>
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
