import { ReactNode } from "react";

type PageHolderProps = {
  children: ReactNode;
};
export const PageHolder = ({ children }: PageHolderProps) => {
  return <div className="space-y-4">{children}</div>;
};
