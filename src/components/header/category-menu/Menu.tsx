"use client";

import { Content } from "@/components/header/category-menu/Content";
import { Item } from "@/components/header/category-menu/Item";
import { useState } from "react";

const categories = [
  { id: 1, imageUrl: "/products/01.png", title: "Bộ Lọc Dầu" },
  { id: 2, imageUrl: "/products/02.png", title: "Bộ Lọc Không Khí" },
  { id: 3, imageUrl: "/products/03.png", title: "Bộ Lọc Nhiên Liệu" },
  { id: 4, imageUrl: "/products/04.png", title: "Bộ Lọc Trong Cabin" },
  { id: 5, imageUrl: "/products/05.png", title: "Bộ Lọc Không Khí" },
  { id: 6, imageUrl: "/products/06.png", title: "Bộ Lọc Trong Cabin" },
  { id: 7, imageUrl: "/products/07.png", title: "Bộ Lọc Nhiên Liệu" },
  { id: 8, imageUrl: "/products/08.png", title: "Bộ Lọc Không Khí" },
];

const contents = [
  {
    products: [
      { id: 1, imageUrl: "/products/01.png", title: "Bộ Lọc Dầu" },
      { id: 2, imageUrl: "/products/02.png", title: "Bộ Lọc Không Khí" },
      { id: 3, imageUrl: "/products/03.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 4, imageUrl: "/products/04.png", title: "Bộ Lọc Trong Cabin" },
      { id: 5, imageUrl: "/products/05.png", title: "Bộ Lọc Không Khí" },
      { id: 6, imageUrl: "/products/06.png", title: "Bộ Lọc Trong Cabin" },
    ],
  },
  {
    products: [
      { id: 7, imageUrl: "/products/02.png", title: "Bộ Lọc Không Khí" },
      { id: 8, imageUrl: "/products/03.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 9, imageUrl: "/products/04.png", title: "Bộ Lọc Trong Cabin" },
      { id: 10, imageUrl: "/products/05.png", title: "Bộ Lọc Không Khí" },
      { id: 11, imageUrl: "/products/06.png", title: "Bộ Lọc Trong Cabin" },
      { id: 12, imageUrl: "/products/07.png", title: "Bộ Lọc Nhiên Liệu" },
    ],
  },
  {
    products: [
      { id: 13, imageUrl: "/products/03.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 14, imageUrl: "/products/04.png", title: "Bộ Lọc Trong Cabin" },
      { id: 15, imageUrl: "/products/05.png", title: "Bộ Lọc Không Khí" },
      { id: 16, imageUrl: "/products/06.png", title: "Bộ Lọc Trong Cabin" },
      { id: 17, imageUrl: "/products/07.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 18, imageUrl: "/products/08.png", title: "Bộ Lọc Không Khí" },
    ],
  },
  {
    products: [
      { id: 19, imageUrl: "/products/01.png", title: "Bộ Lọc Dầu" },
      { id: 20, imageUrl: "/products/02.png", title: "Bộ Lọc Không Khí" },
      { id: 21, imageUrl: "/products/03.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 22, imageUrl: "/products/04.png", title: "Bộ Lọc Trong Cabin" },
      { id: 23, imageUrl: "/products/05.png", title: "Bộ Lọc Không Khí" },
      { id: 24, imageUrl: "/products/06.png", title: "Bộ Lọc Trong Cabin" },
    ],
  },
  {
    products: [
      { id: 25, imageUrl: "/products/07.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 26, imageUrl: "/products/08.png", title: "Bộ Lọc Không Khí" },
      { id: 27, imageUrl: "/products/01.png", title: "Bộ Lọc Dầu" },
      { id: 28, imageUrl: "/products/02.png", title: "Bộ Lọc Không Khí" },
      { id: 29, imageUrl: "/products/03.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 30, imageUrl: "/products/04.png", title: "Bộ Lọc Trong Cabin" },
    ],
  },
  {
    products: [
      { id: 31, imageUrl: "/products/05.png", title: "Bộ Lọc Không Khí" },
      { id: 32, imageUrl: "/products/06.png", title: "Bộ Lọc Trong Cabin" },
      { id: 33, imageUrl: "/products/07.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 34, imageUrl: "/products/08.png", title: "Bộ Lọc Không Khí" },
      { id: 35, imageUrl: "/products/01.png", title: "Bộ Lọc Dầu" },
      { id: 36, imageUrl: "/products/02.png", title: "Bộ Lọc Không Khí" },
    ],
  },
  {
    products: [
      { id: 37, imageUrl: "/products/03.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 38, imageUrl: "/products/04.png", title: "Bộ Lọc Trong Cabin" },
      { id: 39, imageUrl: "/products/05.png", title: "Bộ Lọc Không Khí" },
      { id: 40, imageUrl: "/products/06.png", title: "Bộ Lọc Trong Cabin" },
      { id: 41, imageUrl: "/products/07.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 42, imageUrl: "/products/08.png", title: "Bộ Lọc Không Khí" },
    ],
  },
  {
    products: [
      { id: 43, imageUrl: "/products/01.png", title: "Bộ Lọc Dầu" },
      { id: 44, imageUrl: "/products/02.png", title: "Bộ Lọc Không Khí" },
      { id: 45, imageUrl: "/products/03.png", title: "Bộ Lọc Nhiên Liệu" },
      { id: 46, imageUrl: "/products/04.png", title: "Bộ Lọc Trong Cabin" },
      { id: 47, imageUrl: "/products/05.png", title: "Bộ Lọc Không Khí" },
      { id: 48, imageUrl: "/products/06.png", title: "Bộ Lọc Trong Cabin" },
    ],
  },
];

export const Menu = () => {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <div className="pt-[16px] z-[1] absolute transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 top-[100%]">
      <section className="bg-[#f0f3f5] flex rounded-b-[12px] overflow-hidden">
        <div className="w-[260px] bg-white pb-[54px]">
          {categories.map((cate, index) => (
            <Item
              key={cate.id}
              imageUrl={cate.imageUrl}
              title={cate.title}
              setActiveContent={setActiveContent}
              index={index}
              activeContent={activeContent}
            />
          ))}
        </div>

        <Content items={contents[activeContent].products} />
      </section>
    </div>
  );
};
