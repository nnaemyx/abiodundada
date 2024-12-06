"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DirectionRight, RemoveThin, ArrowRight } from "react-huge-icons/solid";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/Aboutus" },
    { name: "The Team", path: "/Team" },
    { name: "Contact Us", path: "/Contactus" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="lg:px-[68px] px-[20px] lg:py-[24px] py-[13px] w-full flex justify-between items-center bg-white sticky top-0 z-50 shadow-sm">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/mmainspire/image/upload/v1732664482/abiodun/cgivsxxwf8qcl5wcfmos.png"
              alt="logo"
              width={38.91}
              height={62}
              className="lg:w-[38.91px] lg:h-[62px] w-[26.36px] h-[42px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex ml-[10rem]">
          <ul className="flex gap-[32px] font-aeonik text-[15px] font-medium text-[#747474]">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`leading-[18px] cursor-pointer ${
                  pathname === item.path
                    ? "text-[#141414] underline underline-offset-4 decoration-2"
                    : ""
                }`}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link href="/Contactus">
          <div className="hidden lg:flex items-center gap-[6px]">
            <p className="text-[#141414] font-aeonik leading-[19.2px]">
              Schedule Your Consultation
            </p>
            <DirectionRight className="size-[20px] text-[#141414]" />
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden block" onClick={toggleMobileNav}>
          {isMobileNavOpen ? (
            <RemoveThin className="size-[24px]" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
          <div className="flex justify-between items-center shadow-sm px-[20px] py-[13px]">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664482/abiodun/cgivsxxwf8qcl5wcfmos.png"
                alt="logo"
                width={26.36}
                height={42}
                className="w-[26.36px] h-[42px]"
              />
            </Link>
            <div onClick={toggleMobileNav}>
              <RemoveThin className="size-[24px]" />
            </div>
          </div>
          <nav className="mt-[52px] px-[16px]">
            <ul className="space-y-[33px] font-aeoniklight text-[#2F2F2F] leadng-[26.4px] text-[22px]">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between items-center"
                >
                  <Link
                    href={item.path}
                    onClick={toggleMobileNav} // Close menu on click
                  >
                    <span>{item.name}</span>
                  </Link>
                  <Link
                    href={item.path}
                    onClick={toggleMobileNav} // Close menu on click
                  >
                    <ArrowRight className="size-[22px]" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/Contactus" onClick={toggleMobileNav}>
            <div className="absolute bottom-10 mt-[222px] left-0 w-full px-[20px]">
              <button className="w-full bg-black rounded-[12px] py-[16.5px] text-white font-aeonikmedium leading-[19.2px]">
                Schedule your consultation
              </button>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
