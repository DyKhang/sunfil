import { Filter } from "@/components/main/Filter";
import { ProductList } from "@/components/main/ProductList";

export const ProductsFilter = () => {
  return (
    <section className="flex">
      <Filter />
      <ProductList />
    </section>
  );
};
