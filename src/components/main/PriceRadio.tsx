import { useSetSearchParams } from "@/hooks/useSetSearchParams";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

type Props = {
  title: string;
  value: string;
};

export const PriceRadio: React.FC<Props> = ({ title, value }) => {
  const searchParams = useSearchParams();
  const [setSearchParams] = useSetSearchParams("range");
  const range = searchParams.get("range");

  return (
    <div
      onClick={() => setSearchParams(value)}
      className={clsx(
        "h-[36px] rounded-[4px] flex items-center justify-center text-[14px] border border-[#CECCCA] cursor-pointer",
        { "bg-[#025FCA] border-[#025FCA] text-white": range === value }
      )}
    >
      {title}
    </div>
  );
};
