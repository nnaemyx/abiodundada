"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import AnimatedText from "@/utils/AnimatedText";
import Aboutus from "../app/images/Hero Section.png";
import CTO from "../app/images/Contact or CTA.png";
import MobileCTO from "../app/images/Mobile Contact or CTA.png";
import CEO from "./images/Frame 2087328337.png";
import Babajide from "./images/Frame 2087328346.png";
import Femi from "./images/Frame 2087328348.png";
import Samuel from "./images/Frame 2087328346-1.png";
import Grace from "./images/Frame 2087328345.png";
import Zeenat from "./images/Frame 2087328347.png";
import Damilola from "./images/Frame 2087328347-1.png";
import Advocacy from "./components/Homepage/Advocacy";
import Client from "./components/Homepage/Client";
import ContactForm from "./components/Homepage/ContactForm";
import Link from "next/link";

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

const scrollAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
export default function Home() {
  return (
    <div className="">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        variants={scrollAnimation}
        className="w-full max-w-[361px] sm:px-[16px] px-[16px] sm:max-w-[839px] mx-auto"
      >
        <div className="lg:mt-[90px] mt-[60px] text-center">
          <AnimatedText
            text="YOUR LEGAL PARTNERS IN "
            className="font-bold text-black md:text-[76px] lg:text-[66px] lg:leading-[86.4px] text-[30px] max-w-full mx-auto leading-[54px] md:leading-[106.4px]"
          />
          <AnimatedText
            text="JUSTICE AND RESOLUTION "
            className="font-bold text-black md:text-[76px] lg:text-[66px] lg:leading-[86.4px] text-[30px] max-w-full mx-auto leading-[54px] md:leading-[106.4px]"
          />
        </div>
        <p className="font-aeoniklight tracking-[-3%] lg:tracking-[-1%] lg:max-w-[591px] mx-auto text-[#595959] leading-[28.8px] lg:leading-[27px] mt-[16px] text-center font-[400] lg:text-[16px]">
          With a steadfast dedication to integrity and client-centered advocacy,
          we provide the support and counsel you need to navigate today’s legal
          landscape.
        </p>
        <Link href="/Contactus">
          <button className="rounded-[12px] w-full lg:w-auto bg-black text-white py-[14.5px] px-[28px] font-aeonikmedium leading-[19.2px] mx-auto justify-center flex mt-[24px]">
            Get expert legal advice
          </button>
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        variants={scrollAnimation}
        className="py-[100px] px-4 w-full md:px-8 lg:px-[68px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={scrollAnimation}
          className="flex flex-col lg:flex-row gap-4 justify-center lg:gap-[16px] items-center lg:items-start"
        >
          {/* CEO Image */}
          <div className="">
            <Image src={CEO} alt="founder picture" className="w-full lg:max-w-[560px] lg:h-[670px] h-auto" />
          </div>

          {/* Grid of Smaller Images */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
            <Image
              src={Babajide}
              alt="founder picture"
              className="w-full h-auto lg:h-[327px] lg:max-w-[232px]"
            />
            <Image
              src={Zeenat}
              alt="founder picture"
              className="w-full h-auto lg:h-[327px] lg:max-w-[232px]"
            />
            <Image
              src={Femi}
              alt="founder picture"
              className="w-full h-auto lg:h-[327px] lg:max-w-[232px]"
            />
            <Image
              src={Grace}
              alt="founder picture"
              className="w-full h-auto lg:h-[327px] lg:max-w-[232px]"
            />
            <Image
              src={Samuel}
              alt="founder picture"
              className="w-full h-auto lg:h-[327px] lg:max-w-[232px]"
            />
            <Image
              src={Damilola}
              alt="founder picture"
              className="w-full h-auto lg:h-[327px] lg:max-w-[232px]"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        variants={scrollAnimation}
        className="py-[100px] w-full px-[16px] md:px-[68px]"
      >
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center xl:justify-between xl:items-center">
          <div>
            <h2 className="capitalize lg:max-w-[351px] text-[#222723] font-gobold text-[32px] lg:text-[44px] lg:leading-[68.4px] md:text-[56px] leading-[44.8px] md:leading-[78.4px]">
              BUILT ON TRUST, PROVEN BY RESULTS
            </h2>
          </div>

          <div className="flex sm:flex-row flex-col mt-[60px] space-y-[60px] sm:space-y-0 lg:mt-0 ">
            <div className="md:text-right">
              <AnimatedNumbers
                value={20}
                className="text-[#222723] font-gobold text-[44px] lg:text-[36px] md:text-[56px] leading-[61.6px] lg:leading-[52.24px] md:leading-[72.24px]"
              />
              <span className="text-[#222723] font-gobold text-[44px] lg:text-[36px] md:text-[56px] leading-[61.6px] lg:leading-[52.24px] md:leading-[72.24px]">
                +
              </span>
              <p className="text-[#595959] font-aeoniklight lg:text-[16px] md:text-[18px] mt-[10px] tracking-[-1%] leading-[21.6px]">
                Years of experience
              </p>
            </div>

            <div className="sm:ml-[68px] md:text-right">
              <AnimatedNumbers
                value={8}
                className="text-[#222723] font-gobold text-[44px] lg:text-[36px] md:text-[56px] leading-[61.6px] lg:leading-[52.24px] md:leading-[72.24px]"
              />
              <span className="text-[#222723] font-gobold text-[44px] lg:text-[36px] md:text-[56px] leading-[61.6px] lg:leading-[52.24px] md:leading-[72.24px]">
                +
              </span>
              <p className="text-[#595959] font-aeoniklight md:text-[18px] lg:text-[16px] mt-[10px] tracking-[-1%] leading-[21.6px]">
                Practicing lawyers
              </p>
            </div>

            <div className="sm:ml-[58px] md:text-right">
              <AnimatedNumbers
                value={1000}
                className="text-[#222723] font-gobold text-[44px] lg:text-[36px] md:text-[56px] leading-[61.6px] lg:leading-[52.24px] md:leading-[72.24px]"
              />
              <span className="text-[#222723] font-gobold text-[44px] lg:text-[36px] md:text-[56px] leading-[61.6px] md:leading-[72.24px] lg:leading-[52.24px]">
                +
              </span>
              <p className="text-[#595959] font-aeoniklight md:text-[18px] lg:text-[16px] mt-[10px] tracking-[-1%] leading-[21.6px]">
                Matters and transactions
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <section className="sm:py-[100px] py-[80px] md:px-[68px] bg-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={scrollAnimation}
          className="px-[16px] "
        >
          <h2 className="text-white font-gobold text-[32px] sm:text-[36px] leading-[44.8px] sm:leading-[58.4px] max-w-[301px]">
            Welcome to Abiodun Dada & Co.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={scrollAnimation}
          className="mt-[48px] max-w-[815px] px-[16px] flex flex-col ml-auto"
        >
          <div className="mr-[40px]">
            <p className="text-white font-aeoniklight sm:text-[18px] leading-[28.8px] text-[18px] sm:leading-[34.8px] tracking-[-3%] sm:tracking-[-0.5%]">
              At Abiodun Dada & Co., we’re not just legal practitioners—we’re
              dedicated advocates, strategic partners, and meticulous advisors
              committed to safeguarding your interests. Founded on principles of
              integrity, diligence, and innovation, we offer unparalleled legal
              expertise across diverse practice areas, from commercial
              arbitration to civil and criminal litigation. Our team combines a
              wealth of experience with a client-centered approach, ensuring
              that each case receives our undivided attention and highest
              standards of professionalism.
            </p>
            <p className="mt-[40px] text-white font-aeoniklight sm:text-[18px] leading-[28.8px] text-[18px] sm:leading-[34.8px] tracking-[-3%] sm:tracking-[-0.5%]">
              With a presence in key locations throughout Nigeria, including
              Ilorin, Lagos, and Abuja, our firm is equipped to handle complex
              legal challenges, adapt to an evolving landscape, and deliver
              solutions that serve your unique needs. We invite you to learn
              more about our team’s history, values, and track record of
              success.
            </p>
          </div>
          <Link href="/Aboutus">
            <div className="self-start mt-[40px] hidden md:block">
              <button className="bg-white text-[#141414] leading-[19.2px] px-[36px] py-[14.5px] rounded-[8px] font-aeonikmedium">
                Read more about us
              </button>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={scrollAnimation}
          className="mt-[80px]"
        >
          <Image src={Aboutus} alt="company photo" className="w-full" />
          <Link href="/Aboutus">
            <div className="self-start mt-[60px] px-[16px] md:hidden block">
              <button className="bg-white w-full text-[#141414] leading-[19.2px] px-[36px] py-[14.5px] rounded-[8px] font-aeonikmedium">
                Read more about us
              </button>
            </div>
          </Link>
        </motion.div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        variants={scrollAnimation}
        className="md:py-[100px] py-[80px] px-[16px] md:px-[68px]"
      >
        <div className="flex lg:flex-row lg:items-center flex-col justify-between">
          <div className="max-w-[491px]">
            <h2 className="font-gobold text-[32px] md:text-[36px] leading-[44.8px] md:leading-[58.4px]">
              Comprehensive Expertise Across Diverse Legal Fields
            </h2>
          </div>

          <div className="max-w-[453px] xl:mt-0 mt-[24px] lg:mt-0 md:mt-[24px]">
            <p className="font-aeoniklight text-[16px] text-[#595959] leading-[27px] md:leading-[28.8px] tracking-[-1%]">
              Our firm offers specialized legal solutions across a wide range of
              practice areas, providing the experience and insight you need to
              navigate complex challenges confidently.
            </p>
          </div>
        </div>
        <div className="md:mt-[100px] mt-[60px] w-full">
          {/* Grid Layout */}
          <div className="grid md:gap-[52px] gap-[31px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="max-w-[400px] w-full">
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664477/abiodun/b9kvkux1wlpv85ejo2gj.png"
                alt="commercial logo"
                width={51.84}
                height={52}
              />
              <div className="mt-[28px]">
                <h2 className="text-[#2F2F2F] font-aeonikmedium text-[20px] md:text-[20px] leading-[24px] md:leading-[26.4px] tracking-[-1%]">
                  Commercial Arbitration
                </h2>
                <p className="mt-[12px] text-[#595959] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-1%]">
                  We specialize in resolving business disputes outside of court,
                  we provide effective arbitration services to protect your
                  commercial interests.
                </p>
              </div>
            </div>
            <div className="max-w-[400px] w-full">
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664478/abiodun/xjhqsexxwn4bo5zckla1.png"
                alt="commercial logo"
                width={51.84}
                height={52}
              />
              <div className="mt-[28px]">
                <h2 className="text-[#2F2F2F] font-aeonikmedium text-[20px] md:text-[20px] leading-[24px] md:leading-[26.4px] tracking-[-1%]">
                  Election Petition
                </h2>
                <p className="mt-[12px] text-[#595959] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-1%]">
                  Ensuring electoral justice by challenging and defending
                  election outcomes in pursuit of fairness and transparency.
                </p>
              </div>
            </div>
            <div className="max-w-[400px]">
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664481/abiodun/jvfz8ylmafhiokfpxpre.png"
                alt="commercial logo"
                width={51.84}
                height={52}
              />
              <div className="mt-[28px]">
                <h2 className="text-[#2F2F2F] font-aeonikmedium text-[20px] md:text-[20px] leading-[24px] md:leading-[26.4px] tracking-[-1%]">
                  Civil and Criminal Litigation
                </h2>
                <p className="mt-[12px] text-[#595959] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-1%]">
                  Representing clients in civil disputes and criminal cases,
                  delivering strong advocacy and defense across various legal
                  issues.
                </p>
              </div>
            </div>
            <div className="max-w-[400px]">
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664476/abiodun/o8phcyzv8ju9nugcvwud.png"
                alt="commercial logo"
                width={51.84}
                height={52}
              />
              <div className="mt-[28px]">
                <h2 className="text-[#2F2F2F] font-aeonikmedium text-[20px] md:text-[20px] leading-[24px] md:leading-[26.4px] tracking-[-1%]">
                  Maritime Law
                </h2>
                <p className="mt-[12px] text-[#595959] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-1%]">
                  Handling legal matters related to shipping, navigation, and
                  marine activities, including disputes over maritime commerce.
                </p>
              </div>
            </div>
            <div className="max-w-[400px]">
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664477/abiodun/oxyusma1ns3riqvmoqmj.png"
                alt="commercial logo"
                width={51.84}
                height={52}
              />
              <div className="mt-[28px]">
                <h2 className="text-[#2F2F2F] font-aeonikmedium text-[20px] md:text-[20px] leading-[24px] md:leading-[26.4px] tracking-[-1%]">
                  Taxation Law
                </h2>
                <p className="mt-[12px] text-[#595959] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-1%]">
                  Providing expert guidance on tax compliance, disputes, and
                  planning for businesses and individuals.
                </p>
              </div>
            </div>
            <div className="max-w-[400px]">
              <Image
                src="https://res.cloudinary.com/mmainspire/image/upload/v1732664477/abiodun/gsvzwunuezmcejrebyrn.png"
                alt="commercial logo"
                width={51.84}
                height={52}
              />
              <div className="mt-[28px]">
                <h2 className="text-[#2F2F2F] font-aeonikmedium text-[20px] md:text-[20px] leading-[24px] md:leading-[26.4px] tracking-[-1%]">
                  Financial Law
                </h2>
                <p className="mt-[12px] text-[#595959] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-1%]">
                  Advising on banking, investment, and financial transactions to
                  help clients navigate complex financial regulations securely.
                </p>
              </div>
            </div>
          </div>

          <Link href="/Contactus">
            <div className="mt-[72px] mx-auto text-center">
              <button className="bg-[#141414] w-full md:w-auto rounded-[12px] px-[36px] py-[14.5px] font-aeonikmedium leading-[19.2px] tracking-[-1%] text-white mx-auto">
                Schedule a call
              </button>
            </div>
          </Link>
        </div>
      </motion.div>

      <section className="py-[80px] md:py-[100px] bg-black">
        <Advocacy />
      </section>
      <section className="md:px-[68px] px-[16px] py-[100px]">
        <Client />
      </section>
      <section className="md:p-[20px] bg-black">
        <div className="flex lg:flex-row flex-col justify-center gap-[109px] items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={scrollAnimation}
            className="lg:max-w-[402px] pt-[80px] md:pt-0 md:px-0 px-[16px]"
          >
            <h2 className="md:text-[36px] text-[32px]  mx-auto md:w-auto text-center md:text-left text-[#F5F5F5] leading-[44.8px] md:leading-[52.8px] font-gobold">
              YOUR LEGAL SOLUTION STARTS HERE
            </h2>
            <p className="mt-[16px] text-[#DCDCDC] text-center md:text-left font-aeoniklight text-[16px] leading-[28.8px] tracking-[-3%]">
              Ready to take decisive action? Let our experienced team guide you
              to the resolution you deserve.
            </p>
            <Link href="/Contactus">
              <button className="bg-white hidden lg:block rounded-[12px] mt-[24px] py-[14.5px] px-[36px] text-[#141414] font-aeonikmedium leading-[19.2px]">
                Let&apos;s Discuss our Case
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={scrollAnimation}
            className="hidden lg:block"
          >
            <Image src={CTO} alt="cto image" width={700} height={657} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={scrollAnimation}
            className="lg:hidden block"
          >
            <Image src={MobileCTO} alt="cto image" className="w-full mx-auto" />
          </motion.div>

          <div className="w-full pb-[80px] lg:hidden block md:pb-0 md:px-0 px-[16px]">
            <button className="bg-white   w-full rounded-[12px] mt-[52px] py-[14.5px] px-[36px] text-[#141414] font-aeonikmedium leading-[19.2px]">
              Let&apos;s Discuss our Case
            </button>
          </div>
        </div>
      </section>
      <section>
        <ContactForm />
      </section>
    </div>
  );
}
