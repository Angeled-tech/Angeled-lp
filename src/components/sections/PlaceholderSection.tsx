import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "../layout/Section";
import "./PlaceholderSection.css";

type PlaceholderSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  variant?: "default" | "alt" | "wine";
  children?: ReactNode;
};

export function PlaceholderSection({
  id,
  eyebrow,
  title,
  description,
  variant = "default",
  children,
}: PlaceholderSectionProps) {
  return (
    <Section
      className="placeholder-section"
      description={description}
      eyebrow={eyebrow}
      id={id}
      title={title}
      variant={variant}
    >
      <div className="placeholder-section__card">
        <span>Conteúdo em preparação</span>
        <ArrowRight aria-hidden size={18} />
      </div>
      {children}
    </Section>
  );
}
