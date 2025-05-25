import { Col } from "@/components/footer/Col";
import { Info } from "@/components/footer/Info";
import { Wrapper } from "@/components/Wrapper";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    title: "Tax code",
    value: "0305094228",
  },
  {
    title: "Address",
    value: "13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.",
  },
  {
    title: "Phone number",
    value: "0283 760 7607",
  },
  {
    title: "Opening hour",
    value: "09:00 - 22:00 from Mon - Fri",
  },
];

const cols = [
  {
    title: "Sitemap",
    values: ["About", "Article", "Cart", "Contact"],
  },
  {
    title: "Legal",
    values: ["Privacy Policy", "Cookie policy", "Delivery policy", "FAQs"],
  },
];

export const Footer = () => {
  return (
    <footer className="relative">
      <section className="py-[36px] bg-[#E6F1FF] mt-[40px]">
        <Wrapper className="flex items-center">
          <Image alt="map" src="/icons/map.svg" width={48} height={48} />
          <span className="text-[22px] font-[500] ml-[16px]">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </span>

          <Link
            href="#!"
            className="flex items-center py-[10px] gap-[12px] ml-auto px-[20px] bg-white text-[18px] font-semibold text-[#025FCA] rounded-full"
          >
            <span>Xem ngay</span>
            <Image
              alt="arrow"
              src="/icons/view-more.svg"
              width={21}
              height={16}
            />
          </Link>
        </Wrapper>
      </section>

      <section className="bg-white py-[96px]">
        <Wrapper className="flex justify-between items-start">
          <div>
            <h2 className="text-[#013065] text-[20px] font-semibold uppercase">
              Viet Hung Auto Production Trading Joint Stock Company
            </h2>

            <div className="mt-[24px] flex flex-col gap-1">
              {contacts.map((contact) => (
                <Info
                  title={contact.title}
                  value={contact.value}
                  key={contact.title}
                />
              ))}
            </div>

            <Image
              alt="footer-tag"
              src="/footer-tag.png"
              width={200}
              height={75}
              className="mt-[32px]"
            />
          </div>

          {cols.map((col) => (
            <Col key={col.title} title={col.title} values={col.values} />
          ))}

          <div>
            <h2 className="text-[#013065] text-[24px] font-semibold">
              Download App
            </h2>

            <Link
              href="#!"
              className="bg-[#1C252E] text-white py-[11px] px-[20px] rounded-[12px] flex gap-[17px] mt-[32px]"
            >
              <Image
                alt="play-store"
                src="/icons/play-store.svg"
                width={24}
                height={29}
              />

              <div className="flex flex-col">
                <span className="text-[14px]">Get It On</span>
                <span className="font-semibold">Google Play Store</span>
              </div>
            </Link>

            <Link
              href="#!"
              className="bg-[#0373F3] text-white py-[11px] px-[20px] rounded-[12px] flex gap-[17px] mt-[12px]"
            >
              <Image
                alt="play-store"
                src="/icons/apple.svg"
                width={36}
                height={36}
              />

              <div className="flex flex-col">
                <span className="text-[14px]">Download from</span>
                <span className="font-semibold">Apple App Store</span>
              </div>
            </Link>

            <div className="mt-[32px] flex justify-end">
              <div className="font-[500] flex items-center gap-[8px] cursor-pointer">
                <Image alt="vn" src="/icons/vn.svg" width={36} height={36} />
                <span>VI</span>
                <ChevronDown size={20} />
              </div>
            </div>

            <a
              href="#"
              className="size-[40px] border border-[#013065] right-[20px] bottom-[58px] rounded-full flex items-center justify-center cursor-pointer absolute"
            >
              <ChevronUp size={20} className="text-[#013065]" />
            </a>
          </div>
        </Wrapper>
      </section>
    </footer>
  );
};
