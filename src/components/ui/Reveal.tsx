import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import "./Reveal.css";

type RevealDirection = "up" | "down" | "left" | "right" | "fade";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  distance?: number;
  duration?: number;
  threshold?: number;
  style?: CSSProperties;
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  direction = "up",
  delay = 0,
  distance = 16,
  duration = 520,
  threshold = 0.18,
  style,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>({ threshold });

  const axis = direction === "left" || direction === "right" ? "X" : "Y";
  const sign = direction === "down" || direction === "right" ? -1 : 1;
  const initialTransform =
    direction === "fade" ? "none" : `translate${axis}(${sign * distance}px)`;

  const cssVars = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
    "--reveal-initial-transform": initialTransform,
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "reveal--in" : ""} ${className}`.trim()}
      style={{ ...cssVars, ...style }}
    >
      {children}
    </Tag>
  );
}
