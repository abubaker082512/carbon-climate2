"use client";
import { getRandomValues } from "crypto";
import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const EmissionPiChart: React.FC<{
  data: {
    category: Array<string>;
    series: Array<number>;
  };

  scope: any;
  time: any;
}> = (props) => {
  const { data, scope, time } = props;

  function generateRandomNumbers() {
    // Generate a random number between 1 and 98 (to ensure the remaining two numbers can add up to 100)
    const num1 = Math.floor(Math.random() * 98) + 1;

    // Generate a random number between 1 and (100 - num1 - 1) to ensure the sum is 100
    const num2 = Math.floor(Math.random() * (100 - num1 - 1)) + 1;

    // Calculate the third number to ensure the sum is 100
    const num3 = 100 - num1 - num2;

    // Return the array of numbers
    return [
      { title: "Scope 1", value: num1, color: "#52b69a" },
      { title: "Scope 2", value: num2, color: "#96d3c3" },
      { title: "Scope 3", value: num3, color: "#cbe9e1" },
    ];
  }
  const [currData, setCurrData] = useState<any>(generateRandomNumbers());

  const colors = [
    { title: "Two", value: 30, color: "#2E4C32" },
    { title: "Three", value: 20, color: "#3C6642" },
    { title: "One", value: 10, color: "#6F9975" },
    { title: "Three", value: 20, color: "#4B7F51" },
  ];

  const [colorizedData, setColorizeData] = useState<any>([
    { title: "Two", value: 30, color: "#2E4C32" },
    { title: "Three", value: 20, color: "#3C6642" },
    { title: "One", value: 10, color: "#6F9975" },
    { title: "Three", value: 20, color: "#4B7F51" },
  ]);

  useEffect(() => {
    const lableValue = data.category.map((item, index) => {
      return {
        title: item,
        value: data.series[index],
        color: colors[index % 4].color,
      };
    });
    setColorizeData(lableValue);

    setCurrData(generateRandomNumbers());
  }, [data, scope, time]);

  return (
    <PieChart
      data={currData}
      style={{ height: "100px", width: "100px" }}
      animate={true}
    />
  );
};

export default EmissionPiChart;
