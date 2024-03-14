type CardDataStatsProps = {
  title: string;
  total: string;
  note: string;
  isActive?: boolean;
  onClick?: () => void;
};

export function CardDataStats({
  title,
  total,
  note,
  isActive,
  onClick,
}: CardDataStatsProps) {
  return (
    <div
      className={`rounded px-7.5 py-6 ${isActive ? "bg-brand" : "bg-brandlight"} ${onClick && "hover:bg-brand hover:cursor-pointer"}`}
    >
      <div className="flex items-end justify-between">
        <div>
          <h4 className="mb-1 text-title-xxl font-bold text-white">{total}</h4>
          <span className="text-md font-medium text-white">{title}</span>
        </div>

        <span
          className={`text-md flex items-center gap-1 font-medium text-white`}
        >
          {note}
        </span>
      </div>
    </div>
  );
}
