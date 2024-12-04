"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import CallIcon from "../images/elements.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Page = () => {
  return (
    <motion.div
      className="mt-[60px] px-[16px] lg:pb-[160px] lg:px-[120px] pb-[126px]"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Header Section */}
      <motion.div variants={fadeIn}>
        <h2 className="font-gobold text-[36px] lg:text-[64px] lg:leading-[83.2px] leading-[44.6px]">CONTACT US</h2>
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row mt-[40px] lg:gap-[60px] gap-[120px]">
        {/* Left Section */}
        <motion.div variants={fadeIn} className="lg:bg-[#F9FAFB] lg:border lg:border-solid lg:border-[#F2F2F2] lg:rounded-[12px] lg:p-[40px]">
          <h2 className="text-[#2F2F2F] font-aeonikmedium text-[22px] leading-[26.4px] tracking-[-1%]">
            Get in touch today
          </h2>
          <p className="mt-[12px] text-[#595959] font-aeoniklight text-[18px] leading-[28.8px]">
            We are committed to understanding your unique needs and offering
            tailored legal solutions.
          </p>
          <motion.form
            className="mt-[40px] space-y-[32px]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Full Name Input */}
            <motion.div className="space-y-[12px]" variants={fadeIn}>
              <label className="text-[#595959] font-aeonikmedium text-[18px] tracking-[-1%] leading-[21.6px]">
                Full name
              </label>
              <input
                type="text"
                className="w-full bg-[#F6F7F8] border border-solid border-[#DCDCDC] font-aeoniklight leading-[19.2px] tracking-[-3%] text-[#747474] rounded-[12px] pt-[16px] pb-[17px] px-[16px] focus:outline-none"
                placeholder="Enter your full name"
              />
            </motion.div>
            {/* Email Input */}
            <motion.div className="space-y-[12px]" variants={fadeIn}>
              <label className="text-[#595959] font-aeonikmedium text-[18px] tracking-[-1%] leading-[21.6px]">
                Email address
              </label>
              <input
                type="email"
                className="w-full bg-[#F6F7F8] border border-solid border-[#DCDCDC] font-aeoniklight leading-[19.2px] tracking-[-3%] text-[#747474] rounded-[12px] pt-[16px] pb-[17px] px-[16px] focus:outline-none"
                placeholder="Enter your email address"
              />
            </motion.div>
            {/* Subject Input */}
            <motion.div className="space-y-[12px]" variants={fadeIn}>
              <label className="text-[#595959] font-aeonikmedium text-[18px] tracking-[-1%] leading-[21.6px]">
                Subject
              </label>
              <input
                type="text"
                className="w-full bg-[#F6F7F8] border border-solid border-[#DCDCDC] font-aeoniklight leading-[19.2px] tracking-[-3%] text-[#747474] rounded-[12px] pt-[16px] pb-[17px] px-[16px] focus:outline-none"
                placeholder="What is your inquiry about?"
              />
            </motion.div>
            {/* Message Input */}
            <motion.div className="space-y-[12px]" variants={fadeIn}>
              <label className="text-[#595959] font-aeonikmedium text-[18px] tracking-[-1%] leading-[21.6px]">
                Message
              </label>
              <textarea
                className="w-full bg-[#F6F7F8] border border-solid border-[#DCDCDC] font-aeoniklight leading-[19.2px] tracking-[-3%] text-[#747474] rounded-[12px] pt-[16px] pb-[17px] px-[16px] h-[141px] focus:outline-none"
                placeholder="Provide details about your case or inquiry"
              />
            </motion.div>
            <motion.button
              className="rounded-[12px] bg-black w-full py-[14.5px] text-white font-aeonikmedium leading-[19.2px]"
              variants={fadeIn}
            >
              Send message
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right Section */}
        <motion.div variants={fadeIn}>
          {/* Head Office Details */}
          <div>
            <h2 className="text-[#2F2F2F] font-aeonikmedium text-[18px] leading-[21.6px] tracking-[-1%]">
              Head Office
            </h2>
            <p className="mt-[12px] text-[#595959] font-aeoniklight text-[18px] leading-[28.8px] tracking-[-1%]">
              Temitope Chambers, Temitope House, No. 8, Venerable Adefila
              Street, Lajorin, G.R.A., Ilorin, Kwara State of Nigeria
            </p>
          </div>
          {/* Additional Sections */}
          <div className="mt-[48px]">
            <h2 className="text-[#2F2F2F] font-aeonikmedium text-[18px] leading-[21.6px] tracking-[-1%]">
              Abuja Office
            </h2>
            <p className="mt-[12px] text-[#595959] font-aeoniklight text-[18px] leading-[28.8px] tracking-[-1%]">
              Suite 36 and 37, 2nd Floor, Yasuha Plaza (Behind AP Plaza) Plot
              1046, Adetokunbo Ademola Crescent, Wuse II, Abuja.
            </p>
          </div>

          <div className="mt-[48px] flex justify-between items-center">
            <div>
              <h2 className="text-[#2F2F2F] font-aeonikmedium text-[18px] leading-[21.6px] tracking-[-1%]">
                Send us an email
              </h2>
              <p className="mt-[12px] text-[#595959] font-aeoniklight text-[18px] leading-[28.8px] tracking-[-1%] underline">
                lawtemitope@gmail.com
              </p>
            </div>
            <div>
              <button className="rounded-[12px] bg-black text-white font-aeonikmedium leading-[19.2px] text-[16px] lg:px-[24px] lg:py-[12.5px] py-[10.5px] px-[16px]">
                Send a mail
              </button>
            </div>
          </div>

          <div className="mt-[48px] space-y-[16px]">
            <h2 className="text-[#2F2F2F] font-aeonikmedium text-[18px] leading-[21.6px] tracking-[-1%]">
              Call us
            </h2>
            <div className="flex justify-between items-center">
              <p className="text-[#595959] font-aeoniklight text-[18px] leading-[28.8px] tracking-[-1%]">
                08035763940
              </p>
              <div className="rounded-[12px] lg:hidden bg-black text-white py-[11px] px-[16px] flex gap-[12px]">
                <p className="font-aeonikmedium leading-[19.2px]">Call</p>
                <Image src={CallIcon} alt="call icon" />
              </div>
              <button className="bg-black rounded-[12px] text-white py-[12.5px] px-[24px] font-aeonikmedium leading-[19.2px] hidden lg:flex">Copy number</button>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-[#595959] font-aeoniklight text-[18px] leading-[28.8px] tracking-[-1%]">
                08055559749
              </p>
              <div className="rounded-[12px] bg-black lg:hidden text-white py-[11px] px-[16px] flex gap-[12px]">
                <p className="font-aeonikmedium leading-[19.2px]">Call</p>
                <Image src={CallIcon} alt="call icon" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page;
