import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";

export const Voucher = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(270deg, #0D57C6 0%, #37CFFF 50.39%, #0F5ED6 100%)",
      }}
      className="py-[4px]"
    >
      <Wrapper className="flex items-center">
        <Image src="/icons/voucher.svg" alt="voucher" width={14} height={14} />
        <p className="text-[12px] ml-[8px] translate-y-[2.6px] flex item gap-[4px] text-white">
          Nhập mã
          <span className="text-[14px] text-[#FACA4A] -translate-y-[2px] font-[500]">
            NEWBIE
          </span>
          giảm ngay 10% cho lần đầu mua hàng.
        </p>

        <div className="ml-auto flex items-center gap-[8px]">
          <Image alt="phone" src="/icons/phone.svg" width={12} height={12} />
          <p className="text-[12px] text-white flex items-center gap-[4px] translate-y-[1.8px]">
            Hotline:
            <span className="text-[14px] text-[#FACA4A] font-[500]">
              0283 760 7607
            </span>
          </p>
        </div>
        <div className="flex items-center gap-[8px] ml-[24px]">
          <Image alt="phone" src="/icons/dowload.svg" width={12} height={12} />
          <p className="text-[12px] text-white flex items-center gap-[4px] translate-y-[1.5px]">
            Tải ứng dụng
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
