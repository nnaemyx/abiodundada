"use client";

import React from "react";
import AboutHero from "../images/About Hero Section.png";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className=""
    >
      {/* Header Section */}
      <motion.div
        className="mt-[60px] px-[16px]"
        variants={itemVariants}
      >
        <p className="font-gobold text-[36px] leading-[46.44px]">FIRM PROFILE</p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="w-full mt-[48px]"
        variants={itemVariants}
      >
        <Image
          src={AboutHero}
          alt="firm image"
          className="w-[393px] mx-auto"
        />
      </motion.div>

      {/* About Us Section */}
      <motion.div
        className="mt-[40px] px-[16px]"
        variants={itemVariants}
      >
        <h2 className="font-gobold text-[#9F9F9F] text-[20px] leading-[26px] tracking-[-4%]">
          ABOUT US
        </h2>
        <motion.div
          className="mt-[20px] space-y-[20px] text-[#2F2F2F]"
          variants={containerVariants}
        >
          {[
            "ABIODUN DADA & CO. is a firm of Legal Practitioners with its Head Office at Temitope Chambers...",
            "ABIODUN DADA & CO. is a composite firm of Legal Practitioners aimed at providing a wide range of legal services...",
            "The Firm equally engages in the preparation of all forms of legal documents such as general contracts...",
            "ABIODUN DADA & CO. operates in all major cities in Nigeria, including Ilorin, Lagos, and the Federal Capital Territory...",
            "We strongly believe that our successes are founded on the strong values we bring to our professional obligations...",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="font-aeoniklight text-[18px] leading-[28.8px] tracking-[-0.5%]"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default page;
