import { FilterContext } from "@/components/main/ProductsFilter";
import { useContext } from "react";

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error("You cant use this context outside Provider!");
  return context;
};
