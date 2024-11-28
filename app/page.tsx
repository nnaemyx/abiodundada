"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "@/utils/AnimatedText";
type AnimatedNumbersProps = {
  value: number;
  className?: string;
};

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({
  value,
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.min(latest, value).toFixed(0);
      }
    });
    return () => unsubscribe();
  }, [springValue, value]);

  return (
    <span
      ref={ref}
      className={` ${className}`} // Example TailwindCSS styles
    ></span>
  );
};
export default function Home() {
  return (
    <div className="">
      <div className="w-full max-w-[839px] mx-auto">
        <div className="mt-[90px] text-center">
          <AnimatedText
            text="YOUR LEGAL PARTNERS IN "
            className="font-bold text-black text-[48px] max-w-full mx-auto leading-[56px]"
          />
          <AnimatedText
            text="JUSTICE AND RESOLUTION "
            className="font-bold text-black text-[48px] max-w-full mx-auto leading-[56px]"
          />
        </div>
        <p className="font-aeoniklight tracking-[-1%] max-w-[651px] mx-auto text-[#595959] leading-[27px] mt-[16px] text-center font-[400] text-[18px]">
          With a steadfast dedication to integrity and client-centered advocacy,
          we provide the support and counsel you need to navigate today’s legal
          landscape.
        </p>
        <button className="rounded-[12px] bg-black text-white py-[14.5px] px-[28px] font-aeonik leading-[19.2px] mx-auto justify-center flex mt-[24px]">
          Get expert legal advice
        </button>
      </div>

      <section className="py-[100px] w-full lg:px-[68px]">
        <div className="flex gap-[16px]">
          <div>
            <Image
              src="https://res.cloudinary.com/mmainspire/image/upload/v1732664442/abiodun/sppwpoun0gfybpoglz9r.png"
              alt="founder picture"
              width={560}
              height={750}
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664447/abiodun/iuxmtcbkztu30i9vqjmk.png"
                alt="founder picture"
                width={232}
                height={367}
              />
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664414/abiodun/ouggroaoennoljb2j3b1.png"
                alt="founder picture"
                width={232}
                height={367}
              />
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664471/abiodun/bu1hmtpjc5vmjco4ozhe.png"
                alt="founder picture"
                width={232}
                height={367}
              />
            </div>
            <div className="flex gap-[16px]">
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664433/abiodun/qsfnsiyv3rk5jxmwnroq.png"
                alt="founder picture"
                width={232}
                height={367}
              />
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664426/abiodun/v75fogue9uyk5mphqkqa.png"
                alt="founder picture"
                width={232}
                height={367}
              />
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664475/abiodun/a6gvhn0qbfjxzywrmlqj.png"
                alt="founder picture"
                width={232}
                height={367}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] lg:px-[68px]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="capitalize max-w-[451px] text-[#222723] font-gobold text-[56px] leading-[78.4px]">
              BUILT ON TRUST, PROVEN BY RESULTS
            </h2>
          </div>

          <div className="flex">
            <div className="text-right">
              <AnimatedNumbers
                value={20}
                className="text-[#222723] font-gobold text-[56px] leading-[72.24px]"
              />
              <span className="text-[#222723] font-gobold text-[56px] leading-[72.24px]">
                +
              </span>
              <p className="text-[#595959] font-aeoniklight text-[18px] mt-[10px] tracking-[-1%] leading-[21.6px]">
                Years of experience
              </p>
            </div>

            <div className="ml-[68px] text-right">
              <AnimatedNumbers
                value={8}
                className="text-[#222723] font-gobold text-[56px] leading-[72.24px]"
              />
              <span className="text-[#222723] font-gobold text-[56px] leading-[72.24px]">
                +
              </span>
              <p className="text-[#595959] font-aeoniklight text-[18px] mt-[10px] tracking-[-1%] leading-[21.6px]">
                Practicing lawyers
              </p>
            </div>

            <div className="ml-[58px] text-right">
              <AnimatedNumbers
                value={1000}
                className="text-[#222723] font-gobold text-[56px] leading-[72.24px]"
              />
              <span className="text-[#222723] font-gobold text-[56px] leading-[72.24px]">
                +
              </span>
              <p className="text-[#595959] font-aeoniklight text-[18px] mt-[10px] tracking-[-1%] leading-[21.6px]">
                Matters and transactions
              </p>
            </div>
          </div>

          <h2 className="text-white font-gobold text-[56px] leading-[78.4px] max-w-[471px]">
            Welcome to Abiodun Dada & Co.
          </h2>
        </div>
        <div className="mt-[48px]">
          <p className="text-white font-aeonik text-[28px] leading-[44.8px] tracking-[-0.5%]">
            At Abiodun Dada & Co., we’re not just legal practitioners—we’re
            dedicated advocates, strategic partners, and meticulous advisors
            committed to safeguarding your interests. Founded on principles of
            integrity, diligence, and innovation, we offer unparalleled legal
            expertise across diverse practice areas, from commercial arbitration
            to civil and criminal litigation. Our team combines a wealth of
            experience with a client-centered approach, ensuring that each case
            receives our undivided attention and highest standards of
            professionalism.
          </p>
          <p className="mt-[40px] text-white font-aeonik text-[28px] leading-[44.8px] tracking-[-0.5%]">
            With a presence in key locations throughout Nigeria, including
            Ilorin, Lagos, and Abuja, our firm is equipped to handle complex
            legal challenges, adapt to an evolving landscape, and deliver
            solutions that serve your unique needs. We invite you to learn more
            about our team’s history, values, and track record of success.
          </p>
        </div>
      </section>
    </div>
  );
}
