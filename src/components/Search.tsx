import Image from "next/image";

export const Search = () => {
  return (
    <label className="flex items-center w-[47%] h-[64px] border-[2px] border-[#0373F3] rounded-full pr-[8px] py-[8px] pl-[20px]">
      <input
        type="text"
        placeholder="Tìm sản phẩm"
        className="flex-1 outline-none h-full placeholder:text-[#919EAB] text-[16px] text-[#1C252E] mr-[10px]"
      />
      <Image alt="camera" src="/icons/camera.svg" width={18} height={18} />
      <button className="bg-[#0373F3] h-full w-[76px] rounded-full flex items-center justify-center ml-[24px]">
        <Image alt="search" src="/icons/search.svg" width={28} height={28} />
      </button>
    </label>
  );
};
