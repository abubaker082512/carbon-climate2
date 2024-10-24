"use client";
import { Info } from "@/assets/svg";
import Badge from "@/components/Badg";
import Button from "@/components/Button";
import { IconChevronDown } from "@tabler/icons-react";
import React, { useState } from "react";

const UpdateData = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  return (
    <div className="w-full h-full px-8 py-[52px]">
      <div className="w-full flex justify-between">
        <div className="font-medium text-[22px]">
          Choose your prefered calculation method
        </div>
        <Button variant="primary">Requirements</Button>
      </div>

      <div className="mt-8 border-2 border-[#C4C4C4] rounded-lg p-6 flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-4 text-[#223A25] text-[22px]">
            <div>Spend Base Method</div>
            <Badge variant="primary-outline">Recomended</Badge>
          </div>
          <button
            onClick={() => setOpen1((value) => !value)}
            className={`${open1 && "rotate-180"}`}
          >
            <IconChevronDown />
          </button>
        </div>
        {open1 && (
          <>
            <div>
              To apply this calculation method, you need data on your{" "}
              <b>spend amount</b> per good & service <b>category</b>. Note that
              Purchased Goods & Services is one of the most complex categories
              to calculate emissions for. It requires a few extra steps during
              the phase of data collection, such as mapping your goods and
              services categories to categories that our{" "}
              <b>emissions factors</b> are associated with. Don&apos;t worry -
              we will guide you through this process.
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex gap-4 items-center">
                <div className="bg-gray rounded-full w-3 h-3"></div>
                <div className="text-[#0B0905] font-bold text-xs">
                  Prefered Calculation Method: Spend based method
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="bg-[#223A25] rounded-full w-3 h-3"></div>
                <div className="text-[#223A25] font-semibold">
                  Import and Map Your Data
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 border-2 p-[18px] border-gray rounded-lg flex flex-col gap-6">
                <div className="text-[#0B0905] font-bold text-xs">
                  Use Our Template
                </div>
                <div>
                  Easily enter your data onto the Carbon Track platform using
                  our verified templates for data upload. Simply read the
                  instructions, download the template and add your data points.
                  Should you require assistance, please contact your trusted
                  Carbon Track representative.
                </div>
                <div className="flex justify-between">
                  <div className="text-[#0B0905] font-bold text-xs flex items-center gap-3">
                    <Info />
                    <div>Template Instructions</div>
                  </div>
                  <Button variant="primary">Template Download</Button>
                </div>
              </div>

              <div className="border-2 p-[18px] border-gray rounded-lg flex  flex-col justify-between">
                <div className="text-[#0B0905] font-bold text-xs">
                  Template Upload
                </div>
                <div>
                  Upload your data to receive accurate metrics that analyze your
                  Purchased Goods & Services carbon emissions.
                </div>
                <div className="flex justify-end">
                  <Button variant="primary-outline">Template Upload</Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-8 border-2 border-[#C4C4C4] rounded-lg p-6 flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="text-[#223A25] text-[22px]">
            Water Consumption Method
          </div>
          <button
            onClick={() => setOpen2(!open2)}
            className={`${open2 && "rotate-180"}`}
          >
            <IconChevronDown />
          </button>
        </div>
        {open2 && (
          <div>
            To apply this calculation method, you require the{" "}
            <b> amount of water consumed</b> during the given time period.
            Activities included in the boundaries of the emission calculations
            encompass all the <b>upstream activities</b> that bring the water to
            the end user, meaning the tap water treatment before entering the
            local distribution network, as well as the impact related to water
            transportation to the end-consumer.
          </div>
        )}
      </div>
      <div className="mt-8 border-2 border-[#C4C4C4] rounded-lg p-6 flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="text-[#223A25] text-[22px]">
            Bring Your Own Emissions | Purchased Goods And Services
          </div>
          <button
            onClick={() => setOpen3(!open3)}
            className={`${open3 && "rotate-180"}`}
          >
            <IconChevronDown />
          </button>
        </div>
        {open3 && (
          <div>
            Carbon Track does neither test nor verify the methodology for any
            direct emission values entered on the Carbon Track platform, and it
            is your responsibility to ensure the underlying calculation methods
            are in line with your reporting needs (e.g. compliance with the GHG
            Protocol)
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateData;
