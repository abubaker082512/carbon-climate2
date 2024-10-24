"use client";
import {
  OrganizationIcon,
  CrownDownIcon,
  BrustIcon,
  CarIcon,
  BasslIcon,
  ChargingIcon,
  HeatIcon,
  HeadsetIcon,
  BoxesIcon,
  ChartUpIcon,
  ChartDownIcon,
  ShopIcon,
  InvestIcon,
  Selling,
  PlaneIcon,
  Group,
  WasteIcon,
} from "@/assets/svg";
import Button from "@/components/Button";

import DiscloseMenu from "@/components/DiscloseMenu";
import SideModal from "@/components/SideModal";
import React, { useState } from "react";

const Data = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="px-2 mx-2 my-4 space-y-10">
        <p>
          Data is the raw material of your emissions calculations - the better
          quality it has and the more complete it is, the better your emissions
          estimations will be. The better your emissions estimations, the more
          targeted your decarbonisation actions can be.
        </p>

        <DiscloseMenu icon={<OrganizationIcon />} title="Organizational Data">
          <div>dfas</div>
        </DiscloseMenu>
        <div className=" flex items-center gap-2">
          <div className="text-bold text-2xl">Scope 1</div>
          <CrownDownIcon />
        </div>

        <DiscloseMenu icon={<BrustIcon />} title="Stationary Combustion">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<CarIcon />} title="Mobile Combustion">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<BasslIcon />} title="Fugitive Combustion">
          <div>dfas</div>
        </DiscloseMenu>

        <div className=" flex items-center gap-2">
          <div className="text-bold text-2xl">Scope 2 </div>
          <CrownDownIcon />
        </div>
        <DiscloseMenu icon={<ChargingIcon />} title="Purchased Electricity">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<HeatIcon />} title="Purchased Heat/Cooling">
          <div>dfas</div>
        </DiscloseMenu>

        <div className=" flex items-center gap-2">
          <div className="text-bold text-2xl">Scope 3 </div>
          <CrownDownIcon />
        </div>
        <DiscloseMenu icon={<HeadsetIcon />} title="Purchased Goods & Services">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<BoxesIcon />} title="Use Of Sold Products">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu
          icon={<OrganizationIcon />}
          title="End Of Life Treatment of So..."
        >
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<ChartUpIcon />} title="Upstream Leased Assets">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<ChartDownIcon />} title="Downstream Leased Assets">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<ShopIcon />} title="Franchises">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<InvestIcon />} title="Investments">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<Selling />} title="Capital Goods">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu
          icon={<OrganizationIcon />}
          title="Fuel & Energy Related Activities"
        >
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<ChartUpIcon />} title="Upstream Transportation">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu
          icon={<ChartDownIcon />}
          title="Downstream Transportation"
        >
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<PlaneIcon />} title="Business Travel">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<Group />} title="Employee Commute">
          <div>dfas</div>
        </DiscloseMenu>
        <DiscloseMenu icon={<WasteIcon />} title="Waste Generated">
          <div>dfas</div>
        </DiscloseMenu>
        <div className=" flex justify-end">
          <Button variant="primary" onClick={() => setOpen(true)}>
            Measure & Report
          </Button>
        </div>
      </div>
      <SideModal isOpen={open} onClose={() => setOpen(false)}>
        <div className=" flex flex-col">
          <p className=" text-lg font-semibold">Why Add Organisational Data?</p>
          <p>
            Enter your organisational data to map the structure that your
            emissions calculations and allocations should follow. To view tour
            emissions for example per facility or per location or per employee.
            You should upload this data. Providing the data is mandotry if you
            wish to use national averages for some of the emissions categories
          </p>
        </div>
      </SideModal>
    </>
  );
};

export default Data;
