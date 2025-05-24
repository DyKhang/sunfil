"use client";
import Image from "next/image";

import { ProductsCarousel } from "@/components/main/ProductsCarousel";

export const Hero = () => {
  return (
    <section className="rounded-[12px] overflow-hidden">
      <div className="relative h-[500px]">
        <Image alt="hero" src="/hero.png" fill className="object-cover" />
      </div>

      <div className="bg-[#025FCA] p-[48px]">
        <ProductsCarousel />
      </div>
    </section>
  );
};
