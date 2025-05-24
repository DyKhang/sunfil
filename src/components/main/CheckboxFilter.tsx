import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  title: string | number;
};

export const CheckboxFilter: React.FC<Props> = ({ title }) => {
  return (
    <label className="text-[14px] flex items-center font-[500] gap-[10px]">
      <Checkbox />
      <span className="translate-y-[2px] cursor-pointer">
        {title} <span className="font-normal text-[#637381]">(24)</span>
      </span>
    </label>
  );
};
