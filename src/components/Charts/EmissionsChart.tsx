"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import data from "@/data/data.json";
import {
  categories,
  categoriesData,
  emissionValuesByCategory,
  seriesData,
} from "@/utils/BarChart";

type Props = {
  searies: Array<number>;
  category: Array<string | number>;
};
const EmissionsChart: React.FC<Props> = (props) => {
  const { category, searies } = props;
  const [filter, setFilter] = useState("week"); // State for the filter selection

  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Series 1",
        data: searies,
      },
    ],
    options: {
      chart: {
        id: "basic-area",
        type: "bar",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          borderRadiusApplication: "end",
          horizontal: true,
          style: {
            margin: 24,
          },

          colors: {
            ranges: [
              {
                from: 0,
                to: 90000000000,
                color: "#4AA48B", // Change this color to what you prefer for the bars
              },
            ],
          },
        },
      },
      xaxis: {
        categories: category,
      },
      dataLabels: {
        enabled: true, // Enable data labels
        hideOverflowingLabels: true,

        style: {
          colors: ["#50B69A"], // Customize the label colors
        },
        offsetX: 24, // Adjust to bring labels inside the bar if needed
        formatter: function (val: number) {
          return val; // Customize how the labels are formatted if needed
        },
        position: "start", // Positions the label at the start of the bar
      },

      grid: {
        show: false, // Remove the grid background
      },
    } as ApexOptions,
  });

  // const mapDataToChart = () => {
  //   const seriesData: any = [];
  //   const categories: any = [];

  //   data.forEach((data) => {
  //     seriesData.push(data.EmissionValue);
  //     categories.push(data.Category);
  //   });

  //   setChartData((prevData) => ({
  //     ...prevData,
  //     series: [
  //       {
  //         name: "Series 1",
  //         data: seriesData,
  //       },
  //     ],
  //     options: {
  //       ...prevData.options,
  //       xaxis: {
  //         ...prevData.options.xaxis,
  //         categories: categories,
  //       },
  //     },
  //   }));
  // };

  // useEffect(() => {
  //   // mapDataToChart();
  // }, []);

  useEffect(() => {
    setChartData({
      series: [
        {
          name: "Series 1",
          data: searies,
        },
      ],
      options: {
        chart: {
          id: "basic-area",
          type: "bar",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            borderRadiusApplication: "end",
            style: {
              margin: 24,
            },

            horizontal: true,
            dataLabels: {
              hideOverflowingLabels: true,
              style: {
                colors: ["#50B69A"], // Customize the label colors
              },
              position: "start", // Ensures the label is aligned at the start (left) of the bar
              offsetX: 24, // Adjust to bring labels inside the bar
            },
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 90000000000,
                  color: "#4AA48B", // Customize the bar color
                },
              ],
            },
          },
        },
        xaxis: {
          categories: category,
        },
        dataLabels: {
          enabled: true, // Enable the data labels
          hideOverflowingLabels: true,
          style: {
            colors: ["#50B69A"], // Customize the label colors
          },

          formatter: function (val: number) {
            return Math.round(val); // Rounds the value to the nearest whole number
          },
          offsetX: 24,
          textAnchor: "start", // Aligns the text to the left
          position: "start", // Ensures the label appears at the start of the bar
        },
        grid: {
          show: false, // Remove grid background
        },
      } as ApexOptions,
    });
  }, [category, searies]);

  return (
    <div className="shadow-lg rounded-xl w-full py-3">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={700}
      />
    </div>
  );
};

export default EmissionsChart;
