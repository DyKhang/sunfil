import Image from "next/image";

type Props = {
  imageUrl: string;
  title: string;
};

export const ContentItem: React.FC<Props> = ({ imageUrl, title }) => {
  return (
    <div className="py-[12px] px-[16px] font-semibold flex items-center gap-[16px] bg-white rounded-[12px] cursor-pointer">
      <Image alt="cate-item" src={imageUrl} width={70} height={70} />
      <span>{title}</span>
    </div>
  );
};
