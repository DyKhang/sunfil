import { Menu } from "@/components/header/category-menu/Menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigates = ["Về chúng tôi", "Bài viết", "Catalog", "Liên hệ"];

const features = [
  {
    title: "Hỗ trợ 24/7",
    imageUrl: "/icons/clock.svg",
  },
  {
    title: "Miễn Phí Vận Chuyển",
    imageUrl: "/icons/ship.svg",
  },
  {
    title: "Giao Hàng Nhanh 2h",
    imageUrl: "/icons/van.svg",
  },
  {
    title: "30 Ngày Đổi Trả",
    imageUrl: "/icons/back.svg",
  },
];

export const Bottom = () => {
  return (
    <div className="flex items-center">
      <div className="group">
        <button className="bg-[#0155C6] font-bold text-white flex items-center gap-[8px] py-[12px] px-[16px] rounded-[8px]">
          <Image alt="list" src="/icons/list.svg" width={18} height={18} />
          <span className="translate-y-[1.5px]">Danh mục sản phẩm</span>
          <Image
            alt="list"
            src="/icons/arrow-down.svg"
            width={16}
            height={16}
            className="transition-all duration-300 group-hover:-rotate-180"
          />
        </button>
        <Menu />
      </div>
      <div className="flex items-center gap-[20px] ml-[24px]">
        {navigates.map((navigate) => (
          <Link key={navigate} href="#!" className="font-[500]">
            {navigate}
          </Link>
        ))}
      </div>

      <div className="flex items-center ml-auto gap-[20px]">
        {features.map((feature) => (
          <Link
            href="#!"
            key={feature.title}
            className="flex items-center gap-[8px] font-semibold"
          >
            <Image
              alt="benefit"
              src={feature.imageUrl}
              width={24}
              height={24}
            />
            <span>{feature.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
