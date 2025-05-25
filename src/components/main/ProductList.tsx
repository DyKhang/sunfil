import { Tag } from "@/components/main/Tag";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/components/main/ProductsCarousel";
import { Product } from "@/components/Product";
import { useFilterContext } from "@/hooks/useFilterContext";

const tags = [
  { label: "Liên quan", value: "relevance" },
  { label: "Bán chạy", value: "best_selling" },
  { label: "Mới nhất", value: "newest" },
  { label: "Nổi bật", value: "featured" },
];

export const ProductList = () => {
  const { filter, setFilter } = useFilterContext();

  let filteredProducts = [...products];

  //category
  if (filter.category) {
    filteredProducts = filteredProducts.filter((product) =>
      filter.category?.includes(product.category)
    );
  }

  //brand
  if (filter.brand) {
    filteredProducts = filteredProducts.filter((product) =>
      filter.brand?.includes(product.brand)
    );
  }

  //year
  if (filter.year) {
    filteredProducts = filteredProducts.filter((product) =>
      filter.year?.includes(product.year)
    );
  }

  //origin
  if (filter.origin) {
    filteredProducts = filteredProducts.filter((product) =>
      filter.origin?.includes(product.origin)
    );
  }

  //price-range
  if (filter.range) {
    const min = parseInt(filter.range.split("-")[0]);
    const max =
      filter.range.split("-")[1] === "Infinity"
        ? Infinity
        : parseInt(filter.range.split("-")[1]);

    filteredProducts = filteredProducts.filter(
      (product) => product.price >= min && product.price <= max
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) => product.type === filter.type
  );

  filteredProducts.sort((a, b) => {
    if (filter.order === "asc") {
      return a.price - b.price;
    } else return b.price - a.price;
  });

  return (
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
          <Select
            onValueChange={(value: "asc" | "desc") =>
              setFilter({ ...filter, order: value })
            }
          >
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
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};
