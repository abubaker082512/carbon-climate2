"use client";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary elements for Doughnut chart
Chart.register(ArcElement, Tooltip, Legend);

function generateRandomNumbers() {
  const numbers = [];
  let sum = 0;

  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 14) + 7; // 7-20

    if (sum + randomNumber <= 1000) {
      numbers.push(randomNumber);
      sum += randomNumber;
    }
  }

  return numbers;
}

const PiChartChartJs = () => {
  const [filter, setFilter] = useState<"month" | "quarter" | "year">("month");
  const [chartData, setChartData] = useState<any>({
    datasets: [
      {
        label: "Breakdown",
        // data: [180, 150, 100, 140, 130], // Initial data
        data: [180],
        backgroundColor: [
          "#306D5D",
          "#86CCB8",
          "#00401A",
          "#50B69A",
          "#42917B",
          "#50B69A",
        ],
      },
    ],
  });

  const labels = [
    "Stationary Combustion",
    "Mobile Combustion",
    "Fugitive Emissions",
    "Purchased Electricity",
    "Purchased Heat/Cooling",
    "Purchased Goods & Services",
  ];
  // const percentages = [180, 150, 100, 140, 130]; // Example percentages for the list

  // const percentages = [...generateRandomNumbers()];
  // Update chart data based on the selected filter
  useEffect(() => {
    const updateChartData = () => {
      switch (filter) {
        case "month":
          setChartData({
            datasets: [
              {
                label: "Breakdown",
                // data: [250, 50, 50, 200, 100, 50], // Example data for month
                data: [...generateRandomNumbers()],
                backgroundColor: [
                  "#306D5D",
                  "#86CCB8",
                  "#00401A",
                  "#50B69A",
                  "#42917B",
                  "#50B69A",
                ],
              },
            ],
          });
          break;
        case "quarter":
          setChartData({
            datasets: [
              {
                label: "Breakdown",
                // data: [300, 100, 150, 250, 200], // Example data for quarter
                data: [...generateRandomNumbers()],
                backgroundColor: [
                  "#306D5D",
                  "#86CCB8",
                  "#00401A",
                  "#50B69A",
                  "#42917B",
                  "#50B69A",
                ],
              },
            ],
          });
          break;
        case "year":
          setChartData({
            datasets: [
              {
                label: "Breakdown",
                // data: [400, 150, 250, 350, 300], // Example data for year
                data: [...generateRandomNumbers()],
                backgroundColor: [
                  "#306D5D",
                  "#86CCB8",
                  "#00401A",
                  "#50B69A",
                  "#42917B",
                  "#50B69A",
                ],
              },
            ],
          });
          break;
        default:
          break;
      }
    };

    updateChartData();
  }, [filter]);

  // Chart options to reduce the circular path (increase cutout)
  const chartOptions = {
    cutout: "65%", // Adjust to increase/decrease inner radius of the doughnut
    responsive: true,
    maintainAspectRatio: false, // Prevent automatic aspect ratio to allow custom width/height
  };

  return (
    <div className="shadow-lg rounded-xl w-full px-4 py-6 relative">
      <div className="flex justify-between">
        <h2 className="font-semibold text-2xl text-[#1D1D1D]">Breakdown</h2>
        <select
          className="bg-[#BAE2D7] text-[#08120F] rounded outline-none px-2 py-1"
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as "month" | "quarter" | "year")
          } // Handle filter change
        >
          <option value="month">Month</option>
          <option value="quarter">Quarter</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div className="flex justify-between items-center ">
        <div
          className="px-6 relative"
          style={{ width: "300px", height: "300px" }}
        >
          <div
            className=" absolute w-full text-center 
       font-semibold text-[#0B0905]
       text-2xl  top-[45%] -left-1
      "
          >
            27 tCO2e
          </div>
          <Doughnut
            data={chartData}
            options={chartOptions}
            width={300}
            height={300}
          />
        </div>
        <div className="flex-1">
          <ul className="space-y-4">
            {chartData.datasets[0].data.map((_: any, index: number) => (
              <li key={index} className="flex justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div
                      className="size-4 rounded-full border-[4px] border-black"
                      style={{
                        backgroundColor:
                          chartData.datasets[0].backgroundColor[index],
                        width: "15px",
                        height: "15px",
                      }}
                    ></div>
                    <div>
                      <span className="text-[14px] font-semibold">
                        {labels[index]}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-[15px] font-semibold">
                  {chartData.datasets[0].data[index]}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PiChartChartJs;
