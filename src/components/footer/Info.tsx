type Props = {
  title: string;
  value: string;
};

export const Info: React.FC<Props> = ({ title, value }) => {
  return (
    <span className="text-[18px] text-slate-500">
      {title}: <span className="text-slate-600 font-semibold">{value}</span>
    </span>
  );
};
