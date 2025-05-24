"use client";

import { ProductsCarousel } from "@/components/main/ProductsCarousel";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="rounded-[12px] overflow-hidden">
      <div className="relative h-[500px] burst-background">
        <div
          style={{
            background: "linear-gradient(135deg, #FFF5CC 0%, #FFD666 100%)",
          }}
          className="absolute top-[40px] left-0 py-[8px] px-[48px] text-[18px] font-bold text-[#7A0916] rounded-r-full"
        >
          MỚI CỰC HOT
        </div>

        <div className="flex flex-col left-[42px] top-[136px] absolute">
          <Image
            alt="hero"
            src="/hero-text.svg"
            width={650}
            height={80}
            className="-translate-x-[50px]"
          />

          <span className="text-[28px] text-[#FFD666] font-[500] mt-[20px]">
            Tích điểm ngay trên app <span className="font-[800]">SUNFIL1</span>
          </span>
          <span className="text-[28px] text-[#FFD666] font-[500]">
            *100K = 10 điểm
          </span>
        </div>

        <Image
          alt="hero-deco"
          src="/hero-deco.png"
          className="absolute right-0"
          width={700}
          height={315}
        />

        <Image
          alt="banner"
          src="/hero-banner.svg"
          width={577}
          height={456}
          className="absolute top-[48px] right-[85px]"
        />
      </div>

      <div className="bg-[#025FCA] p-[48px]">
        <ProductsCarousel />
      </div>
    </section>
  );
};
