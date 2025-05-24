import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/components/Product";

export const products = [
  {
    id: 1,
    imageUrl: "/products/01.png",
    title: "Lọc dầu động cơ cao cấp dành cho dòng xe SUV và bán tải hạng nặng",
  },
  {
    id: 2,
    imageUrl: "/products/02.png",
    title: "Bugi đánh lửa Iridium – Phù hợp nhiều dòng xe hiện đại",
  },
  {
    id: 3,
    imageUrl: "/products/03.png",
    title: "Má phanh trước chất lượng cao – Honda Civic, Accord",
  },
  {
    id: 4,
    imageUrl: "/products/04.png",
    title: "Lọc gió điều hòa cabin – Toyota Fortuner, Innova, Hilux",
  },
  {
    id: 5,
    imageUrl: "/products/05.png",
    title: "Bộ lọc nhiên liệu chính hãng dành cho các dòng xe diesel",
  },
  {
    id: 6,
    imageUrl: "/products/06.png",
    title: "Dây curoa cam nhập khẩu – Bền bỉ và chịu nhiệt tốt",
  },
  {
    id: 7,
    imageUrl: "/products/07.png",
    title: "Đèn pha LED siêu sáng – Lắp cho nhiều dòng xe phổ thông",
  },
  {
    id: 8,
    imageUrl: "/products/08.png",
    title: "Bộ phận giảm xóc sau – Phù hợp xe bán tải, off-road",
  },
  {
    id: 9,
    imageUrl: "/products/14.png",
    title: "Bộ cảm biến oxy – Hỗ trợ tiết kiệm nhiên liệu hiệu quả",
  },
  {
    id: 10,
    imageUrl: "/products/10.png",
    title: "Gương chiếu hậu tích hợp đèn LED – Mẫu mới 2025",
  },
];

export const ProductsCarousel = () => {
  return (
    <Carousel opts={{ loop: true, dragFree: true }}>
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="basis-1/5">
            <Product imageUrl={product.imageUrl} title={product.title} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
