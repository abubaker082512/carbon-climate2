import React from "react";
import Link from "next/link";
import LogoImage from "@/assets/images/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex gap-1 items-center">
        <div className="absolute">
          <Image
            // width={00}
            // height={50}
            // width={900}
            // width={300}
            // height={200}
            src={LogoImage}
            alt="Logo"
            // layout="fill"
            // layout="fill"
          />
        </div>
        {/* <span className="font-semibold text-lg">Climate Finance</span> */}
      </div>
    </Link>
  );
};

export default Logo;
