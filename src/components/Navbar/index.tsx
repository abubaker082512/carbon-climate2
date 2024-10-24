"use client";
import React, { useState } from "react";
import Button from "../Button";
import Profile from "../Profile";
import AddCoWorkerForm from "../Forms/AddCoWorkerForm";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const router = useRouter();
  return (
    <div className="w-full py-[25px] px-4 bg-white flex flex-wrap gap-2 items-center justify-between shadow-navbar border-b border-[#CDCDCD] sticky top-0 z-20">
      <div className="font-bold text-primary text-xl leading-[40px]">
        {path === "/" && "My Climate Journey"}
        {path === "/data" && "Collect & Update Data"}
        {path.includes("/data/purchasegoodsandservices") &&
          "Purchased Goods & Services"}
        {isOpen}

        {path === "/analytics" && "Measure & Report Emissions"}
      </div>

      {!path.includes("/data/purchasegoodsandservices") && (
        <>
          <div className="flex gap-4">
            <Button variant="primary" onClick={() => setIsOpen(true)}>
              Add a co-worker
            </Button>
            <Button variant="primary-outline">Carbon Track Academy</Button>
            <Button variant="primary-outline">Carbon Report</Button>
            <div className="hidden xl:block">
              <Profile />
            </div>
          </div>
          <AddCoWorkerForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
      )}

      {path.includes("/data/purchasegoodsandservices") && (
        <>
          <div className="flex gap-4">
            <Button variant="primary-outline">View Emissions</Button>
            <Button
              variant="primary"
              onClick={() => {
                router.push("/data/purchasegoodsandservices/update");
              }}
            >
              Upload Data
            </Button>
            <div className="hidden xl:block">
              <Profile />
            </div>
          </div>
          <AddCoWorkerForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
      )}
    </div>
  );
};

export default Navbar;
