type Props = {
  title: string;
  values: string[];
};

export const Col: React.FC<Props> = ({ title, values }) => {
  return (
    <div>
      <h2 className="text-[#013065] text-[24px] font-semibold">{title}</h2>

      <div className="flex flex-col mt-[32px] gap-[12px]">
        {values.map((value) =>
          value === "Privacy Policy" ? (
            <h3
              key={value}
              className="font-semibold pl-[20px] before:absolute relative before:w-[16px] before:h-[1px] before:bg-[#1C252E] before:rounded-full before:bottom-2 before:left-0"
            >
              {value}
            </h3>
          ) : (
            <h3 key={value} className="text-[#637381]">
              {value}
            </h3>
          )
        )}
      </div>
    </div>
  );
};
