"use client";
import React from "react";
import { ApexOptions } from "apexcharts"; // Import ApexOptions

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  color?: string;
  strokeColor?: string;
  height?: number;
  width?: string;
  data: {
    series: Array<number>;
  };
  isGoingUp: boolean;
};

function AreaChart(props: Props) {
  const {
    color = "#2E4C32",
    strokeColor = "#50B69A",
    height = 100,
    width = "100px",
    data,
    isGoingUp,
  } = props;

  const AreaChartData = data?.series ? data.series : [30, 40, 35, 44, 49, 43];
  const chartData = {
    series: [
      {
        name: "scope",
        // data: [30, 40, 35, 44, 49, 43], // Sample data
        data: AreaChartData,
      },
    ],
    options: {
      chart: {
        id: "basic-area",
        type: "area", // Change type to 'area'
        height: 55,
        width: 120,
        toolbar: {
          show: false, // Disable toolbar (zoom, pan, etc.)
        },
        zoom: {
          enabled: false, // Disable zooming
        },
      },
      xaxis: {
        labels: {
          show: false, // Hide X-axis labels
        },
        axisBorder: {
          show: false, // Hide X-axis border
        },
        axisTicks: {
          show: false, // Hide X-axis ticks
        },
      },
      yaxis: {
        show: false, // Hide Y-axis entirely
      },
      grid: {
        show: false, // Hide all grid lines
      },
      stroke: {
        curve: "smooth", // Make the area curve smooth (optional)
        width: 2, // Set the line thickness to 2px
        colors: [isGoingUp ? strokeColor : "#E2362F"], // Set the line color to #121217
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
              color: isGoingUp ? "#50B69A" : "#E2362F",
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
        size: 0, // Hide data point markers
      },
      dataLabels: {
        enabled: false, // Hide data labels on the area
      },
      title: {
        text: "",
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    } as ApexOptions, // Cast options as ApexOptions
  };

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        width={width} // Set width to 200px
        height={height}
      />
    </div>
  );
}

export default AreaChart;
