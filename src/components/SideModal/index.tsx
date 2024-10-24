import React from "react";
import Button from "../Button";
import { CancelIcon } from "@/assets/svg";

type SideModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const SideModal: React.FC<SideModalProps> = ({
  isOpen = false,
  onClose,
  children,
  title = "",
}) => {
  return (
    // Modal overlay
    <div
      className={`top-0 fixed inset-0 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Modal backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className={`bg-white xs:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[35vw] transition-transform duration-300  ${
          isOpen ? "translate-x-[-20px]" : "translate-x-full"
        }`}
        style={{ marginTop: "0" }} // Align to the top
      >
        <button
          className=" absolute -left-10 z-50 top-40
         bg-white rounded-full
         p-8
        "
          onClick={onClose}
        >
          <CancelIcon />
        </button>
        <div className="p-4 h-full flex flex-col">
          {/* Modal header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 p-2 divide-x-2">
              <h2 className="text-lg font-bold pl-3">{title}</h2>
            </div>
          </div>

          {/* Modal body */}
          <div
            className=" flex overflow-auto
           h-full
           justify-center
           items-center relative
          "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
