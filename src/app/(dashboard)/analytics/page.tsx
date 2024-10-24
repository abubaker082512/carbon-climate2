import DashboardCard from "@/components/DashboardCard";
import React from "react";
import CompanyDataCard from "@/components/CompanyDataCard";
import TabView from "@/components/TabView";
import ComperativeData from "@/components/ComperativeData";
import CompanyData from "@/components/CompanyData";
import AnalyticsCard from "@/components/DashboardCard";

const list = [
  {
    title: "Scope 1",
    subTitle: "Emissions (tCO2e)",
    value: 9267,
    minorValue: "tC02e",
    percent: 12,
  },
  {
    title: "Scope 2",
    subTitle: "Emissions (tCO2e)",
    value: 9267,
    minorValue: "tC02e",
    percent: 12,
  },
  {
    title: "Scope 3",
    subTitle: "Emissions (tCO2e)",
    value: 9267,
    minorValue: "tC02e",
    percent: 12,
  },
];
// this is my code

const topList = [
  {
    title: "Emissions (tCO2e)",
    value: "27,762",
    percent: 12,
    day: "tC02e",
    width: "1/6",
    data: [53, 91, 19, 67, 32, 81, 46, 98, 21, 75],
  },
  {
    title: "Emissions per Employee",
    value: "14",
    percent: 12,
    day: "tC02e/employee",
    width: "1/6",
    data: [38, 62, 95, 17, 49, 86, 31, 72, 59, 28],
  },
  {
    title: "Emissions per revenue",
    value: "20",
    percent: -12,
    day: "tC02e/revenue (M)",
    width: "1/6",
    data: [92, 15, 66, 39, 48, 83, 24, 71, 58, 96],
  },
  {
    title: "Number of Employee",
    value: "2,030",
    percent: 12,
    day: "",
    width: "1/6",
    data: [41, 68, 89, 25, 52, 76, 13, 99, 35, 61],
  },
  {
    title: "Revenue (M)",
    value: "1,354",
    percent: -12,
    day: "",
    width: "1/6",
    data: [82, 56, 94, 22, 47, 69, 11, 88, 34, 64],
  },
  {
    title: "Percentage of activity based data",
    value: "91%",
    percent: 12,
    day: "",
    width: "1/6",
    data: [51, 85, 27, 93, 44, 79, 16, 65, 38, 97],
  },
];
const AnalyticsPage = () => {
  return (
    <div className="mx-5 my-5 flex flex-col max-w-[97%] ">
      <div className=" grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols gap-4">
        {topList.map((item, index) => {
          return (
            <AnalyticsCard
              size="sm"
              {...item}
              key={"index" + index}
              showPercent={false}
            />
          );
        })}
      </div>

      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols gap-5 my-4">
        {list.map((item, index) => {
          return <CompanyDataCard key={item.title} {...item} />;
        })}
      </div>

      <TabView
        tabs={[
          {
            label: "Company Data",
            content: <CompanyData />,
          },
          {
            label: "Comparative Data",
            content: <ComperativeData />,
          },
        ]}
      />
      <div className="flex justify-end my-[60px]">
        <button className="font-semibold text-2xl text-white bg-[#50B69A] py-4 px-6 rounded-md">
          Recommended Actions
        </button>
      </div>
    </div>
  );
};

export default AnalyticsPage;
