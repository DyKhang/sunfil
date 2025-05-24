import { Service } from "@/components/main/Service";

const services = [
  {
    imageUrl: "/icons/free.svg",
    title: "Miễn phí vận chuyển",
    desc: "Với hoá đơn từ 1 triệu",
  },
  {
    imageUrl: "/icons/support.svg",
    title: "Hỗ trợ 24/7",
    desc: "Đội ngũ CSKH tận tình, sẵn sàng lắng nghe và phục vụ tận tâm",
  },
  {
    imageUrl: "/icons/fast.svg",
    title: "Giao hàng nhanh 2h",
    desc: "Trong vòng bán kính 10km nội thành TP HCM",
  },
  {
    imageUrl: "/icons/renew.svg",
    title: "30 ngày đổi trả",
    desc: "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
  },
];

export const Services = () => {
  return (
    <section className="grid grid-cols-4 gap-[32px]">
      {services.map((service) => (
        <Service
          key={service.title}
          desc={service.desc}
          imageUrl={service.imageUrl}
          title={service.title}
        />
      ))}
    </section>
  );
};
