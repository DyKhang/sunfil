import { BreadCrumb } from "@/components/main/BreadCrumb";
import { Hero } from "@/components/main/Hero";
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
      </Wrapper>
    </main>
  );
};
