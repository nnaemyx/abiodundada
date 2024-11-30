import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import CEOimage from "../../images/CEO.png";
import Babajide from "../../images/babajide.png";
import Samuel from "../../images/Frame 2087328176-5.png";
import Femi from "../../images/Frame 2087328176-9.png";
import Grace from "../../images/Frame 2087328176-1.png";
import Zeenat from "../../images/Frame 2087328176-3.png";
import Damilola from "../../images/Frame 2087328176-4.png";
import Mumminat from "../../images/Frame 2087328176-2.png";
import Folakemi from "../../images/Frame 2087328176-7.png";
import Esther from "../../images/Frame 2087328176-10.png";
import Nafui from "../../images/Frame 2087328176-6.png";
import Lawal from "../../images/Frame 2087328176-8.png";

const Advocacy = () => {
  const scrollAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <div className="flex gap-[68px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={scrollAnimation}
        >
          <div className="max-w-[461px]">
            <h2 className="text-[#F5F5F5] text-[56px] font-gobold leading-[78.4px]">
              THE MINDS BEHIND YOUR ADVOCACY
            </h2>
            <p className="text-[#ACACAC] mt-[12px] text-[18px] leading-[27px] font-aeoniklight tracking-[-1%]">
              Get to know the experienced professionals committed to guiding you
              through every step with care and expertise.
            </p>
          </div>

          <div className="max-w-[707px] mt-[104px]">
            <h2 className="text-[#F5F5F5] text-[26px] font-aeonilkmedium leading-[31.2px] tracking-[-3%]">
              Meet Chief Ebenezer Abiodun Dada, Esq., MCIArb(UK)
            </h2>
            <p className="text-[#DCDCDC] text-[18px] font-aeoniklight leading-[21.6px] tracking-[-1%] mt-[12px]">
              Guiding Excellence in Nigerian Law for Over Two Decades
            </p>
            <p className="mt-[36px] text-[18px] font-aeoniklight text-[#DCDCDC] ">
              <span className="text-[#F6F6F6] font-aeonikmedium">
                Chief Ebenezer Abiodun Dada, Esq., MCIArb(UK)
              </span>
              , is not only a distinguished Barrister and Solicitor but a
              respected leader who has dedicated over two decades to upholding
              the highest standards of legal practice in Nigeria. With a career
              that spans pivotal roles in legal advocacy, advisory positions for
              prominent organizations, and unwavering commitment to the
              community, he has built a legacy rooted in integrity,
              professionalism, and compassion.
            </p>
            <p className="mt-[36px] text-[18px] font-aeoniklight text-[#DCDCDC] ">
              From founding Abiodun Dada & Co. to serving in leadership roles
              within the Nigerian Bar Association, Chief Dada’s journey is one
              of resilience, dedication, and excellence. His contributions have
              shaped both the legal landscape and the lives of countless clients
              who rely on his counsel and guidance.
            </p>
          </div>

          <div className="mt-[48px]">
            <button className="bg-white rounded-[12px] py-[14.5px] px-[36px] text-black font-aeonikmedium leading-[19.2px]">
              Know more about the CEO
            </button>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={scrollAnimation}
        >
          <Image src={CEOimage} alt="CEO's picture" width={529} height={793} />
        </motion.div>
      </div>

      <motion.div
        className="mt-[120px]"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        variants={scrollAnimation}
      >
        <div className="flex lg:flex-row flex-col gap-[28px]">
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Babajide}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Babajide Omokore, Esq.
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Head of Chambers
              </p>
            </div>
          </div>
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Samuel}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Samuel Iyanu Ola Esq.
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Advocate
              </p>
            </div>
          </div>
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image src={Femi} alt="babajide image" width={400} height={400} />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Femi Olorunfemi Samuel Segun, Esq.
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Advocate
              </p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-[28px] mt-[64px]">
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Grace}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Adebayo, Grace Oluwafunmibi, Esq.
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Advocate
              </p>
            </div>
          </div>
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Zeenat}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Zeenat Zakari, Esq.
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Advocate
              </p>
            </div>
          </div>
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Damilola}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Damilola Dorcas Ojo, Esq.
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Advocate
              </p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-[28px] mt-[64px]">
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Mumminat}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                AbdulSalam Adebukola Muminat
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Office Manager
              </p>
            </div>
          </div>
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Folakemi}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Oladipupo Folakemi Olajumoke
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Librarian
              </p>
            </div>
          </div>
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Esther}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Adeniran Folashade Esther
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Secretary
              </p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-[28px] mx-auto justify-center mt-[64px]">
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Nafui}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Sulaiman Nafiu Bolakale SNB
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                IT Manager
              </p>
            </div>
          </div>
          <div className="bg-[#141414] rounded-[12px] max-w-[416px]">
            <div className="px-[8px] pt-[8px]">
              <Image
                src={Lawal}
                alt="babajide image"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-[22px] pl-[20px] pb-[20px]">
              <h2 className="text-[#F5F5F5] font-aeonikmedium text-[20px] leading-[24px] tracking-[-3%]">
                Lawal AbdulWahab Abiodun
              </h2>
              <p className="text-[#ACACAC] mt-[8px] font-aeoniklight text-[18px] leading-[21.6px] tracking-[-1%]">
                Office Assistant
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Advocacy;
