"use client";
import { CrownDownIcon } from "@/assets/svg";
import React, { useState, useEffect, useRef } from "react";

type Props = {
  label: string;
  options: string[];
  setOption: any;
  value: any;
};

const MenuSelect = ({ label, options, setOption, value }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex gap-2 items-center">
        <div className="text-[#08120F] font-medium text-lg">{label}</div>
        <div
          onClick={handleToggleMenu}
          className="cursor-pointer
         transform rotate-90
        "
        >
          <CrownDownIcon />
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute bg-white rounded-lg shadow-2xl p-3 space-y-3 mt-2"
          style={{ zIndex: 1000 }}
        >
          {options.map((item) => (
            <Option
              key={item}
              option={item}
              value={value}
              onClick={() => {
                setOption(item);
                setIsOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

type OptionProps = {
  option: string;
  onClick: () => void;
  value: any;
};
const Option: React.FC<OptionProps> = (props) => {
  const { onClick, option = "", value } = props;
  return (
    <div
      onClick={onClick}
      className={`text-[#2E4C32] font-semibold text-base capitalize cursor-pointer px-2 w-fit text-nowrap ${
        value === option ? "bg-[#EAF6F3] rounded-lg  text-gray-900" : ""
      }`}
    >
      {option}
    </div>
  );
};

export default MenuSelect;
