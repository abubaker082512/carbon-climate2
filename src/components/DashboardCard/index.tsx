import React, { ReactNode } from "react";
import LineChart from "@/components/Charts/linechart";

type Props = {
  title: string;
  value: ReactNode;
  width: string;
  percent: number;
  day: string;
  size?: "lg" | "sm";
  data: Array<number>;
  showPercent?: boolean;
};

const AnalyticsCard = (props: Props) => {
  const {
    title,
    value,
    width,
    day,
    percent,
    size = "lg",
    data,
    showPercent = true,
  } = props;
  console.log("percent", percent);
  return (
    <div
      className={` shadow-lg rounded-xl
       py-3 px-2
       flex items-center justify-between
       ${width}
      `}
    >
      <div>
        <p className=" text-[#B8B8B8] text-[12px]">{title}</p>
        <p className="text-lg text-[#2E4C32]">{value}</p>

        <div className=" flex gap-1 font-semibold text-[10px]">
          {showPercent && (
            <p
              className={`${percent > 0 ? "text-[#2E4C32]" : "text-[#E2362F]"}`}
            >
              {percent}%
            </p>
          )}
          <p className=" text-[#B8B8B8]">{day}</p>
        </div>
      </div>
      <LineChart
        height={80}
        width="80px"
        data={{ series: data }}
        isGoingUp={percent > 0}
      />
    </div>
  );
};

export default AnalyticsCard;
