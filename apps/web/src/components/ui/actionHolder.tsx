import { ReactNode } from "react";

type ActionHolderProps = {
  children: ReactNode;
};
export const ActionHolder = ({ children }: ActionHolderProps) => {
  return <div className="flex justify-stretch space-x-4 action-holder">{children}</div>;
};
