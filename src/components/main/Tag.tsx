"use client";
import { useSetSearchParams } from "@/hooks/useSetSearchParams";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type Props = {
  label: string;
  value: string;
};

export const Tag: React.FC<Props> = ({ label, value }) => {
  const searchParams = useSearchParams();
  const [setSearchParams] = useSetSearchParams("tag");
  const tag = searchParams.get("tag") || "relevance";

  return (
    <div
      onClick={() => setSearchParams(value)}
      className={`py-[8px] cursor-pointer px-[16px] ${
        value === tag ? "border-[#0373F3] text-[#0373F3]" : "border-transparent"
      } rounded-[8px] border relative overflow-hidden text-[14px] font-bold bg-white`}
    >
      {label}
      {tag === value && (
        <>
          <div className="border-[12px] border-transparent border-t-[#0373F3] border-r-[#0373F3] absolute top-0 right-0"></div>
          <Image
            alt="tick"
            src="/icons/tick.svg"
            width={8}
            height={8}
            className="absolute top-1 right-1"
          />
        </>
      )}
    </div>
  );
};
