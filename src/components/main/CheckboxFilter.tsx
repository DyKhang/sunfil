import { Checkbox } from "@/components/ui/checkbox";
import { useFilterContext } from "@/hooks/useFilterContext";

type Props = {
  label: string | number;
  value: string;
  field: "category" | "year" | "origin" | "brand";
};

export const CheckboxFilter: React.FC<Props> = ({ label, value, field }) => {
  const { filter, setFilter } = useFilterContext();

  return (
    <label className="text-[14px] flex items-center font-[500] gap-[10px]">
      <Checkbox
        onCheckedChange={(checked) => {
          if (!!checked) {
            setFilter({
              ...filter,
              [field]: filter[field] ? [...filter[field], value] : [value],
            });
          } else {
            setFilter({
              ...filter,
              [field]:
                filter[field] && filter[field].length > 1
                  ? filter[field].filter((element) => element !== value)
                  : null,
            });
          }
        }}
      />
      <span className="translate-y-[2px] cursor-pointer">
        {label} <span className="font-normal text-[#637381]">(24)</span>
      </span>
    </label>
  );
};
