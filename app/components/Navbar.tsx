import Image from "next/image";
import React from "react";
import {DirectionRight} from "react-huge-icons/solid"

const Navbar = () => {
  return (
    <div className="px-[68px] py-[24px] flex justify-between items-center">
      <div>
        <Image
          src="https://res.cloudinary.com/mmainspire/image/upload/v1732664482/abiodun/cgivsxxwf8qcl5wcfmos.png"
          alt="logo"
          width={38.91}
          height={62}
        />
      </div>
      <nav>
        <ul className="flex gap-[32px] font-aeonik text-[15px] font-medium text-[#747474] ">
          <li className="leading-[18px]">Home</li>
          <li className="leading-[18px]">About Us</li>
          <li className="leading-[18px]">The Team</li>
          <li className="leading-[18px]">Contact Us</li>
        </ul>
      </nav>
      <div className="flex items-center gap-[6px]">
        <p className="text-[#141414] font-aeonik leading-[19.2px]">Schedule Your Consultation</p>
        <DirectionRight className="size-[20px] text-[#141414]"/>
      </div>
    </div>
  );
};

export default Navbar;
