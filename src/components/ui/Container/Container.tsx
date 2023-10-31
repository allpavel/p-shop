import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto w-full max-w-7xl">{children}</div>;
}
