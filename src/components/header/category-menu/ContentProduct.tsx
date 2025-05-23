import Image from "next/image";

type Props = {
  imageUrl: string;
  title: string;
};

export const ContentProduct: React.FC<Props> = ({ imageUrl, title }) => {
  return (
    <div className="bg-white rounded-[8px] shadow-card cursor-pointer">
      <div className="p-[8px]">
        <Image
          className="rounded-[8px]"
          alt="cate-product"
          src={imageUrl}
          width={184}
          height={184}
        />
      </div>

      <div className="px-[12px] pt-[16px] pb-[20px]">
        <p className="font-semibold card-title-clip">{title}</p>

        <p className="text-[20px] font-semibold text-[#B71D18] mt-[16px]">
          299,000 đ
        </p>

        <div className="flex items-center gap-[10px] mt-[8px]">
          <span className="text-[14px] text-[#919EAB] line-through">
            329,000 đ
          </span>
          <span className="text-[12px] font-[500] text-[#B71D18]">-10%</span>
        </div>
      </div>
    </div>
  );
};
