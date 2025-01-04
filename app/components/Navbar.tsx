"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RemoveThin, ArrowRight } from "react-huge-icons/solid";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/Aboutus" },
    { name: "The Team", path: "/Team" },
    { name: "Contact Us", path: "/Contactus" },
  ];

  return (
    <>
      {/* Navbar */}
      <div
        className={`lg:px-[68px] px-[20px] lg:py-[24px] py-[13px] w-full flex justify-between lg:justify-center items-center gap-[16px] sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-transparent" : "bg-white"
        }`}
      >
        {/* Logo */}
        <div
          className={`rounded-full border border-solid py-[13px] px-[21px] ${
            isScrolled ? "bg-white" : ""
          }`}
        >
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/mmainspire/image/upload/v1732664482/abiodun/cgivsxxwf8qcl5wcfmos.png"
              alt="logo"
              width={26.15}
              height={42}
              className="lg:w-[26.15px] lg:h-[42px] w-[26.36px] h-[42px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-[40px] pl-[24px] pr-[10px] py-[10px] border border-solid rounded-[1000px] ${
            isScrolled ? "bg-white" : ""
          }`}
        >
          <ul className="flex gap-[32px] font-aeonik text-[14px] font-medium text-[#747474]">
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
          {/* CTA */}
          <Link href="/Contactus">
            <div className="hidden lg:flex items-center py-[14.5px] px-[28px] rounded-[1000px] bg-black text-white">
              <p className="text-white font-aeonikmedium leading-[19.2px]">
                Schedule a call
              </p>
            </div>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className={`lg:hidden flex items-center gap-[20px] py-[10px] pl-[10px] pr-[24px] rounded-full border border-solid ${isScrolled ? "bg-white" : ""}` }
          onClick={toggleMobileNav}
        >
          <Link href="/Contactus">
            <div className="items-center py-[14.5px] px-[28px] rounded-[1000px] bg-black text-white">
              <p className="text-white text-[14px] font-aeonikmedium leading-[19.2px]">
                Schedule a call
              </p>
            </div>
          </Link>
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
            <div className="rounded-full border border-solid py-[13px] px-[21px]">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/mmainspire/image/upload/v1732664482/abiodun/cgivsxxwf8qcl5wcfmos.png"
                  alt="logo"
                  width={26.15}
                  height={42}
                  className="lg:w-[26.15px] lg:h-[42px] w-[26.36px] h-[42px]"
                />
              </Link>
            </div>
            <div
              onClick={toggleMobileNav}
              className="rounded-full p-[24px] border border-solid"
            >
              <RemoveThin className="size-[24px]" />
            </div>
          </div>
          <nav className="mt-[22px] px-[16px]">
            <ul className="font-aeoniklight text-[#2F2F2F] leadng-[26.4px] text-[18px]">
              {navItems.map((item) => (
                <Link key={item.name} href={item.path}>
                  <li className="flex justify-between items-center mt-[33px]">
                    <div
                      onClick={toggleMobileNav} // Close menu on click
                    >
                      <span>{item.name}</span>
                    </div>
                    <div
                      onClick={toggleMobileNav} // Close menu on click
                    >
                      <ArrowRight className="size-[22px]" />
                    </div>
                  </li>
                </Link>
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
