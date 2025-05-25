import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
  title: string;
};

export const Product: React.FC<Props> = ({ imageUrl, title }) => {
  return (
    <div className="bg-white rounded-[8px] shadow-card hover:shadow-card-hover">
      <Link href="#!" className="p-[8px] block">
        <Image
          className="rounded-[8px] object-cover"
          alt="cate-product"
          src={imageUrl}
          width={237}
          height={237}
        />
      </Link>

      <div className="px-[12px] pt-[16px] pb-[20px]">
        <Image
          alt="deal"
          src="/icons/deal.svg"
          width={124}
          height={25}
          className="mb-[16px]"
        />
        <Link href="#!" className="font-semibold card-title-clip">
          {title}
        </Link>

        <p className="text-[20px] font-semibold text-[#B71D18] mt-[16px]">
          299,000 đ
        </p>

        <div className="flex items-center gap-[10px] mt-[8px]">
          <span className="text-[14px] text-[#919EAB] line-through">
            329,000 đ
          </span>
          <span className="text-[12px] font-[500] text-[#B71D18]">-10%</span>
        </div>

        <button className="h-[40px] mt-[8px] w-full text-[#025FCA] bg-[#E6F1FF] flex items-center justify-center round-[8px] text-[14px] font-bold">
          Mua ngay
        </button>
      </div>
    </div>
  );
};
