import Image from "next/image";
import React from "react";
import Logo from "../images/White logo.png"

const Footer = () => {
  return (
    <div className="bg-black pb-[60px] w-full">
      <div className="flex w-full">
        <div className="py-[40px] pr-[60px] border-b border-r border-[#2F2F2F] w-full max-w-[720px] border-solid">
          <div className="pl-[60px]">
            <p className="text-[#666666] font-aeoniklight leading-[19.2px]">Office Addresses</p>
          </div>
          <div className="text-[#F2F2F2] mt-[40px] ml-[160px] max-w-[500px] font-aeoniklight text-[16px] leading-[28.8px]">
            <p>
              Suite 36 and 37, 2nd Floor, Yasuha Plaza (Behind AP Plaza) Plot
              1046, Adetokunbo Ademola Crescent, Wuse II, Abuja.
            </p>
            <p className="mt-[40px]">
              Temitope Chambers, Temitope House, No. 8, Venerable Adefila
              Street, Lajorin, G.R.A., Ilorin, Kwara State of Nigeria
            </p>
          </div>
        </div>

        <div className="pt-[40px] pr-[58px] border-b border-r border-[#2F2F2F] w-full max-w-[360px] border-solid">
          <div className="pl-[60px]">
            <p className="text-[#666666] font-aeoniklight leading-[19.2px]">Quick Links</p>
          </div>
          <div className="text-[#F2F2F2] pb-[48px] mt-[40px] ml-[199px] font-aeoniklight text-[16px]">
            <ul className="space-y-[24px] leading-[19.2px]  w-[109px]">
              <li>About Us</li>
              <li>The Team</li>
              <li>Client Portfolio</li>
            </ul>
          </div>
        </div>

        <div className="py-[40px] pr-[60px] border-b  border-[#2F2F2F] w-full max-w-[360px] border-solid">
          <div className="pl-[60px]">
            <p className="text-[#666666] font-aeoniklight leading-[19.2px]">Contact Us</p>
          </div>
          <div className="text-[#F2F2F2] pb-[48px] mt-[40px] ml-[194px]  font-aeoniklight text-[16px]">
            <ul className="space-y-[24px] leading-[19.2px] w-[109px]">
              <li>Twitter/X</li>
              <li>Instagram</li>
              <li>Email</li>
              <li>Phone Number</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-[16px] justify-center mt-[90px] items-baseline">
        <div>
          <Image src={Logo} alt="logo" className="w-[160px] h-[255.51px] mx-auto"/>
          <div className="mt-[52px]">
            <h2 className="text-[60px] font-aeonikmedium text-white leading-[41px] tracking-[-0.5%]">ABIODUN DADA & CO.</h2>
            <p className="mt-[20px] text-[#858585] text-[18px] leading-[28.8px] tracking-[-1%] font-aeonik-light max-w-[641px] text-center">Delivering exceptional <span className="font-aeonikmedium text-[#F5F5F5]">legal solutions</span> with unwavering <span className="font-aeonikmedium text-[#F5F5F5]">commitment</span> to <span className="font-aeonikmedium text-[#F5F5F5]">excellence!!!</span></p>
          </div>
        </div>
      </div>
        <div className="text-end flex flex-col items-start ml-auto mr-[60px] w-full max-w-[194px]">
          <p className="text-[#666666] text-left font-aeoniklight leading-[19.2px]">Contact Us</p>
          <h2 className="text-[#F2F2F2] font-aeoniklight leading-[21.6px] tracking-[-1%]">lawtemitope@gmail.com</h2>
        </div>
    </div>
  );
};

export default Footer;
