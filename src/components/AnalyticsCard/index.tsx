import React, { ReactNode } from "react";
import LineChart from "@/components/Charts/linechart";

type Props = {
  title: string;
  value: ReactNode;
  width: string;
  percent: string;
  day: string;
  size?: "lg" | "sm";
};

const DashboardCard = (props: Props) => {
  const { title, value, width, day, percent, size = "lg" } = props;
  return (
    <div
      className={` shadow-lg rounded-xl
       py-3 px-2
       flex items-center justify-between
       ${width}pp
      `}
    >
      <div>
        <p className=" text-[#B8B8B8] text-lg">{title}</p>
        <p
          className={`${size == "lg" ? "text-[34px]" : ""}  text-[#1D1D1D]
            font-medium
            `}
        >
          {value}
        </p>

        <div className=" flex gap-2 font-semibold text-sm">
          <p className=" text-[#2E4C32]">{percent}</p>
          <p className=" text-[#B8B8B8]">{day}</p>
        </div>
      </div>
      <LineChart isGoingUp data={{ series: [30, 40, 35, 44, 49, 43] }} />
    </div>
  );
};

export default DashboardCard;
