import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/logo/angeled-logo-icon.svg";
import { ctaPrimaryAction, WHATSAPP_LEAD_URL } from "../../utils/cta";
import { Button } from "../ui/Button";
import { Container } from "./Container";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <Container>
        <div className="site-footer__cta">
          <div className="site-footer__cta-text">
            <p className="site-footer__cta-eyebrow">Em breve pelo Mercado Livre</p>
            <h2 className="site-footer__cta-title">
              Entre na lista de lançamento e seja avisado primeiro.
            </h2>
          </div>
          <div className="site-footer__cta-actions">
            <Button iconRight={<ArrowRight aria-hidden />} onClick={ctaPrimaryAction} size="lg">
              Avise-me quando estiver disponível
            </Button>
            <a
              className="site-footer__whatsapp"
              href={WHATSAPP_LEAD_URL}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden size={16} strokeWidth={1.7} />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link className="site-footer__logo" to="/" aria-label="Angeled - inicio">
              <img
                className="site-footer__logo-icon"
                src={logoIcon}
                alt=""
                width={36}
                height={36}
                decoding="async"
              />
              <span className="site-footer__logo-name">Angeled</span>
            </Link>
            <p>
              Gerenciador inteligente para fechaduras elétricas residenciais
              compatíveis. A Angeled não vende a fechadura física.
            </p>
          </div>

          <div className="site-footer__column">
            <h2>Produto</h2>
            <a href="/#como-funciona">Como funciona</a>
            <a href="/#funcionalidades">Funcionalidades</a>
            <a href="/#compatibilidade">Compatibilidade</a>
            <a href="/#kit">O que vem no kit</a>
          </div>

          <div className="site-footer__column">
            <h2>Suporte</h2>
            <a href="/#faq">Perguntas frequentes</a>
            <a href={WHATSAPP_LEAD_URL} rel="noreferrer" target="_blank">
              WhatsApp · (11) 93930-5353
            </a>
            <a href="mailto:angeledtecnologia@gmail.com">
              angeledtecnologia@gmail.com
            </a>
            <span>Carapicuíba, SP</span>
          </div>

          <div className="site-footer__column">
            <h2>Informações</h2>
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/termos">Termos de uso</Link>
            <span className="site-footer__note">
              Compatível com Android no lançamento.
            </span>
            <span className="site-footer__note">
              Sem mensalidade no modelo inicial.
            </span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Angeled. Todos os direitos reservados.</span>
          <span>Pré-venda em breve pelo Mercado Livre.</span>
        </div>
      </Container>
    </footer>
  );
}
