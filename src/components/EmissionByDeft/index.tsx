import React, { useEffect, useState } from "react";
import Card from "../Card";
import EmissionPiChart from "../Charts/EmissionPiChart";
import {
  filteredByInterval,
  getCategoriesAndSeriesByScope,
} from "@/utils/barChartsverticalV2";
import { categories } from "@/utils/BarChart";

const data = [
  { title: "C-Suite" },
  { title: "Marketing" },
  { title: "Logistics" },
  { title: "HR" },
  { title: "Product" },
  { title: "Manufacturing" },
  { title: "IT" },
  { title: "Sales" },
];

const scopes = [
  { name: "", alignment: "flex" },
  // { name: "Scope 2", alignment: "flex justify-end" },
  // { name: "Scope 3", alignment: "flex" },
];

const EmissionByDeft: React.FC<{
  scope: "all" | "scope 1" | "scope 2" | "scope 3";
  time: "all" | "month" | "quarter" | "year";
}> = (props) => {
  const { scope, time } = props;

  const [itemData, setItemData] = useState<any>({
    category: [],
    series: [],
  });

  useEffect(() => {
    const chartData = filteredByInterval(time);
    setItemData({
      category: chartData.categories,
      series: chartData.series,
    });
  }, [time]);

  useEffect(() => {
    const chartData = getCategoriesAndSeriesByScope(scope);
    setItemData({
      category: chartData.categories,
      series: chartData.seriesData,
    });
  }, [scope]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div key={index}>
          <span className="text-[#2E4C32] text-lg font-bold">{item.title}</span>
          <Card>
            {scopes.map((scope, scopeIndex) => (
              <div key={scopeIndex} className={"flex justify-center"}>
                <p>{scope.name}</p>
                <EmissionPiChart data={itemData} scope={scope} time={time} />
              </div>
            ))}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default EmissionByDeft;
