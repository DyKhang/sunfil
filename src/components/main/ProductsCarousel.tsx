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
    title: "Lọc dầu động cơ Asakashi hiệu suất cao cho xe SUV và bán tải",
    category: "bo-loc-dau",
    brand: "Asakashi",
    origin: "Nhật Bản",
    price: 150000,
    year: "2021",
    type: "relevance",
  },
  {
    id: 2,
    imageUrl: "/products/02.png",
    title:
      "Bugi đánh lửa Bosch Iridium tăng cường tuổi thọ và hiệu suất động cơ",
    category: "chua-phan-loai",
    brand: "Bosch",
    origin: "Đức",
    price: 80000,
    year: "2020",
    type: "relevance",
  },
  {
    id: 3,
    imageUrl: "/products/03.png",
    title:
      "Má phanh trước HuynDai chính hãng đảm bảo an toàn tuyệt đối khi lái xe",
    category: "chua-phan-loai",
    brand: "HuynDai",
    origin: "Trung Quốc",
    price: 250000,
    year: "2019",
    type: "relevance",
  },
  {
    id: 4,
    imageUrl: "/products/04.png",
    title: "Lọc gió động cơ Bosch cho Toyota giúp không khí trong lành hơn",
    category: "loc-gio-dong-co-air-filter",
    brand: "Bosch",
    origin: "Đức",
    price: 120000,
    year: "2018",
    type: "relevance",
  },
  {
    id: 5,
    imageUrl: "/products/05.png",
    title:
      "Lọc nhiên liệu Asakashi cho xe diesel bảo vệ hệ thống phun nhiên liệu",
    category: "loc-nhien-lieu-fuel-filter",
    brand: "Asakashi",
    origin: "Nhật Bản",
    price: 180000,
    year: "2021",
    type: "relevance",
  },
  {
    id: 6,
    imageUrl: "/products/06.png",
    title: "Dây curoa Bosch chịu nhiệt độ cao, độ bền vượt trội theo thời gian",
    category: "khac",
    brand: "Bosch",
    origin: "Đức",
    price: 95000,
    year: "2020",
    type: "relevance",
  },
  {
    id: 7,
    imageUrl: "/products/07.png",
    title:
      "Đèn pha LED Asakashi siêu sáng tăng cường tầm nhìn khi lái xe ban đêm",
    category: "khac",
    brand: "Asakashi",
    origin: "Nhật Bản",
    price: 350000,
    year: "2019",
    type: "relevance",
  },
  {
    id: 8,
    imageUrl: "/products/08.png",
    title: "Giảm xóc sau HuynDai êm ái mang lại trải nghiệm lái xe thoải mái",
    category: "khac",
    brand: "HuynDai",
    origin: "Trung Quốc",
    price: 420000,
    year: "2018",
    type: "relevance",
  },
  {
    id: 9,
    imageUrl: "/products/10.png",
    title:
      "Cảm biến oxy Bosch tiết kiệm nhiên liệu, bảo vệ môi trường hiệu quả",
    category: "chua-phan-loai",
    brand: "Bosch",
    origin: "Đức",
    price: 110000,
    year: "2021",
    type: "relevance",
  },
  {
    id: 10,
    imageUrl: "/products/11.png",
    title:
      "Gương chiếu hậu LED Asakashi tích hợp đèn báo rẽ hiện đại và an toàn",
    category: "khac",
    brand: "Asakashi",
    origin: "Nhật Bản",
    price: 280000,
    year: "2020",
    type: "best_selling",
  },
  {
    id: 11,
    imageUrl: "/products/12.png",
    title: "Ắc quy khô HuynDai dung lượng lớn cho khởi động mạnh mẽ và bền bỉ",
    category: "khac",
    brand: "HuynDai",
    origin: "Trung Quốc",
    price: 190000,
    year: "2019",
    type: "newest",
  },
  {
    id: 12,
    imageUrl: "/products/13.png",
    title:
      "Nước làm mát Bosch chính hãng bảo vệ động cơ khỏi quá nhiệt và ăn mòn",
    category: "khac",
    brand: "Bosch",
    origin: "Đức",
    price: 60000,
    year: "2018",
    type: "featured",
  },
  {
    id: 13,
    imageUrl: "/products/14.png",
    title:
      "Lốp xe địa hình Asakashi chuyên dụng cho mọi loại địa hình khắc nghiệt",
    category: "khac",
    brand: "Asakashi",
    origin: "Nhật Bản",
    price: 1200000,
    year: "2021",
    type: "best_selling",
  },
  {
    id: 14,
    imageUrl: "/products/01.png",
    title:
      "Lọc dầu động cơ Bosch tiêu chuẩn cho các dòng xe du lịch thông dụng",
    category: "bo-loc-dau",
    brand: "Bosch",
    origin: "Đức",
    price: 120000,
    year: "2020",
    type: "newest",
  },
  {
    id: 15,
    imageUrl: "/products/02.png",
    title: "Bugi đánh lửa HuynDai thông thường giá tốt cho xe đời cũ",
    category: "chua-phan-loai",
    brand: "HuynDai",
    origin: "Trung Quốc",
    price: 50000,
    year: "2019",
    type: "featured",
  },
  {
    id: 16,
    imageUrl: "/products/03.png",
    title:
      "Má phanh sau Asakashi chất lượng ổn định cho hiệu suất phanh an toàn",
    category: "chua-phan-loai",
    brand: "Asakashi",
    origin: "Nhật Bản",
    price: 200000,
    year: "2018",
    type: "best_selling",
  },
  {
    id: 17,
    imageUrl: "/products/04.png",
    title:
      "Lọc gió động cơ HuynDai phổ thông giúp bảo vệ động cơ và tiết kiệm nhiên liệu",
    category: "loc-gio-dong-co-air-filter",
    brand: "HuynDai",
    origin: "Trung Quốc",
    price: 90000,
    year: "2021",
    type: "newest",
  },
  {
    id: 18,
    imageUrl: "/products/05.png",
    title: "Lọc nhiên liệu Bosch cho xe động cơ xăng loại bỏ cặn bẩn hiệu quả",
    category: "loc-nhien-lieu-fuel-filter",
    brand: "Bosch",
    origin: "Đức",
    price: 150000,
    year: "2020",
    type: "featured",
  },
  {
    id: 19,
    imageUrl: "/products/06.png",
    title:
      "Dây curoa Asakashi đa năng chịu lực tốt cho hệ thống truyền động êm ái",
    category: "khac",
    brand: "Asakashi",
    origin: "Nhật Bản",
    price: 70000,
    year: "2019",
    type: "best_selling",
  },
  {
    id: 20,
    imageUrl: "/products/07.png",
    title:
      "Đèn xi nhan LED HuynDai tăng cường khả năng nhận diện và an toàn giao thông",
    category: "khac",
    brand: "HuynDai",
    origin: "Trung Quốc",
    price: 180000,
    year: "2018",
    type: "newest",
  },
];

export const ProductsCarousel = () => {
  return (
    <Carousel opts={{ loop: true, dragFree: true }}>
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="basis-1/5">
            <Product
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
