import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import Contactform from "../../images/contactform.png";
const ContactForm = () => {
  const scrollAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full">
      <div className="relative">
        <Image src={Contactform} alt="Contact form image" className="w-full" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={scrollAnimation}
          className="absolute w-[800px] py-[60px] px-[80px] top-[100px] bottom-[100px] rounded-[12px] left-0 right-0 my-auto mx-auto bg-black z-10"
        >
          <div className="text-center max-w-[446px] mx-auto">
            <h2 className="text-[#F5F5F5] text-[64px] font-gobold leading-[83.2px]">
              REACH OUT TO US!
            </h2>
            <p className="text-[#DCDCDC] font-aeoniklight mt-[16px] text-[18px] leading-[27px] tracking-[-3%]">
              Whether you need advice or are ready to take action, our
              experienced attorneys are here to listen.
            </p>
          </div>

          <form className="mt-[56px] space-y-[36px]">
            <input
              type="text"
              className="bg-[#2B2B2B] rounded-[12px] w-full px-[20px] pt-[17px] pb-[21px] text-[18px] text-[#ACACAC] font-aeoniklight leading-[21.6px] focus:outline-none"
              placeholder="Enter your full name"
            />
            <input
              type="text"
              className="bg-[#2B2B2B] rounded-[12px] w-full px-[20px] pt-[17px] pb-[21px] text-[18px] text-[#ACACAC] font-aeoniklight leading-[21.6px] focus:outline-none"
              placeholder="Enter your email address"
            />
            <input
              type="text"
              className="bg-[#2B2B2B] rounded-[12px] w-full px-[20px] pt-[17px] pb-[21px] text-[18px] text-[#ACACAC] font-aeoniklight leading-[21.6px] focus:outline-none"
              placeholder="What is your inquiry about?"
            />
            <textarea
              className="bg-[#2B2B2B] rounded-[12px] w-full px-[20px] pt-[17px] pb-[21px] text-[18px] text-[#ACACAC] font-aeoniklight leading-[21.6px] focus:outline-none h-[172px]"
              placeholder="Provide details about your case or inquiry"
            />
            <button className="rounded-[12px] bg-white w-full py-[14.5px] text-[#141414] font-aeonikmedium leading-[19.2px]">
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
