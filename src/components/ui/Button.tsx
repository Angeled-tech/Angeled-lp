import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  iconLeft,
  iconRight,
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {iconLeft ? <span className="button__icon">{iconLeft}</span> : null}
      <span>{isLoading ? "Carregando..." : children}</span>
      {iconRight ? <span className="button__icon">{iconRight}</span> : null}
    </button>
  );
}
