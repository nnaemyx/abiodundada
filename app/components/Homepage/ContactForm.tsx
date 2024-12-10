import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import Contactform from "../../images/contactform.png";
import MobileContactform from "../../images/DSC_0268 1.png";
const ContactForm = () => {
  const scrollAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full">
      <div className="relative">
        <Image src={Contactform} alt="Contact form image" className="w-full hidden lg:block" />
        <Image src={MobileContactform} alt="Contact form image" className="w-full lg:hidden block" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={scrollAnimation}
          className="absolute md:w-[800px] py-[20px] w-[361px] px-[16px] md:px-[80px] top-[80px] md:top-[100px] bottom-[80px] md:bottom-[100px] h-[834px] lg:h-auto rounded-[12px] left-0 right-0 my-auto mx-auto bg-black z-10"
        >
          <div className="text-center md:max-w-[446px] mx-auto">
            <h2 className="text-[#F5F5F5] text-[32px] lg:text-[44px] font-gobold leading-[44.8px] lg:leading-[63.2px]">
              REACH OUT TO US!
            </h2>
            <p className="text-[#DCDCDC] font-aeoniklight mt-[10px] text-[18px] leading-[27px] tracking-[-3%]">
              Whether you need advice or are ready to take action, our
              experienced attorneys are here to listen.
            </p>
          </div>

          <form className="md:mt-[36px] mt-[52px] space-y-[36px]">
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
