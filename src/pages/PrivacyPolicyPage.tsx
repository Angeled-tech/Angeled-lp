import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import "./LegalPage.css";

export function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <Container size="sm">
        <header className="legal-page__header">
          <Link to="/">Voltar para a página inicial</Link>
          <h1>Política de Privacidade</h1>
          <p className="legal-page__updated">Última atualização: 12/05/2026</p>
          <p>
            A Angeled respeita a sua privacidade. Esta Política de Privacidade
            explica, de forma simples, como podemos tratar informações
            relacionadas ao uso da nossa landing page.
          </p>
        </header>

        <div className="legal-page__content">
          <section className="legal-page__section">
            <h2>1. Informações que podemos coletar</h2>
            <p>
              Atualmente, a landing page da Angeled tem caráter informativo e de
              pré-venda. Podemos coletar dados de navegação por meio de
              ferramentas de análise, como Google Analytics, para entender o
              desempenho da página e melhorar a comunicação do produto.
            </p>
            <p>
              Futuramente, caso seja ativado um formulário de interesse ou
              pré-venda, poderemos coletar informações como:
            </p>
            <ul>
              <li>nome;</li>
              <li>e-mail;</li>
              <li>WhatsApp;</li>
              <li>cidade/estado;</li>
              <li>interesse no produto.</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>2. Como usamos essas informações</h2>
            <p>As informações poderão ser usadas para:</p>
            <ul>
              <li>responder contatos;</li>
              <li>avisar sobre disponibilidade do produto;</li>
              <li>melhorar a landing page;</li>
              <li>entender o interesse pelo Angeled;</li>
              <li>fornecer informações sobre a pré-venda.</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>3. Compartilhamento de dados</h2>
            <p>A Angeled não vende dados pessoais dos visitantes.</p>
            <p>
              Podemos utilizar serviços de terceiros, como ferramentas de
              análise ou plataformas de venda, apenas quando necessário para
              operar a página, medir desempenho ou viabilizar a compra futura do
              produto.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>4. Cookies e analytics</h2>
            <p>
              A landing page pode usar cookies ou tecnologias semelhantes para
              análise de navegação, especialmente por meio do Google Analytics.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>5. Segurança</h2>
            <p>
              Adotamos medidas razoáveis para proteger as informações coletadas.
              Mesmo assim, nenhum sistema é completamente livre de riscos.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>6. Direitos do usuário</h2>
            <p>
              Você pode entrar em contato para solicitar informações ou pedir
              remoção de dados eventualmente coletados por meio dos canais
              oficiais da Angeled.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>7. Contato</h2>
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
