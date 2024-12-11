import React from "react";
import {motion} from "framer-motion"

const Client = () => {
  // List of client portfolio items
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

  const scrollAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      variants={scrollAnimation}
      className="flex lg:flex-row flex-col md:items-center justify-between"
    >
      {/* Section Header */}
      <div className="md:text-center mb-6">
        <h2 className="font-gobold md:text-[34px] md:leading-[58.4px] text-[32px] leading-[44.8px]">
          Client Portfolio
        </h2>
      </div>

      {/* Client List */}
      <div className="flex flex-col gap-4">
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
  );
};

export default Client;
