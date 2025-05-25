import { Tag } from "@/components/main/Tag";
import React, { Suspense } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/components/main/ProductsCarousel";
import { Product } from "@/components/Product";

const tags = [
  { label: "Liên quan", value: "relevance" },
  { label: "Bán chạy", value: "best_selling" },
  { label: "Mới nhất", value: "newest" },
  { label: "Nổi bật", value: "featured" },
];

export const ProductList = () => {
  return (
    <Suspense>
      <section className="pl-[20px] flex-1">
        <div className="flex items-center">
          <h2 className="text-[20px] font-semibold">Danh sách sản phẩm</h2>

          <span className="ml-auto font-[500]">Sắp xếp theo</span>

          <div className="flex items-center gap-[12px] ml-[24px]">
            {tags.map((tag) => (
              <Tag key={tag.value} label={tag.label} value={tag.value} />
            ))}
          </div>

          <div className="flex items-center ml-[24px] gap-[4px]">
            <span className="text-[14px] font-[500]">Giá:</span>
            <Select>
              <SelectTrigger className="w-[132px]">
                <SelectValue placeholder="Thấp → Cao" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem defaultChecked value="asc">
                  Thấp → Cao
                </SelectItem>
                <SelectItem value="desc">Cao → Thấp</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[20px] mt-[28px]">
          {products.map((product) => (
            <Product
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
            />
          ))}
        </div>
      </section>
    </Suspense>
  );
};
