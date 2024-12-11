"use client";

import React from "react";
import AboutHero from "../images/About Hero Section.png";
import DesktopAboutHero from "../images/Desktop Hero Section.png";
import InsideAbout from "../images/Hero Section (1).png";
import DesktopInsideAbout from "../images/DesktopHero Section.png"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const page = () => {
  const clients = [
    "Landmark University, Omu-Aran, Kwara State",
    "Kwara State Polytechnic, Ilorin, Kwara State",
    "Nigerian Army Services",
    "Nigerian Immigration Services, Ilorin Office",
    "Best Mate Furniture Nigeria Ltd., Ilorin",
    "The Trustees of Living Faith Church, Ilorin, Kwara State",
    "Modern Morgy and Sons Limited",
    "First Bank of Nigeria Plc",
    "Micro Finance Bank Ltd., Osi, Kwara State",
    "Ekiti Local Government Council",
    "Kwara State Government (Office of the Attorney General and Commissioner of Justice)",
  ];
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
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
        className="mt-[60px] lg:px-[120px] px-[16px]"
        variants={itemVariants}
      >
        <p className="font-gobold text-[36px] lg:leading-[83.2px] lg:text-[44px] leading-[46.44px]">
          FIRM PROFILE
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="w-full mt-[48px] lg:hidden block"
        variants={itemVariants}
      >
        <Image
          src={AboutHero}
          alt="firm image"
          className="max-w-[393px] w-full mx-auto"
        />
      </motion.div>

      <motion.div
        className="w-full mt-[48px] hidden lg:block"
        variants={itemVariants}
      >
        <Image
          src={DesktopAboutHero}
          alt="firm image"
          className="max-w-[1440px] xl:min-w-[1440px] w-full mx-auto"
        />
      </motion.div>

      {/* About Us Section */}
      <motion.div
        className="mt-[40px] lg:mt-[80px] px-[16px] md:px-[120px] flex lg:gap-[60px] lg:flex-row flex-col"
        variants={itemVariants}
      >
        <h2 className="font-gobold lg:hidden block text-[#9F9F9F] text-[20px] leading-[26px] tracking-[-4%]">
          ABOUT US
        </h2>
        <h2 className="font-gobold hidden lg:block text-[#9F9F9F] text-[18px] leading-[26px] tracking-[-4%]">
          Introduction
        </h2>
        <motion.div
          className="mt-[20px] lg:mt-0 lg:max-w-[1038px] space-y-[20px] text-[#2F2F2F]"
          variants={containerVariants}
        >
          {[
            "ABIODUN DADA & CO. is a firm of Legal Practitioners with its Head Office at Temitope Chambers, Temitope House, No. 8, Venerable Adefila Street, Lajorin, G.R.A., Ilorin, Kwara State of Nigeria and an Abuja Office at Suite 36 and 37, 2nd Floor, Yasuha Plaza (Behind AP Plaza), Plot 1046, Adetokunbo Ademola Crescent, Wuse II, Abuja. The law firm was registered on the 8th day of November, 2007 with the Corporate Affairs Commission (CAC), the agency of the Federal Government of Nigeria responsible for the registration and incorporation of companies in Nigeria.",
            "ABIODUN DADA & CO. is a composite firm of Legal Practitioners aimed at providing a wide range of legal services to individuals, organizations, corporate bodies, etc. It is pertinent to state further that ABIODUN DADA & CO. offers high-quality service, stemming from the quality of counsel and supporting staff in the Law Firm. The Firm has a full complement of Computer Literate Secretaries, Litigation Clerks, Librarian, Accountant, Receptionists, Office Assistants, etc., and indeed dedicated Legal Practitioners specializing in the practice of all aspects of Commercial Arbitration, Election Petition, Civil and Criminal Litigation, Maritime, Taxation, Oil and Gas, Financial Law, and Insurance, to mention but a few.",
            "The Firm equally engages in the preparation of all forms of legal documents such as general contracts, agreements, banking instruments, mortgages, debentures, power of attorney, receivership, and other allied documents. We also represent the interests of our valued Clients in Court for various purposes, including the recovery of debts, prosecuting for and on behalf of, and defending our Clients in the Court of law.",
            "ABIODUN DADA & CO. operates in all major cities in Nigeria, including Ilorin, Lagos, and the Federal Capital Territory, Abuja, with its Head Office located at Temitope Chambers, Temitope House, No. 8, Venerable Adefila Street, Lajorin, G.R.A., Ilorin, Kwara State of Nigeria. The Firm has been involved in and continues to engage in landmark cases and provide considerable legal services such as Land Matters, Mortgage Cases, Election Petition Cases, Garnishee Proceedings/Recovery of Debts, etc. Our clients include but are not limited to: Landmark University, Omu-Aran, Kwara State; Kwara State Polytechnic, Ilorin, Kwara State; Nigerian Army Services; Nigerian Immigration Services, Ilorin Office; Best Mate Furniture Nigeria Ltd., Ilorin; The Trustees of Living Faith Church, Ilorin, Kwara State; Modern Morgy and Sons Limited; First Bank of Nigeria Plc; Micro Finance Bank Ltd., Osi, Kwara State; Ekiti Local Government Council; high patronage from the Kwara State Government through the Office of the Attorney General and Commissioner of Justice, to mention but a few.",
            "We strongly believe that our successes are founded on the strong values we bring to our professional obligations as contained in our professional ethics. In addition, our team-oriented culture and unique Client Account management have resulted in continuous trust in the Law Firm by our Clients. The trust enjoyed by our Clients has endeared them to the Firm, thereby opening opportunities for us among Law Firms in the cities.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="font-aeoniklight text-[16px] leading-[26.8px] tracking-[-0.5%]"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
      <motion.div variants={itemVariants} className="mt-[100px] lg:mt-[126px] flex lg:flex-row flex-col px-[16px] md:px-[120px] lg:gap-[33px]">
        <div>
          <h2 className="font-gobold text-[#9F9F9F] text-[18px] leading-[26px] tracking-[-4%]">
            CLIENT PORTFOLIO
          </h2>
          <p className="mt-[20px] font-aeoniklight lg:hidden block text-[18px] leading-[28.8px]">
            A clear list of the client portfolio for ABIODUN DADA & CO.:
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-[20px] lg:mt-0">
          <p className="hidden lg:block font-aeoniklight text-[16px] leading-[28.8px]">
            A clear list of the client portfolio for ABIODUN DADA & CO.:
          </p>
          {clients.map((client, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Dot */}
              <span className="w-2 h-2 bg-[#2F2F2F] rounded-full flex-shrink-0"></span>
              {/* Client Name */}
              <p className="text-[16px] leading-[28.8px] tracking-[-0.5%] text-[#2F2F2F] font-aeoniklight">
                {client}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="mt-[100px] md:px-[120px] lg:mt-[120px]">
        <h2 className="px-[16px] lg:px-0 font-gobold text-[36px] leading-[46.44px] md:w-auto lg:leading-[83.2px] lg:text-[44px] w-[361px]">
          INSIDE ABIODUN DADA & CO.
        </h2>
        <div className="mt-[40px] mx-auto lg:hidden block">
          <Image
            src={InsideAbout}
            alt="about abiodun image"
            className="max-w-[393px] w-full mx-auto"
          />
        </div>
        <div className="mt-[40px] mx-auto hidden lg:block">
          <Image
            src={DesktopInsideAbout}
            alt="about abiodun image"
            className="min-w-[393px] w-full mx-auto"
          />
        </div>

        <Link href="/">
          <div className="mt-[80px] px-[16px] mx-auto lg:px-0 mb-[126px]">
            <button className="rounded-[12px] bg-black lg:flex lg:justify-center text-white w-full lg:w-[256px] mx-auto py-[16.5px] font-aeonikmedium leading-[19.2px]">
              Return to Homepage
            </button>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default page;
