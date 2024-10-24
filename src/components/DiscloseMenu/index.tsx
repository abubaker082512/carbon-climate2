"use client";
import React, { ReactNode } from "react";
import { CrownRightIcon } from "@/assets/svg";
import { useRouter } from "next/navigation";
import { IconChevronRight } from "@tabler/icons-react";

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

const DiscloseMenu = (props: Props) => {
  const { icon, title } = props;

  const router = useRouter();
  return (
    <>
      <div
        className="flex justify-between border-b-[2px] border-[#C4C4C4] shadow-lg px-3 py-4"
        role="button"
      >
        <div className=" flex items-center gap-3">
          {icon}
          <div className=" text-xl font-semibold text-[#08120F]">{title}</div>
        </div>
        <div className=" flex gap-x-3 items-center">
          <div
            className=" text-xl font-semibold text-[#86CCB8]"
            onClick={() => {
              if (title === "Purchased Goods & Services") {
                router.push("/data/purchasegoodsandservices");
              }
            }}
          >
            Update Data
          </div>
          <IconChevronRight className="text-[#86CCB8]" />
        </div>
      </div>
      {/* <div>{isOpen && children}</div> */}
    </>
  );
};

export default DiscloseMenu;
