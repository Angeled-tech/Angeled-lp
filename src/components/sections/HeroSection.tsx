import { ArrowRight } from "lucide-react";
import { ctaPrimaryAction } from "../../utils/cta";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import "./HeroSection.css";

const trustItems = ["Sem obras", "App para Android", "Funciona offline"];

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow hero__glow--1" aria-hidden />
      <div className="hero__glow hero__glow--2" aria-hidden />

      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__eyebrow">
              <span className="hero__tag-pill">
                <span className="hero__tag-pill-dot" aria-hidden />
                Pré-venda em breve pelo Mercado Livre
              </span>
            </div>

            <h1 className="hero__title">
              Sua fechadura,
              <br />
              agora <em>inteligente</em>
            </h1>

            <p className="hero__lead">
              Transforme sua fechadura elétrica residencial em um sistema de acesso por cartão, com histórico no
              app, notificações e funcionamento offline.
            </p>

            <div className="hero__actions">
              <Button iconRight={<ArrowRight aria-hidden />} onClick={ctaPrimaryAction} size="lg">
                Avise-me quando estiver disponível
              </Button>
              <a className="hero__secondary" href="#como-funciona">
                Como funciona
              </a>
            </div>

            <div className="hero__trust" aria-label="Destaques do Angeled">
              {trustItems.flatMap((label, i) => [
                i > 0 ? (
                  <span key={`sep-${label}`} className="hero__trust-sep" aria-hidden />
                ) : null,
                <span key={label} className="hero__trust-item">
                  <span className="hero__trust-check" aria-hidden>
                    ✓
                  </span>
                  {label}
                </span>,
              ])}
            </div>
          </div>

          <div className="hero__visual" aria-label="Prévia do app Angeled">
            <div className="hero-phone__halo" aria-hidden />

            <div className="hero-float hero-float--allowed">
              <div className="hero-float__icon hero-float__icon--green" aria-hidden>
                ✅
              </div>
              <div>
                <div className="hero-float__label">Acesso permitido</div>
                <div className="hero-float__sub">João abriu o Portão · agora</div>
              </div>
            </div>

            <div className="hero-float hero-float--denied">
              <div className="hero-float__icon hero-float__icon--red" aria-hidden>
                🚫
              </div>
              <div>
                <div className="hero-float__label">Acesso negado</div>
                <div className="hero-float__sub">Portão da casa · há 5 min</div>
              </div>
            </div>

            <div className="hero-phone">
              <div className="hero-phone__status">
                <span>9:41</span>
                <span>●●● WiFi 🔋</span>
              </div>
              <div className="hero-phone__screen">
                <div className="hero-phone__nav">
                  <div>
                    <div className="hero-phone__greeting">Olá,</div>
                    <div className="hero-phone__name">Diogo 👋</div>
                  </div>
                  <div className="hero-phone__avatar">D</div>
                </div>

                <div className="hero-phone__section-label">Seus gerenciadores</div>

                <div className="hero-phone__card">
                  <div className="hero-phone__card-icon" aria-hidden>
                    🚪
                  </div>
                  <div className="hero-phone__card-body">
                    <div className="hero-phone__card-title">Portão da casa</div>
                    <span className="hero-phone__badge hero-phone__badge--online">
                      <span className="hero-phone__badge-dot hero-phone__badge-dot--green" aria-hidden />
                      Online
                    </span>
                    <div className="hero-phone__card-event">João abriu agora</div>
                  </div>
                  <div className="hero-phone__chev" aria-hidden>
                    ›
                  </div>
                </div>

                <div className="hero-phone__card">
                  <div className="hero-phone__card-icon hero-phone__card-icon--muted" aria-hidden>
                    🏠
                  </div>
                  <div className="hero-phone__card-body">
                    <div className="hero-phone__card-title">Porta da sala</div>
                    <span className="hero-phone__badge hero-phone__badge--offline">
                      <span className="hero-phone__badge-dot hero-phone__badge-dot--grey" aria-hidden />
                      Offline
                    </span>
                    <div className="hero-phone__card-event">Último acesso há 3h</div>
                  </div>
                  <div className="hero-phone__chev" aria-hidden>
                    ›
                  </div>
                </div>

                <div className="hero-phone__quick-row">
                  <div className="hero-phone__quick">
                    <div className="hero-phone__quick-icon" aria-hidden>
                      🔑
                    </div>
                    <div className="hero-phone__quick-label">Acessos</div>
                    <div className="hero-phone__quick-sub">4 ativos</div>
                  </div>
                  <div className="hero-phone__quick">
                    <div className="hero-phone__quick-icon" aria-hidden>
                      📋
                    </div>
                    <div className="hero-phone__quick-label">Histórico</div>
                    <div className="hero-phone__quick-sub">Ver todos</div>
                  </div>
                </div>

                <div className="hero-phone__tabs">
                  <div className="hero-phone__tab hero-phone__tab--active">
                    <div className="hero-phone__tab-icon" aria-hidden>
                      🏠
                    </div>
                    Início
                  </div>
                  <div className="hero-phone__tab">
                    <div className="hero-phone__tab-icon" aria-hidden>
                      📋
                    </div>
                    Histórico
                  </div>
                  <div className="hero-phone__tab">
                    <div className="hero-phone__tab-icon" aria-hidden>
                      🔔
                    </div>
                    Avisos
                  </div>
                  <div className="hero-phone__tab">
                    <div className="hero-phone__tab-icon" aria-hidden>
                      ⚙️
                    </div>
                    Config.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
