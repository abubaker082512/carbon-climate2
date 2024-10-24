"use client";
import React, { useEffect, useState } from "react";
import EmissionsChart from "../Charts/EmissionsChart";
import EvulationChart from "../Charts/Evulation";
import EmissionByDeft from "../EmissionByDeft";
import FilterBar from "../FilterBar";
import { seriesData } from "@/utils/BarChart";
import { categoriesLabels } from "@/utils/barChartsvertical";
import {
  filteredByInterval,
  getCategoriesAndSeriesByScope,
} from "@/utils/barChartsverticalV2";
import { getFormattedData } from "@/utils/filteredDataByScope";

const CompanyData = () => {
  const [scope, setScope] = useState<"all" | "scope 1" | "scope 2" | "scope 3">(
    "scope 1"
  );
  const [time, setTime] = useState<"month" | "quarter" | "year">("month");

  const [scope2, setScope2] = useState<
    "all" | "scope 1" | "scope 2" | "scope 3"
  >("scope 1");

  const [time2, setTime2] = useState<"month" | "quarter" | "year">("month");

  const [data, setData] = useState({
    series: seriesData,
    category: categoriesLabels,
  });

  const [data2, setData2] = useState({
    series: seriesData,
    category: categoriesLabels,
  });
  useEffect(() => {
    const chartData = getFormattedData(scope2, time);
    setData2({
      category: chartData.category,
      series: chartData.series,
    });
  }, [time2, time2]);

  useEffect(() => {
    const chartData = getFormattedData(scope2, time2);
    setData2({ category: chartData.category, series: chartData.series });
  }, [scope2, time2]);

  useEffect(() => {
    const graphdata = getFormattedData(scope, time);
    setData((values) => ({
      series: graphdata.series,
      category: graphdata.category,
    }));
  }, [data, time]);

  return (
    <div className="flex flex-col gap-y-5">
      <FilterBar
        label="Emissions by Category"
        setScope={setScope2}
        setTime={setTime2}
        scope={scope2}
        interval={time2}
      />
      <div className="bg-[#eaedeb] flex py-5 items-center rounded-md px-3">
        <div>
          <div className="text-[#3F3F3F] text-[12px] font-semibold">
            Climate Categories
          </div>
          <div className="flex gap-2 text-[10px]">
            <span className="text-[#696969]">
              Click on one category to zoom on the associated emission sources.
              For more information on how to use this dashboard, please
            </span>
            <span className="text-[#0072FF] underline cursor-pointer">
              visit this page.
            </span>
          </div>
        </div>
      </div>
      <EmissionsChart category={data2.category} searies={data2.series} />
      <FilterBar
        label="Emissions Over Time"
        setScope={setScope}
        setTime={setTime}
        scope={scope}
        interval={time}
      />
      <EvulationChart
        title="Emissions Over Time"
        useParentData={true}
        data={data}
        scope={scope}
        time={time}
      />
      {/* Fix the interval and scope arguments here */}
      <FilterBar
        label="Emissions By Department"
        setScope={setScope} // Fix scope setting
        setTime={setTime} // Fix interval setting
        interval={time} // Use emissionByDeptTime for interval
        scope={scope} // Use emissionByDept for scope
      />
      {/* Pass necessary props to EmissionByDeft if it requires data */}
      <EmissionByDeft scope={scope} time={time} />
    </div>
  );
};

export default CompanyData;
