"use client";

import Image from "next/image";
import React from "react";
import EmployeePicture from "../images/employee photo.png";
import CEOpicture from "../images/Hero Section-1.png";
import DesktopCeo from "../images/Desktop pictures/Employee profile page/Hero Section-1.png";
import Babajide from "../images/Hero Section-2.png";
import DesktopBabajide from "../images/Desktop pictures/Employee profile page/Hero Section-2.png";
import Samuel from "../images/Frame 2087328176.png";
import Grace from "../images/Frame 2087328285.png";
import Abdulrazaq from "../images/Frame 2087328343.png";
import Femi from "../images/Frame 2087328297.png";
import Zeenat from "../images/Frame 2087328291.png";
import Damilola from "../images/Frame 2087328291-1.png";

import { motion } from "framer-motion";
import Link from "next/link";

const awards = [
  {
    organization: "Nigerian Bar Association",
    award: "Meritorious Service Award",
  },
  {
    organization:
      "Kwara Chamber of Commerce, Industry, Mines and Agriculture (KWACCIMA)",
    award: "Appreciation Award",
  },
  {
    organization: "National Association of Nigerian Students (NANS)",
    award: "Induction into the NANS Hall of Fame",
  },
  {
    organization: "Oke-Opin Progressive Union (OPU)",
    award: "Award of Excellence",
  },
  {
    organization: "Students Union, University of Ilorin",
    award: "Award of Honour",
  },
  {
    organization:
      "Zero Tolerance for Social Immoralities Initiative (ZETSI Africa)",
    award: "Patron",
  },
  {
    organization: "ECOWAS Youth Parliament",
    award: "Icon of Humanitarian Service",
  },
  {
    organization: "Kwara State Association of Hairdressers and Cosmetologists",
    award: "Award of Excellence as a Beauty Advocate",
  },
  {
    organization: "Students' Representative Council",
    award: "Icon of Justice",
  },
  { organization: "Kwara State Achievers Forum", award: "Merit Award" },
  {
    organization: "National Association of Kwara State Students (NAKSS)",
    award: "Award of Excellence as an Individual Giant of Honour",
  },
  {
    organization: "National Association of Kwara State Law Students (NAKLAS)",
    award: "Certificate of Credence",
  },
  {
    organization: "College of Arabic and Islamic Studies",
    award: "Award of Recognition and Excellence",
  },
  {
    organization: "Charity and Gender Equality Initiative",
    award: "Award of Excellence",
  },
  {
    organization:
      "National Association of Kwara State Students, University of Ado-Ekiti Chapter",
    award: "Man of the Year",
  },
  {
    organization: "Information Technology Professionals Association (ITPA)",
    award: "Award of Excellence",
  },
];
const awards2 = [
  {
    organization: "Conferred December 24, 2021",
    award: "Baamofin of Obbo-Ile",
  },
  {
    organization: "Conferred December 30, 2021",
    award: "Akeweje of Oke-Opin Land",
  },
  {
    organization: "Conferred December 23, 2023",
    award: "Majeobaje of Anglican Church, Oke-Opin",
  },
  {
    organization: "Conferred December 23, 2023",
    award: "Otun Baamofin of Omu-Aran Land",
  },
  {
    organization: "Agba-Akin of Osi Kingdom",
    award: "Conferred October 26, 2024",
  },
];
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Page = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
      className="mt-[60px] lg:px-[120px]"
    >
      <motion.div className="" variants={fadeIn}>
        <h2 className="pl-[16px] lg:pl-0 font-gobold text-[36px] lg:text-[44px] lg:leading-[83.2px] leading-[46.44px] ">
          OUR TEAM OF ADVOCATES
        </h2>
        <p className="px-[16px] lg:px-0 mt-[20px] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-3%]">
          Our strength lies in our team of skilled and dedicated professionals.
          Abiodun Dada & Co. comprises experienced legal practitioners,
          computer-literate secretaries, litigation clerks, librarians,
          accountants, and office support staff. This structure allows us to
          offer clients a seamless experience and high-quality service tailored
          to meet their needs.
        </p>
        <div className="mt-[48px]">
          <Image
            src={EmployeePicture}
            alt="employee picture"
            className="w-full lg:rounded-[12px]"
          />
        </div>
      </motion.div>
      <div className="mt-[80px]">
        <h2 className="px-[16px] lg:px-0 font-gobold text-[32px] lg:text-[36px] lg:leading-[72.24px]  leading-[48px] w-[361px] lg:w-auto">
          FOUNDER & HEAD OF PRACTICE
        </h2>
        <div className="mt-[40px]">
          <Image
            src={CEOpicture}
            alt="founder picture"
            className="w-full lg:hidden"
          />
          <Image
            src={DesktopCeo}
            alt="founder picture"
            className="w-full lg:block hidden"
          />
        </div>
        <div className="mt-[20px] px-[16px] lg:hidden">
          <h2 className="text-[#1A1A1A] font-aeonikmedium text-[18px] leading-[21.6px] tracking-[-2%]">
            CHIEF EBENEZER ABIODUN DADA Esq., MCIArb(UK)
          </h2>
          <p className="mt-[12px] text-[#595959] font-aeoniklight leading-[19.2px] tracking-[-1%]">
            Founder & Head of Practice
          </p>
        </div>
        <div className="mt-[32px] px-[16px] lg:px-0 flex flex-col lg:flex-row lg:gap-[84px]">
          <h2 className="text-[#9F9F9F] text-[20px] lg:text-[18px] lg:w-[490px]  leading-[26px] font-gobold tracking-[-4%]">
            ABOUT CEO
          </h2>
          <div>
            <div className="mt-[20px] lg:mt-0 space-y-[20px]   text-[#2F2F2F] font-aeoniklight leading-[28.8px] text-[16px] tracking-[-0.5%]">
              <p>
                Chief Ebenezer Abiodun Dada, Esq., MCIArb(UK), is the esteemed
                founder and Head of Practice at Abiodun Dada & Co., a leading
                law firm in Nigeria renowned for its comprehensive legal
                services and unwavering commitment to client success. A highly
                respected Barrister and Solicitor of the Supreme Court of
                Nigeria, known for his dedication to legal excellence,
                integrity, and professional ethics. He began his academic
                journey at Ahmadu Bello University, Zaria, earning his Bachelor
                of Laws degree before completing his legal qualifications at the
                Nigerian Law School. On October 13, 2000, he was admitted to
                practice as a Barrister and Solicitor by the Supreme Court of
                Nigeria.
              </p>
              <p>
                Following his call to the bar, Chief Dada served at the
                prestigious law firm Chief Titus Olasupo Ashaolu, SAN & Co.,
                where he quickly rose to the position of Head of Chambers,
                serving from 2001 to 2007. In 2007, he founded Abiodun Dada &
                Co., guided by his commitment to delivering exceptional legal
                services across a range of practice areas.
              </p>
              <p>
                In addition to his legal practice, Chief Dada has contributed
                significantly to the legal profession through various leadership
                roles. From 2005 to 2007, he served as Assistant General
                Secretary of the Nigerian Bar Association, Ilorin Branch, and
                has been a key member of several NBA committees. His dedication
                extends beyond the legal field; he has served as Member and
                Secretary on the Board of Trustees for Crown-Hill University
                (now Ojaja University), as a Regent on the Board of Landmark
                University, and as a trusted legal adviser to numerous corporate
                organizations. His contributions to community groups and
                corporate bodies have also earned him patronage roles with
                various associations.
              </p>
              <p>
                In recognition of his unwavering commitment to professional
                ethics and service, Chief Dada was appointed as a Notary Public
                by the Chief Justice of Nigeria in 2011. Beyond his legal
                career, he is deeply committed to his faith, having been
                ordained as a Deacon in 2009. A philanthropist and esteemed
                community leader, he holds several chieftaincy titles in honor
                of his service and contributions.
              </p>
              <p>
                As the Head of Practice at Abiodun Dada & Co., Chief Dada
                continues to lead the firm with integrity and dedication,
                fostering an environment of excellence and trust that empowers
                his team and serves his clients with the highest standards of
                legal practice.
              </p>
            </div>
            <div className="lg:flex hidden w-full gap-[165px] mt-[60px]">
              <div className="">
                <h2 className="text-[#9F9F9F] w-[126px] lg:w-auto text-[18px] leading-[28px] font-gobold tracking-[-4%]">
                  AWARDS AND RECOGNITIONS
                </h2>
                <div className="mt-[36px] space-y-[24px]">
                  {awards.map((item, index) => (
                    <motion.div
                      key={index}
                      className="space-y-[6px]"
                      variants={fadeIn}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="leading-[19.2px] text-[#2F2F2F] tracking-[-0.5%] font-aeoniklight">
                        {item.organization}
                      </p>
                      <h2 className="text-[#212121] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-0.5%]">
                        {item.award}
                      </h2>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="">
                <h2 className="text-[#9F9F9F] w-[126px] lg:w-auto text-[18px] leading-[28px] font-gobold tracking-[-4%]">
                  AWARDS AND RECOGNITIONS
                </h2>
                <div className="mt-[36px] space-y-[24px]">
                  {awards2.map((item, index) => (
                    <motion.div
                      key={index}
                      className="space-y-[6px]"
                      variants={fadeIn}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="leading-[19.2px] text-[#2F2F2F] tracking-[-0.5%] font-aeoniklight">
                        {item.organization}
                      </p>
                      <h2 className="text-[#212121] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-0.5%]">
                        {item.award}
                      </h2>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px] lg:hidden px-[16px]">
          <h2 className="text-[#9F9F9F] w-[126px] text-[18px] leading-[28px] font-gobold tracking-[-4%]">
            AWARDS AND RECOGNITIONS
          </h2>
          <div className="mt-[36px] space-y-[24px]">
            {awards.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-[6px]"
                variants={fadeIn}
                transition={{ duration: 0.3 }}
              >
                <p className="leading-[19.2px] text-[#2F2F2F] tracking-[-0.5%] font-aeoniklight">
                  {item.organization}
                </p>
                <h2 className="text-[#212121] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-0.5%]">
                  {item.award}
                </h2>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-[40px] lg:hidden px-[16px]">
          <h2 className="text-[#9F9F9F] w-[126px] text-[18px] leading-[28px] font-gobold tracking-[-4%]">
            AWARDS AND RECOGNITIONS
          </h2>
          <div className="mt-[36px] space-y-[24px]">
            {awards2.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-[6px]"
                variants={fadeIn}
                transition={{ duration: 0.3 }}
              >
                <p className="leading-[19.2px] text-[#2F2F2F] tracking-[-0.5%] font-aeoniklight">
                  {item.organization}
                </p>
                <h2 className="text-[#212121] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-0.5%]">
                  {item.award}
                </h2>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-[100px] lg:mt-[120px]">
          <h2 className="font-gobold text-[32px] lg:text-[36px] lg:leading-[72.24px] leading-[41.28px] lg:px-0 px-[16px]">
            HEAD OF CHAMBERS
          </h2>
          <div className="flex flex-col">
            <div className="mt-[40px]">
              <Image
                src={Babajide}
                alt="Babajide picture"
                className="w-full lg:hidden"
              />
              <Image
                src={DesktopBabajide}
                alt="Babajide picture"
                className="w-full lg:block hidden"
              />
            </div>
            <div className="px-[16px] lg:px-0 mt-[20px]">
              <div className="lg:hidden">
                <h2 className="text-[#1A1A1A] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-2%]">
                  BABAJIDE OMOKORE, ESQ.
                </h2>
                <p className="mt-[12px] text-[#595959] font-aeoniklight leading-[19.2px] tracking-[-1%]">
                  Head of Chambers
                </p>
              </div>
              <div className="mt-[32px]">
                <p className="text-[#2F2F2F] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-0.5%]">
                  BABAJIDE OMOKORE, ESQ., attended the University of Jos from
                  2005 to 2009, where he earned his Bachelor of Laws degree. To
                  fulfill the requirements for practicing as a Barrister and
                  Solicitor in Nigeria, he attended the Nigerian Law School and
                  was called to the Nigerian Bar on November 30, 2010. Driven by
                  a quest for knowledge, he returned to the University of Jos
                  between 2012 and 2014 to complete a Master of Laws (LL.M)
                  program. He currently serves as the Head of Chambers at
                  Abiodun Dada & Co.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[100px] lg:mt-[120px] mb-[126px]">
          <h2 className="px-[16px] lg:hidden font-gobold text-[32px] leading-[41.28px]">
            OTHER ADVOCATES
          </h2>
          <div className="space-y-[80px] lg:space-y-[120px] mt-[40px] lg:mt-0">
            <div className="flex flex-col lg:flex-row lg:gap-[40px] lg:items-center">
              <div>
                <Image
                  src={Abdulrazaq}
                  alt="Abdulrazaq's image"
                  className="lg:rounded-[12px] "
                />
              </div>
              <div className="px-[16px] lg:px-0 lg:mt-0 mt-[20px] lg:max-w-[660px]">
                <div>
                  <h2 className="text-[#1A1A1A] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-2%]">
                    PROF. ABDULRAZAQ O. ABDULKADIR, PhD
                  </h2>
                  <p className="mt-[12px] text-[#595959] font-aeoniklight leading-[19.2px] tracking-[-1%]">
                    Advocate
                  </p>
                </div>
                <div className="mt-[32px] space-y-[20px] text-[#2F2F2F] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-0.5%]">
                  <p>
                    Prof. Abdulrazaq O. Abdulkadir, PhD, is a Barrister and
                    Solicitor of the Supreme Court of Nigeria. He graduated from
                    the University of Ilorin in 2004 with a Second Class Upper
                    Division and proceeded to the Nigerian Law School, where he
                    completed his Bar Part II examination with the same
                    distinction, earning a Second Class Upper Division. He was
                    called to the Nigerian Bar on November 7, 2006.
                  </p>
                  <p>
                    Prof. Abdulkadir furthered his education at Obafemi Awolowo
                    University, Ile-Ife, where he obtained a Master of Laws
                    (LL.M). He later earned his PhD in Law from the
                    International Islamic University Malaysia (IIUM) in January
                    2014.
                  </p>
                  <p>
                    In 2010, Prof. Abdulkadir joined the law firm of Abiodun
                    Dada & Co., where he gained extensive experience in civil,
                    criminal, and election litigation. His passion for
                    litigation has seen him actively involved in numerous cases,
                    ranging from trial courts to the Supreme Court of Nigeria,
                    demonstrating his dedication to the legal profession.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse lg:gap-[40px] lg:items-center">
              <div>
                <Image
                  src={Femi}
                  alt="Femi's image"
                  className="lg:rounded-[12px] lg:max-w-[400px]"
                />
              </div>
              <div className="px-[16px] lg:px-0 lg:mt-0 mt-[20px] lg:max-w-[660px]">
                <div>
                  <h2 className="text-[#1A1A1A] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-2%]">
                    FEMI OLORUNFEMI SAMUEL SEGUN, ESQ.
                  </h2>
                  <p className="mt-[12px] text-[#595959] font-aeoniklight leading-[19.2px] tracking-[-1%]">
                    Advocate
                  </p>
                </div>
                <div className="mt-[32px]">
                  <p className="text-[#2F2F2F] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-0.5%]">
                    FEMI OLORUNFEMI SAMUEL SEGUN, ESQ., attended the University
                    of Ilorin from 2004 to 2008, where he earned his Bachelor of
                    Laws degree. He then proceeded to the Nigerian Law School,
                    Kano Campus, and was called to the Nigerian Bar in 2010. In
                    2013, he completed his Master of Laws (LL.M) degree at the
                    University of Ilorin.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-[40px] lg:items-center">
              <div>
                <Image
                  src={Grace}
                  alt="Samuel's image"
                  className="lg:rounded-[12px] "
                />
              </div>
              <div className="px-[16px] lg:px-0 lg:mt-0 mt-[20px] lg:max-w-[660px]">
                <div>
                  <h2 className="text-[#1A1A1A] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-2%]">
                    ADEBAYO, GRACE OLUWAFUNMIBI, ESQ.
                  </h2>
                  <p className="mt-[12px] text-[#595959] font-aeoniklight leading-[19.2px] tracking-[-1%]">
                    Advocate
                  </p>
                </div>
                <div className="mt-[32px]">
                  <p className="text-[#2F2F2F] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-0.5%]">
                    ADEBAYO, GRACE OLUWAFUNMIBI, ESQ., attended Ekiti State
                    University, Ado-Ekiti, from 2006 to 2012, where she earned
                    her Bachelor of Laws (LL.B.) degree. To fulfil the
                    requirements for legal practice in Nigeria, she attended the
                    Nigerian Law School, obtained her Barrister at Law (B.L.)
                    qualification, and was called to the Nigerian Bar on
                    November 28, 2013. Pursuing further academic excellence,
                    Barrister Adebayo also attended the University of Ibadan
                    from 2015 to 2016, where she completed her Master of Laws
                    (LL.M) degree.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse lg:gap-[40px] lg:items-center">
              <div>
                <Image
                  src={Samuel}
                  alt="Samuel's image"
                  className="lg:rounded-[12px] "
                />
              </div>
              <div className="px-[16px] lg:px-0 lg:mt-0 mt-[20px] lg:max-w-[660px]">
                <div>
                  <h2 className="text-[#1A1A1A] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-2%]">
                    SAMUEL IYANU OLA, ESQ.
                  </h2>
                  <p className="mt-[12px] text-[#595959] font-aeoniklight leading-[19.2px] tracking-[-1%]">
                    Advocate
                  </p>
                </div>
                <div className="mt-[32px]">
                  <p className="text-[#2F2F2F] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-0.5%]">
                    SAMUEL IYANU OLA, ESQ., attended the University of Ilorin
                    from 2010 to 2015, where he completed his Bachelor of Laws
                    (LL.B.) degree. To meet the requirements for legal practice
                    in Nigeria, he proceeded to the Nigerian Law School, Kano
                    Campus, where he earned his Barrister at Law (B.L.)
                    qualification and was called to the Nigerian Bar on November
                    31, 2016. He completed his National Youth Service Corps
                    (NYSC) program in Oyo State in 2017.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[40px] lg:items-center">
              <div>
                <Image
                  src={Damilola}
                  alt="Damilola's image"
                  className="lg:rounded-[12px]"
                />
              </div>
              <div className="px-[16px] lg:px-0 lg:mt-0 mt-[20px] lg:max-w-[660px]">
                <div>
                  <h2 className="text-[#1A1A1A] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-2%]">
                    DAMILOLA DORCAS OJO, ESQ.
                  </h2>
                  <p className="mt-[12px] text-[#595959] font-aeoniklight leading-[19.2px] tracking-[-1%]">
                    Advocate
                  </p>
                </div>
                <div className="mt-[32px]">
                  <p className="text-[#2F2F2F] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-0.5%]">
                    DAMILOLA DORCAS 030, ESQ., attended Kogi State University,
                    Anyigba, Kogi State, from 2010 to 2014 for her Bachelor of
                    Laws (LL.B.) degree. To fulfil the requirements for legal
                    practice in Nigeria, she was admitted to the Nigerian Law
                    School, where she earned her Barrister at Law (B.L.)
                    qualification and was subsequently called to the Nigerian
                    Bar on December 13, 2017. She completed her National Youth
                    Service Corps (NYSC) program in 2016 in Uyo, Akwa Ibom
                    State, where she actively participated in the Legal Aid
                    Clinic Community Development Service (CDS) and received a
                    Certificate of Recognition for her contributions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse lg:gap-[40px] lg:items-center">
              <div>
                <Image
                  src={Zeenat}
                  alt="Zeenat's image"
                  className="lg:rounded-[12px] "
                />
              </div>
              <div className="px-[16px] lg:px-0 lg:mt-0 mt-[20px] lg:max-w-[660px]">
                <div>
                  <h2 className="text-[#1A1A1A] font-aeonikmedium text-[16px] leading-[21.6px] tracking-[-2%]">
                    ZEENAT ZAKARI, ESQ.
                  </h2>
                  <p className="mt-[12px] text-[#595959] font-aeoniklight leading-[19.2px] tracking-[-1%]">
                    Advocate
                  </p>
                </div>
                <div className="mt-[32px]">
                  <p className="text-[#2F2F2F] font-aeoniklight text-[16px] leading-[28.8px] tracking-[-0.5%]">
                    ZEENAT ZAKARI, ESQ., is a skilled and dedicated legal
                    practitioner who graduated from Bayero University, Kano,
                    with a Second Class Lower degree. She successfully completed
                    the Nigerian Law School program in 2023 and was called to
                    the Bar the same year. She fulfilled her National Youth
                    Service Corps (NYSC) in 2023 at a private law firm in Osun
                    State. Zeenat has a strong interest in litigation, real
                    estate, and commercial practice.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/">
              <div className="px-[16px] mt-[80px] lg:flex lg:justify-center">
                <button className="bg-black text-white rounded-[12px] w-full lg:w-[256px] mx-auto py-[16.5px] font-aeonikmedium leading-[19.2px] tracking-[-1%]">
                  Return to Homepage
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
