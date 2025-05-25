import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxFilter } from "@/components/main/CheckboxFilter";
import { PriceRadio } from "@/components/main/PriceRadio";

const categories = [
  {
    label: "Lọc gió Động cơ - Air Filter",
    value: "loc-gio-dong-co-air-filter",
  },
  {
    label: "Lọc Nhiên Liệu - Fuel Filter",
    value: "loc-nhien-lieu-fuel-filter",
  },
  {
    label: "Bộ lọc dầu",
    value: "bo-loc-dau",
  },
  {
    label: "Chưa phân loại",
    value: "chua-phan-loai",
  },
  {
    label: "Khác",
    value: "khac",
  },
];

const priceRanges = [
  { label: "Dưới 100,000 đ", value: "0-100000" },
  {
    label: "100,000 đ – 300,000 đ",
    value: "100000-300000",
  },
  {
    label: "300,000 đ – 500,000 đ",
    value: "300000-500000",
  },
  {
    label: "Trên 500,000 đ",
    value: "500000-Infinity",
  },
];

const brands = ["Asakashi", "Bosch", "Huyndai"];
const yearsOfManufacture = ["2021", "2020", "2019", "2018"];
const origins = ["Đức", "Nhật Bản", "Trung Quốc"];

export const Filter = () => {
  return (
    <section className="w-[315px] bg-white rounded-[12px] overflow-hidden h-fit">
      <div className="pt-[24px] pl-[12px] pb-[16px] text-[20px] font-bold text-[#0373F3] flex items-center gap-[12px] border-b border-slate-200">
        <Image alt="filter" src="/icons/filter.svg" width={32} height={32} />
        <span>Bộ lọc</span>
      </div>
      <Accordion
        type="single"
        collapsible
        className="p-[12px] border-b border-slate-200"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Danh mục sản phẩm</AccordionTrigger>
          <AccordionContent className="mt-[18px] space-y-[14px]">
            {categories.map((cate) => (
              <CheckboxFilter
                key={cate.label}
                label={cate.label}
                value={cate.value}
                field="category"
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="p-[12px] border-b border-slate-200"
      >
        <AccordionItem value="item-2">
          <AccordionTrigger>Khoảng giá</AccordionTrigger>
          <AccordionContent className="mt-[16px] space-y-[8px]">
            {priceRanges.map((range) => (
              <PriceRadio
                key={range.value}
                title={range.label}
                value={range.value}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="p-[12px] border-b border-slate-200"
      >
        <AccordionItem value="item-3">
          <AccordionTrigger>Thương hiệu</AccordionTrigger>
          <AccordionContent className="mt-[18px] space-y-[14px]">
            {brands.map((brand) => (
              <CheckboxFilter
                key={brand}
                field="brand"
                label={brand}
                value={brand}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="p-[12px] border-b border-slate-200"
      >
        <AccordionItem value="item-4">
          <AccordionTrigger>Năm sản xuất</AccordionTrigger>
          <AccordionContent className="mt-[18px] space-y-[14px]">
            {yearsOfManufacture.map((year) => (
              <CheckboxFilter
                key={year}
                field="year"
                label={year}
                value={year}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="p-[12px]">
        <AccordionItem value="item-3">
          <AccordionTrigger>Xuất xứ</AccordionTrigger>
          <AccordionContent className="mt-[18px] space-y-[14px]">
            {origins.map((origin) => (
              <CheckboxFilter
                key={origin}
                label={origin}
                field="origin"
                value={origin}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
