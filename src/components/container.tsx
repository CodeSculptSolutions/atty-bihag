import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  as?: "div" | "section" | "footer" | "header" | "main" | "article";
  className?: string;
  id?: string;
}

export function Container({ children, as: Tag = "div", className = "", id }: ContainerProps) {
  return (
    <Tag id={id} className={`px-6 md:px-10 lg:px-24 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
