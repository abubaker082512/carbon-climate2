import { IconChevronDown } from "@tabler/icons-react";
import React from "react";

const SidebarSelect = () => {
  return (
    <div className="px-3 py-2 bg-primary-light flex items-center justify-between text-white font-medium rounded-md ">
      <div className="flex gap-2">
        <span>{/* Icon here */}</span>
        <span>Interest</span>
      </div>
      <span>
        <IconChevronDown stroke={2} className="cursor-pointer" />
      </span>
    </div>
  );
};

export default SidebarSelect;
