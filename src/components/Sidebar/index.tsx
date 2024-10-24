"use client";
import React from "react";
import Logo from "../Logo";
import SelectInput from "../FormFields/selectInput";
import Input from "../FormFields/input";

import DashboardIcon from "@/assets/svg/dashboard.svg";
import Navlink, { NavlinkType, SubMenu } from "../Navlink";
import Divider from "../Divider";
import { usePathname } from "next/navigation";
import { IconType } from "@/assets/svg";
// import { BinIcon } from "@/assets/svg";
const Sidebar = () => {
  const path = usePathname();

  console.log(path);
  const routes = [
    {
      href: "/",
      isActive: true,
      label: "Dashboard",
      icon: "dashboard",
      dropDown: true,
      subMenu: [],
    },
    {
      href: "/data",
      isActive: false,
      label: "Data",
      icon: "pyramid",
      dropDown: false,
      subMenu: [
        {
          label: "Overview",
          href: "/data",
          isActive: true,
          subLinks: [],
        },
        {
          label: "Organization",
          href: "/data/organization",
          isActive: true,
          subLinks: [],
        },
        {
          label: "Scope 1",
          href: "/data/scope1",
          isActive: true,
          subLinks: [
            {
              label: "Stationary Combustion",
              href: "stationarycombustion",
            },
            {
              label: "Mobile Combustion",
              href: "mobilecombustion",
            },
            {
              label: "Fugitive Emissions",
              href: "fugitiveemissions",
            },
          ],
        },
        {
          label: "Scope 2",
          href: "/data/scope2",
          isActive: true,
          subLinks: [
            {
              label: "Purchased Electricity",
              href: "purchasedelectricity",
            },
            {
              label: "Purchased Heat/Cooling",
              href: "purchasedheatcooling",
            },
          ],
        },
        {
          label: "Scope 3",
          href: "/data/scope3",
          isActive: true,
          subLinks: [
            {
              label: "Purchased Goods Services",
              href: "purchasedgoodsservices",
            },
            {
              label: "Use of Sold Products",
              href: "useofsoldproducts",
            },
            {
              label: "End Of Life Treatment of So...",
              href: "endoflifetreatmentofso",
            },
            {
              label: "Upstream Leased Assets",
              href: "upstreamleasedassets",
            },
            {
              label: "Downstream Leased Assets",
              href: "downstreamleasedassets",
            },
            {
              label: "Franchises",
              href: "franchises",
            },
            {
              label: "Investments",
              href: "investments",
            },
            {
              label: "Capital Goods",
              href: "capitalgoods",
            },
            {
              label: "Fuel & Energy Related Activities",
              href: "fuelandenergyrelatedactivities",
            },
            {
              label: "Upstream Transportation",
              href: "upstreamtransportation",
            },
            {
              label: "Downstream Transportation",
              href: "downstreamtransportation",
            },
            {
              label: "Business Travel",
              href: "businesstravel",
            },
            {
              label: "Employee Commute",
              href: "employeecommute",
            },
            {
              label: "Waste Generated",
              href: "wastegenerated",
            },
          ],
        },
      ],
    },

    {
      href: "/analytics",
      isActive: false,
      label: "Analytics",
      icon: "analytics",
      dropDown: false,
      subMenu: [
        {
          label: "Overview",
          href: "/data/overiew",
          isActive: true,
          subLinks: [],
        },
        {
          label: "Organization",
          href: "/data/organization",
          isActive: true,
          subLinks: [],
        },
        {
          label: "Scope 1",
          href: "/data/scope1",
          isActive: true,
          subLinks: [
            {
              label: "Stationary Combustion",
              href: "stationarycombustion",
            },
            {
              label: "Mobile Combustion",
              href: "mobilecombustion",
            },
            {
              label: "Fugitive Emissions",
              href: "fugitiveemissions",
            },
          ],
        },
        {
          label: "Scope 2",
          href: "/data/scope2",
          isActive: true,
          subLinks: [
            {
              label: "Purchased Electricity",
              href: "purchasedelectricity",
            },
            {
              label: "Purchased Heat/Cooling",
              href: "purchasedheatcooling",
            },
          ],
        },
        {
          label: "Scope 3",
          href: "/data/scope3",
          isActive: true,
          subLinks: [
            {
              label: "Purchased Goods Services",
              href: "/data/purchasedgoodsservices",
            },
            {
              label: "Use of Sold Products",
              href: "useofsoldproducts",
            },
            {
              label: "End Of Life Treatment of So...",
              href: "endoflifetreatmentofso",
            },
            {
              label: "Upstream Leased Assets",
              href: "upstreamleasedassets",
            },
            {
              label: "Downstream Leased Assets",
              href: "downstreamleasedassets",
            },
            {
              label: "Franchises",
              href: "franchises",
            },
            {
              label: "Investments",
              href: "investments",
            },
            {
              label: "Capital Goods",
              href: "capitalgoods",
            },
            {
              label: "Fuel & Energy Related Activities",
              href: "fuelandenergyrelatedactivities",
            },
            {
              label: "Upstream Transportation",
              href: "upstreamtransportation",
            },
            {
              label: "Downstream Transportation",
              href: "downstreamtransportation",
            },
            {
              label: "Business Travel",
              href: "businesstravel",
            },
            {
              label: "Employee Commute",
              href: "employeecommute",
            },
            {
              label: "Waste Generated",
              href: "wastegenerated",
            },
          ],
        },
      ],
    },
    {
      href: "/action",
      isActive: false,
      label: "Action",
      icon: "action",
      dropDown: false,
      subMenu: [],
    },
    {
      href: "/investment",
      isActive: false,
      label: "Investment",
      icon: "investment",
      dropDown: false,
      subMenu: [],
    },
    {
      href: "/learn",
      isActive: false,
      label: "Learn",
      icon: "learn",
      dropDown: false,
      divider: true,
      subMenu: [],
    },
    {
      href: "/contactus",
      isActive: false,
      label: "Contact Us",
      icon: "customer",
      dropDown: false,
      subMenu: [],
    },
    {
      href: "/logout",
      isActive: false,
      label: "LogOut",
      icon: "power",
      dropDown: false,
      subMenu: [],
    },
  ];
  return (
    <div className="h-screen  w-[328px] bg-[#F6F6F6] fixed overflow-auto">
      <div className="pt-10 text-white px-3">
        <Logo />
      </div>
      <div className="py-[52px] flex flex-col gap-[14px] px-3">
        <SelectInput
          options={[
            { label: "interest", value: "interest" },
            { label: "interest", value: "interest" },
          ]}
          variant="secondary"
        />
        <Input variant="secondary" name="date" type="date" />
      </div>

      <div className="flex flex-col">
        {routes.map((route, index) => {
          return (
            <>
              <Navlink
                key={"nav-" + index}
                dropDown={route.dropDown}
                href={route.href}
                icon={route.icon as IconType}
                isActive={path === route.href}
                label={route.label}
                subMenu={route.subMenu}
              />
              {route.divider && (
                <div className="px-[22px]">
                  <Divider />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
