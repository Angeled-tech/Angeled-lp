import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/logo/angeled-logo-icon.svg";
import { ctaPrimaryAction } from "../../utils/cta";
import { Button } from "../ui/Button";
import { Container } from "./Container";
import "./Header.css";

const navItems = [
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Perguntas frequentes", href: "/#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <Container>
        <div className="site-header__inner">
          <Link className="site-header__logo" to="/" aria-label="Angeled - inicio">
            <img className="site-header__logo-icon" src={logoIcon} alt="" width={36} height={36} decoding="async" />
            <span className="site-header__logo-name">Angeled</span>
          </Link>

          <nav className="site-header__nav" aria-label="Navegacao principal">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="site-header__cta" onClick={ctaPrimaryAction}>
            Avise-me quando estiver disponível
          </Button>
        </div>
      </Container>
    </header>
  );
}
