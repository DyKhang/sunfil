import Image from "next/image";

export const CallToActions = () => {
  return (
    <div className="flex items-center gap-[28px]">
      <div className="font-[500] flex items-center gap-[8px] cursor-pointer">
        <Image alt="vn" src="/icons/vn.svg" width={36} height={36} />
        <span>VI</span>
      </div>
      <div className="font-[500] flex items-center gap-[8px] cursor-pointer relative hover:bg-[#E6F1FF] py-[7px] px-[12px] rounded-full transition-colors duration-200">
        <Image alt="cart" src="/icons/cart.svg" width={28} height={28} />
        <span>Giỏ hàng</span>
        <div className="bg-[#FF5630] left-[18px] top-[-15px] absolute size-[24px] flex items-center justify-center text-white text-[12px] font-[500] rounded-full">
          <span className="translate-y-[1.5px]">12</span>
        </div>
      </div>
      <div className="font-[500] flex items-center gap-[8px] cursor-pointer hover:bg-[#E6F1FF] py-[7px] px-[12px] rounded-full transition-colors duration-200">
        <Image alt="vn" src="/icons/user.svg" width={30} height={30} />
        <span>Tài khoản</span>
      </div>
    </div>
  );
};
