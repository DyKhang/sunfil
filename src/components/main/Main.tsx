import { BreadCrumb } from "@/components/main/BreadCrumb";
import { Hero } from "@/components/main/Hero";
import { ProductsFilter } from "@/components/main/ProductsFilter";
import { Services } from "@/components/main/Services";
import { Wrapper } from "@/components/Wrapper";

export const Main = () => {
  return (
    <main>
      <Wrapper>
        <div className="mt-[24px]">
          <BreadCrumb />
        </div>

        <div className="mt-[32px]">
          <Hero />
        </div>

        <div className="mt-[32px]">
          <ProductsFilter />
        </div>

        <div className="mt-[72px]">
          <Services />
        </div>
      </Wrapper>
    </main>
  );
};
