"use client";
import { Filter } from "@/components/main/Filter";
import { ProductList } from "@/components/main/ProductList";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type FilterContextType = {
  filter: {
    category?: string[] | null;
    range?: string | null;
    brand?: string[] | null;
    year?: string[] | null;
    origin?: string[] | null;
    type?: string | null;
    order: "asc" | "desc";
  };
  setFilter: Dispatch<
    SetStateAction<{
      category?: null | string[];
      range?: null | string;
      brand?: string[] | null;
      year?: string[] | null;
      origin?: string[] | null;
      type?: string | null;
      order: "asc" | "desc";
    }>
  >;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export const ProductsFilter = () => {
  const [filter, setFilter] = useState<{
    category?: null | string[];
    range?: null | string;
    brand?: string[] | null;
    year?: string[] | null;
    origin?: string[] | null;
    type?: string | null;
    order: "asc" | "desc";
  }>({
    category: null,
    range: null,
    brand: null,
    origin: null,
    year: null,
    type: "relevance",
    order: "asc",
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <section className="flex">
        <Filter />
        <ProductList />
      </section>
    </FilterContext.Provider>
  );
};
