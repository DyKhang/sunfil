import { useFilterContext } from "@/hooks/useFilterContext";
import Image from "next/image";

type Props = {
  label: string;
  value: string;
};

export const Tag: React.FC<Props> = ({ label, value }) => {
  const { filter, setFilter } = useFilterContext();
  const type = filter.type;

  return (
    <div
      onClick={() => setFilter({ ...filter, type: value })}
      className={`py-[8px] cursor-pointer px-[16px] ${
        value === type
          ? "border-[#0373F3] text-[#0373F3]"
          : "border-transparent"
      } rounded-[8px] border relative overflow-hidden text-[14px] font-bold bg-white`}
    >
      {label}
      {value === type && (
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
