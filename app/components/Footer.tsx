import Image from "next/image";
import React from "react";
import Logo from "../images/White logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black pb-[60px] w-full">
      {/* Main Sections */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Office Addresses */}
        <div className="md:py-[40px] py-[60px] lg:pr-[60px] px-[16px] lg:px-0 border-b border-[#2F2F2F] lg:border-r w-full lg:max-w-[720px]">
          <div className="lg:pl-[60px]">
            <p className="text-[#666666] font-aeoniklight leading-[19.2px]">
              Office Addresses
            </p>
          </div>
          <div className="text-[#F2F2F2] mt-[20px]  lg:mt-[40px] lg:ml-[160px] max-w-[500px] font-aeoniklight text-[14px] lg:text-[16px] leading-[28.8px]">
            <p className="mt-[20px] lg:mt-[40px]">
              Temitope Chambers, Temitope House, No. 8, Venerable Adefila
              Street, Lajorin, G.R.A., Ilorin, Kwara State of Nigeria.
            </p>
            <p>
              Suite 36 and 37, 2nd Floor, Yasuha Plaza (Behind AP Plaza) Plot
              1046, Adetokunbo Ademola Crescent, Wuse II, Abuja.
            </p>
          </div>
        </div>

        {/* Container for Quick Links and Contact Us on mobile */}
        <div className="flex flex-row w-full">
          {/* Quick Links */}
          <div className="pt-[40px] px-[16px] lg:px-0 lg:pr-[58px] border-b border-[#2F2F2F] border-r w-full  lg:max-w-[360px]">
            <div className="lg:pl-[60px]">
              <p className="text-[#666666] font-aeoniklight leading-[19.2px]">
                Quick Links
              </p>
            </div>
            <div className="text-[#F2F2F2] mt-[20px] lg:mt-[40px] lg:ml-[159px] font-aeoniklight text-[14px] lg:text-[16px]">
              <ul className="space-y-[16px] lg:space-y-[24px] leading-[19.2px]">
                <Link href="/Aboutus">
                  <div className="mt-[16px] lg:mt-[24px]">
                    <li>About Us</li>
                  </div>
                </Link>
                <Link href="/Team">
                  <div className="mt-[16px] lg:mt-[24px]">
                    <li>The Team</li>
                  </div>
                </Link>
                <Link href="/Contactus">
                  <div className="mt-[16px] lg:mt-[24px]">
                    <li>Contact Us</li>
                  </div>
                </Link>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="py-[40px] px-[16px] lg:px-0 lg:pr-[50px] border-b border-[#2F2F2F] w-full lg:max-w-[360px]">
            <div className="lg:pl-[60px]">
              <p className="text-[#666666] font-aeoniklight leading-[19.2px]">
                Contact Us
              </p>
            </div>
            <div className="text-[#F2F2F2] mt-[20px] lg:mt-[40px] lg:ml-[144px] font-aeoniklight text-[14px] lg:text-[16px]">
              <ul className="space-y-[16px] lg:space-y-[24px] leading-[19.2px]">
                <a href="https://x.com/lawtemitope?s=09" target="_blank">
                  <li className="mt-[16px] lg:mt-[24px]">Twitter/X</li>
                </a>
                <a
                  href="https://www.instagram.com/law_temitope/profilecard/?igsh=dDhqeHVmMDVsNWZp"
                  target="_blank"
                >
                  <li className="mt-[16px] lg:mt-[24px]">Instagram</li>
                </a>
                <a href="lawtemitope@gmail.com" target="_blank">
                  <li className="mt-[16px] lg:mt-[24px]">Email</li>
                </a>
                <a
                  href="https://m.facebook.com/profile.php?id=61571127236657&name=xhp_nt_"
                  target="_blank"
                >
                  <li className="mt-[16px] lg:mt-[24px]">Facebook</li>
                </a>
                <li>Phone Number</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Tagline */}
      <div className="flex flex-col items-center gap-[16px] justify-center mt-[40px] lg:mt-[90px]">
        <Image
          src={Logo}
          alt="logo"
          className="w-[140px] h-auto lg:w-[160px]"
        />
        <div className="mt-[32px] lg:mt-[52px] text-center">
          <h2 className="text-[36px] lg:text-[60px] font-aeonikmedium text-white leading-[41px] tracking-[-0.5%]">
            ABIODUN DADA & CO.
          </h2>
          <p className="mt-[16px] lg:mt-[20px] text-[#858585] text-[14px] lg:text-[18px] leading-[28.8px] tracking-[-1%] font-aeonik-light max-w-[363px] mx-auto lg:max-w-[641px]">
            Delivering exceptional{" "}
            <span className="font-inter text-[#F5F5F5]">
              legal solutions
            </span>{" "}
            with unwavering{" "}
            <span className="font-inter text-[#F5F5F5]">commitment</span>{" "}
            to{" "}
            <span className="font-inter text-[#F5F5F5]">
              excellence!!!
            </span>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center lg:text-start flex lg:flex-row flex-col space-y-[40px] justify-between items-center lg:items-end mt-[100.43px] lg:mt-0 ml-auto mr-[30px] lg:ml-[60px] lg:mr-[60px]">
        <div>
          <p className="text-[#666666] font-aeoniklight leading-[19.2px]">
            Visit our website:
          </p>
          <p className="text-[#F2F2F2] font-aeoniklight leading-[21.6px] tracking-[-1%]">
            www.abiodundadaandco.com
          </p>
        </div>
        <div>
          <p className="text-[#666666] font-aeoniklight leading-[19.2px]">
            Contact Us
          </p>
          <p className="text-[#F2F2F2] font-aeoniklight leading-[21.6px] tracking-[-1%]">
            lawtemitope@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
