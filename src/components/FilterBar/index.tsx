"use client";
import React from "react";
import MenuSelect from "../MenuSelect";

type Props = {
  label: string;
  setScope: any;
  setTime: any;
  scope: any;
  interval: any;
};

const FilterBar = ({ label, setScope, setTime, scope, interval }: Props) => {
  // const []
  return (
    <div
      className="bg-[#EAF6F3] flex justify-between h-[50px]
    items-center rounded-md px-3"
    >
      <div className="text-[#08120F] font-bold text-lg">{label}</div>

      <div className=" flex gap-8">
        <MenuSelect
          label="Breakdown"
          options={["all", "scope 1", "scope 2", "scope 3"]}
          setOption={setScope}
          value={scope}
        />

        <MenuSelect
          label="Entity"
          options={["Abu Dhabi", "Dubai", "Sharjah", "year"]}
          setOption={setTime}
          value={interval}
        />

        <MenuSelect
          label="Interval"
          options={["month", "quarter", "year"]}
          setOption={setTime}
          value={interval}
        />
        <MenuSelect
          label="Chart"
          options={["Line", "Pie", "Doughnut", "Radar"]}
          setOption={setScope}
          value={scope}
        />
      </div>
    </div>
  );
};

export default FilterBar;
