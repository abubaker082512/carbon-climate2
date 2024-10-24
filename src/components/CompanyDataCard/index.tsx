import React from "react";
import AreaChart from "../Charts/linechart";
import data from "@/data/data.json";

type Props = {
  title: string;
  subTitle: string;
  value: number;
  minorValue: string;
  percent: number;
};

const CompanyDataCard = (props: Props) => {
  const { title, subTitle, value, minorValue, percent } = props;
  return (
    <div
      className="  shadow-lg flex justify-between
     rounded-xl
     py-3 px-2
     items-center
    "
    >
      <div>
        <div
          className=" font-medium
          
          text-black
        "
        >
          {title}
        </div>
        <div
          className=" text-[#636363]
          font-semibold text-sm
        "
        >
          {subTitle}
        </div>
        <div
          className="text-[#2E4C32]
         font-bold text-xl"
        >
          {value}
        </div>
        <div
          className="text-[#A2A2A3]
        font-medium text-[10px]
        "
        >
          {minorValue}
        </div>
      </div>
      <AreaChart
        isGoingUp={percent > 0}
        data={{
          series: data
            .filter((item) => {
              if (item.scope === title.toLocaleLowerCase()) {
                return item;
              }
            })
            .map((item) => item.EmissionValue),
        }}
      />
    </div>
  );
};

export default CompanyDataCard;
