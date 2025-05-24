import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="py-[36px] bg-[#E6F1FF] mt-[40px]">
        <Wrapper className="flex items-center">
          <Image alt="map" src="/icons/map.svg" width={48} height={48} />
          <span className="text-[24px] font-[500] ml-[16px]">
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
      </div>
    </footer>
  );
};
