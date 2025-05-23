import { ContentItem } from "@/components/header/category-menu/ContentItem";
import { ContentProduct } from "@/components/header/category-menu/ContentProduct";
import Image from "next/image";

type Props = {
  items: {
    imageUrl: string;
    id: number;
    title: string;
  }[];
};

const products = [
  {
    id: 1,
    imageUrl: "/products/05.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
  },
  {
    id: 2,
    imageUrl: "/products/11.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
  },
  {
    id: 3,
    imageUrl: "/products/12.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
  },
  {
    id: 4,
    imageUrl: "/products/13.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
  },
  {
    id: 5,
    imageUrl: "/products/06.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
  },
];

export const Content: React.FC<Props> = ({ items }) => {
  return (
    <div className="p-[24px] flex-1">
      <div className="grid grid-cols-3 gap-[16px]">
        {items.map((item) => (
          <ContentItem
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </div>

      <div className="flex items-center justify-between mt-[52px]">
        <h2 className="text-[24px] font-semibold">Sản phẩm bán chạy</h2>

        <div className="flex items-center gap-[13px] font-semibold text-[#0373F3] cursor-pointer">
          <span>Xem tất cả</span>
          <Image
            alt="next-arrow"
            src="/icons/next-arrow.svg"
            width={10}
            height={10}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 mt-[24px] gap-[16px]">
        {products.map((product) => (
          <ContentProduct
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};
