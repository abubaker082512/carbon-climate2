import Image from "next/image";
import React from "react";

import ProfileImage from "@/assets/images/avatar.png";

const Profile = () => {
  return (
    <div className="pl-[35px] border-l-2 border-gray flex gap-[10px]">
      <div className="w-10 h-10 rounded-full  ">
        <Image src={ProfileImage} alt="Profile" className="rounded-full" />
      </div>
      <div className="flex flex-col">
        <div className="text-[15px] font-bold text-primary">
          Gladys Kanyinda
        </div>
        <div className="text-light text-xs ">Admin</div>
      </div>
    </div>
  );
};

export default Profile;
