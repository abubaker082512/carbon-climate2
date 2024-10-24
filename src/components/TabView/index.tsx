"use client";
import React, { useState } from "react";

type Props = {
  tabs: Array<{ label: string; content: React.ReactNode }>;
};
const TabView: React.FC<Props> = (props) => {
  const { tabs } = props;
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-10">
      <div className="border-b border-[#BBBBBB] flex gap-6">
        {tabs.map((tab, index) => {
          return (
            <div
              className={`py-2 px-4 cursor-pointer font-medium  ${
                active === index
                  ? "border-b-2 text-[#000000] border-[#101010] "
                  : "text-[#707070]"
              }`}
              onClick={() => setActive(index)}
              key={`tab-` + index}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      {tabs.map((tab, index) => {
        if (index === active)
          return <div key={"tab-content-" + index}>{tab.content}</div>;
      })}
    </div>
  );
};

export default TabView;
