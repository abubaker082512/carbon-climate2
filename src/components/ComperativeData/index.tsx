"use client";
import React from "react";
import Barchart from "../Charts/Barchart";
import SingleColumnChart from "../Charts/SingleColumnChart";
import BarchartVertical from "../Charts/BarchartVertical";
import uaeImg from "../../assets/images/uae.png";

const ComperativeData = () => {
  return (
    <div className="flex flex-col gap-[43px]">
      <div className="text-[#08120F] font-bold text-lg bg-[#EAF6F3] rounded-md p-2">
        Comperative Data
      </div>

      {/* Image and Graph */}
      <div className="grid grid-cols-2 gap-12">
        <div className="flex justify-center items-center h-[615px] shadow-lg px-5 py-6 rounded-2xl relative">
          <div className="absolute bg-white opacity-70 top-0 left-0 ">
            Carbon Emissions (tCO2e+) - Map View
          </div>
          <img
            src={uaeImg.src} // Use uaeImg.src here
            alt="Map of UAE"
            width="100%"
            height="400"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center h-[615px] shadow-lg rounded-2xl">
          <div className="font-medium w-full px-12">
            Average CO2 Emission per sector
          </div>
          <BarchartVertical />
        </div>
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-center rounded-2xl bg-[#96D3C3] py-6">
          <div className="text-center text-2xl font-bold text-white">
            Your Company
          </div>
          <div className="text-[40px] leading-[60px] font-bold text-center text-white">
            60
          </div>
          <div className="font-medium text-lg text-center text-white">
            tCO2e/employee
          </div>
        </div>
        <div className="flex flex-col justify-center items-center rounded-2xl bg-[#75C4AE] py-6">
          <div className="text-center text-2xl font-bold text-white">
            Sector Median
          </div>
          <div className="text-[40px] leading-[60px] font-bold text-center text-white">
            85
          </div>
          <div className="font-medium text-lg text-center text-white">
            tCO2e/employee
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <Barchart />

      <div className="text-[#2E4C32] text-lg bg-[#94B298] bg-opacity-[30%] rounded-md p-2">
        Comparison by Category
      </div>

      <div className="text-[#2D4C31] font-semibold text-[22px] leading-[20px]">
        Emissions Comparison
      </div>
      <div className="text-[#0B0905] text-lg">
        Sector medians for each category and your company&apos;s emissions by
        category
      </div>

      <div>
        <SingleColumnChart />
      </div>
    </div>
  );
};

export default ComperativeData;
