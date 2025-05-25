import { useFilterContext } from "@/hooks/useFilterContext";
import clsx from "clsx";

type Props = {
  title: string;
  value: string;
};

export const PriceRadio: React.FC<Props> = ({ title, value }) => {
  const { setFilter, filter } = useFilterContext();
  const range = filter.range;

  return (
    <div
      onClick={() =>
        setFilter({ ...filter, range: value === range ? null : value })
      }
      className={clsx(
        "h-[36px] rounded-[4px] flex items-center justify-center text-[14px] border border-[#CECCCA] cursor-pointer",
        { "bg-[#025FCA] border-[#025FCA] text-white": value === range }
      )}
    >
      {title}
    </div>
  );
};
