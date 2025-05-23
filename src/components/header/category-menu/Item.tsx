import clsx from "clsx";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = {
  imageUrl: string;
  title: string;
  index: number;
  setActiveContent: Dispatch<SetStateAction<number>>;
  activeContent: number;
};

export const Item: React.FC<Props> = ({
  imageUrl,
  title,
  setActiveContent,
  index,
  activeContent,
}) => {
  return (
    <div
      onMouseEnter={() => setActiveContent(index)}
      className={clsx(
        "font-[500] flex items-center gap-[12px] p-[16px] border-l-[3px] border-transparent cursor-pointer ",
        {
          "text-[#024897] border-[#0D57C6] bg-[#f0f3f5] font-semibold":
            activeContent === index,
        }
      )}
    >
      <Image alt="cate-item" src={imageUrl} width={40} height={40} />
      <span>{title}</span>
    </div>
  );
};
