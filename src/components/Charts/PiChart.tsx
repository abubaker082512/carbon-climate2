"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { getPiChartData } from "@/utils/pichartData";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PiChart = () => {
  const [filter, setFilter] = useState<"month" | "quarter" | "year">("month"); // State for the filter selection

  const chartData = {
    series: [44, 55, 13, 33],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
              },
            },
          },
        },
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        show: false,
        offsetY: 0,
        height: 230,
      },
    },
  };

  return (
    <div
      className="shadow-lg rounded-xl w-full
     py-4 relative
    "
    >
      <div className="flex mx-3 my-3 justify-between">
        <h2 className="font-semibold text-2xl text-[#1D1D1D]">Breakdown</h2>
        <select
          className="bg-[#BAE2D7] text-[#08120F] rounded outline-none px-2 py-1"
          value={filter}
          onChange={(e) => {
            if (e.target.value === "year") setFilter("year");
            if (e.target.value === "month") setFilter("month");
            if (e.target.value === "quarter") setFilter("quarter");
          }} // Handle filter change
        >
          <option value="month">Month</option>
          <option value="quarter">Quater</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div
        className=" absolute w-full text-center -left-[7%] left-[32%]1 top-[53%]
       font-semibold text-[#0B0905]
       text-2xl
      "
      >
        27 tCO2e
      </div>
      <Chart
        options={getPiChartData(filter)}
        series={getPiChartData(filter).series}
        type="donut"
        width="100%"
        height={288}
      />
    </div>
  );
};

export default PiChart;
