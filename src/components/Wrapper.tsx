import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Wrapper: React.FC<Props> = ({ children, className }) => {
  return <div className={cn("w-[90%] mx-auto", className)}>{children}</div>;
};
