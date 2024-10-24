import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { seriesData } from "@/utils/BarChart";
import { categoriesLabels } from "@/utils/barChartsvertical";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarchartVertical = () => {
  const [filter, setFilter] = useState("week"); // State for the filter selection
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Series 1",
        data: [75, 70, 60, 50, 100, 85, 95, 110, 150, 130, 80, 70],
        // data: seriesData,
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
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: false,
          colors: {
            ranges: [
              {
                from: 0,
                to: 9000000,
                color: "#4AA48B", // Change this color to what you prefer for the bars
              },
            ],
          },
        },
      },

      yaxis: {
        labels: {
          style: {
            fontSize: "18px",
            fontWeight: 700, // Make y-axis labels bold
            colors: "#000000",
          },
        },
      },

      xaxis: {
        // categories: categoriesLabels,
        categories: [
          "Agriculture",
          "Healthcare",
          "Finance/Insurance",
          "Info Tech",
          "Logistics",
          "Construction",
          "Retail/Wholesale",
          "Energy",
          "Manufacturing",
          "Hospitality",
          "Education",
          "Real Estate",
        ],
        // categories: [
        //   "Laptop",
        //   "Screen",
        //   "Desktop",
        //   "Tablet",
        //   "Mobile",
        //   "Switch",
        //   "Server",
        //   "Firewal",
        //   "Projector",
        //   "Mouse",
        //   `TV 50"`,
        //   "Router",
        // ],
        labels: {
          style: {
            colors: "#000000",
            fontWeight: 500,
          },
        },
      },
      grid: {
        show: false, // Remove the grid background
      },
    } as ApexOptions,
  });

  return (
    <div className="rounded-xl w-full py-3">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="100%"
        height={500}
      />
    </div>
  );
};

export default BarchartVertical;
