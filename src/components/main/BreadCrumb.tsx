import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BreadCrumb = () => {
  return (
    <div className="flex items-center gap-[16px]">
      <Link href="#!" className="text-[14px] text-[#919EAB]">
        Trang chủ
      </Link>
      <Image
        alt="arrow-next"
        src="/icons/arrow-next-breadcrumb.svg"
        width={4}
        height={4}
      />
      <Link href="#!" className="text-[#024897] text-[14px] font-semibold">
        Sản phẩm
      </Link>
    </div>
  );
};
