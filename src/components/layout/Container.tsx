import type { HTMLAttributes, ReactNode } from "react";
import "./Container.css";

type ContainerSize = "sm" | "md" | "lg";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: ContainerSize;
};

export function Container({
  children,
  size = "lg",
  className = "",
  ...props
}: ContainerProps) {
  const classes = ["container", `container--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
