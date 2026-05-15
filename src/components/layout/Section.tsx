import type { ReactNode } from "react";
import { Container } from "./Container";
import "./Section.css";

type SectionVariant = "default" | "alt" | "wine";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  variant?: SectionVariant;
  className?: string;
  containerSize?: "sm" | "md" | "lg";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  variant = "default",
  className = "",
  containerSize = "lg",
}: SectionProps) {
  const classes = ["section", `section--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} id={id}>
      <Container size={containerSize}>
        {eyebrow || title || description ? (
          <header className="section__header">
            {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
            {description ? <p>{description}</p> : null}
          </header>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
