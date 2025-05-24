import Image from "next/image";

type Props = {
  imageUrl: string;
  title: string;
  desc: string;
};

export const Service: React.FC<Props> = ({ desc, imageUrl, title }) => {
  return (
    <div className="py-[26px] px-[11px] rounded-[12px] shadow-service flex gap-[16px] items-center bg-white">
      <Image alt="service" src={imageUrl} width={42} height={42} />

      <div className="flex flex-col gap-[8px]">
        <span className="font-bold">{title}</span>
        <span className="text-[#637381] text-[14px] font-[500]">{desc}</span>
      </div>
    </div>
  );
};
