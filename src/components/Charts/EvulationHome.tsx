"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { monthlyData, quarterlyData, yearlyData } from "@/utils/data";

type Props = {
  title?: string;
  data: { category: Array<string>; series: Array<number> };
  useParentData?: boolean;
  time: any;
  scope: any;
};

const EvulationChartHome = ({
  title = "Evolution",
  useParentData = false,
  data,
  scope,
  time,
}: Props) => {
  const AnalyticsData = {
    yearly: { "2022": 1285766, "2023": 1345215, "2024": 1386690 },
    monthly: {
      January: 311118,
      February: 315333,
      March: 324435,
      April: 332139,
      May: 278999,
      June: 353056,
      July: 62939,
      August: 358827,
      September: 346575,
      October: 325978,
      November: 320712,
      December: 328707,
    },
    quarterly: {
      "2024-Q1": 328410,
      "2024-Q2": 348817,
      "2024-Q3": 370569,
      "2024-Q4": 338894,
      "2023-Q1": 319975,
      "2023-Q2": 339344,
      "2023-Q3": 361254,
      "2023-Q4": 324642,
      "2022-Q1": 302501,
      "2022-Q2": 326432,
      "2022-Q3": 344972,
      "2022-Q4": 311861,
    },
  };
  const yearlySeriesData = Object.values(AnalyticsData.yearly);
  const yearlyCategories = Object.keys(AnalyticsData.yearly);

  const quarterlySeriesData = Object.values(AnalyticsData.quarterly);
  const quarterlyCategories = Object.keys(AnalyticsData.quarterly);
  const seriesData = Object.values(AnalyticsData.monthly);
  const categories = Object.keys(AnalyticsData.monthly);

  const [filter, setFilter] = useState("year"); // State for the filter selection
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Evolution",
        // data: [3, 4, 28, 51, 42, 109, 100], // Default data for "week"
        data: useParentData ? data.series : yearlySeriesData,
      },
    ],
    options: {
      chart: {
        id: "basic-area",
        type: "area",
        height: 350,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        type: "category",
        categories: useParentData ? data.category : yearlyCategories,
        // categories: [
        //   "Mar 12",
        //   "Mar 13",
        //   "Mar 14",
        //   "Mar 15",
        //   "Mar 16",
        //   "Mar 17",
        //   "Mar 19",
        // ], // Default categories for "week"
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            if (value >= 1000) {
              return `${(value / 1000).toFixed(1)}k`; // Format values over 1000 as 'k'
            }
            return value.toString(); // Return values below 1000 as they are
          },
        },
      },
      grid: {
        show: true,
        strokeDashArray: 5,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#50B69A"],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          colorStops: [
            {
              offset: 0,
              color: "#50B69A",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#ffffff",
              opacity: 0.2,
            },
          ],
        },
      },
      markers: {
        size: 0,
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "",
      },
      tooltip: {
        enabled: false,
      },
    } as ApexOptions,
  });

  useEffect(() => {
    if (useParentData) {
      setChartData({
        series: [
          {
            name: "Evolution",
            data: data.series,
            // data: [3, 4, 28, 51, 42, 109, 100], // Data for "week"
          },
        ],
        options: {
          ...chartData.options,
          xaxis: {
            ...chartData.options.xaxis,
            categories: data.category,
          },
        },
      });
    }
  }, [data, time, scope]);
  // Update chart data based on the selected filter
  useEffect(() => {
    if (!useParentData)
      if (filter === "month") {
        setChartData({
          series: [
            {
              name: "Evolution",
              data: seriesData,
              // data: [3, 4, 28, 51, 42, 109, 100], // Data for "week"
            },
          ],
          options: {
            ...chartData.options,
            xaxis: {
              ...chartData.options.xaxis,
              categories: categories,
              // categories: [
              //   "Mar 12",
              //   "Mar 13",
              //   "Mar 14",
              //   "Mar 15",
              //   "Mar 16",
              //   "Mar 17",
              //   "Mar 19",
              // ], // Categories for "week"
            },
          },
        });
      } else if (filter === "year") {
        setChartData({
          series: [
            {
              name: "Evolution",
              // data: [120, 200, 300, 450, 600, 750, 900], // Data for "year"
              data: yearlySeriesData,
            },
          ],
          options: {
            ...chartData.options,
            xaxis: {
              ...chartData.options.xaxis,
              categories: yearlyCategories,
              // categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Categories for "year"
            },
          },
        });
      } else if (filter === "quarter") {
        setChartData({
          series: [
            {
              name: "Evolution",
              data: quarterlySeriesData,
              // data: [120, 200, 300, 450, 600, 750, 900], // Data for "year"
            },
          ],
          options: {
            ...chartData.options,
            xaxis: {
              ...chartData.options.xaxis,
              categories: quarterlyCategories,
              // categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Categories for "year"
            },
          },
        });
      }
  }, [filter]);

  return (
    <div className="shadow-lg rounded-xl w-full py-3">
      {!useParentData && (
        <div className="flex mx-3 my-3 justify-between">
          <h2 className="font-semibold text-2xl text-[#1D1D1D]">{title}</h2>
          <select
            className="bg-[#BAE2D7] text-[#08120F] rounded outline-none px-2 py-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value)} // Handle filter change
          >
            <option value="month">Month</option>
            <option value="quarter">Quater</option>
            <option value="year">Year</option>
          </select>
        </div>
      )}
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        width="100%"
        height={288}
      />
    </div>
  );
};

export default EvulationChartHome;
