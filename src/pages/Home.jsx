import React, { useState } from "react";
import { motion } from "framer-motion";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import ChrImg from "../assets/anochrcep.png"
import OneImg from "../assets/one.png"
import TwoImg from "../assets/two.png"
import ThreeImg from "../assets/three.png"
import FourImg from "../assets/four.png"
import EmployeeImg from "../assets/employee.png"
import AnalyticsImg from "../assets/analytical.png"
import PayrollImg from "../assets/payroll.png"
import { CircleDollarSign, Users, Sparkles, Wallet, Check } from "lucide-react";
import Footer from "../components/Footer";
import img from "../assets/img.svg";
import image1 from "../assets/img2.svg";
import image2 from "../assets/img3.svg";
import image3 from "../assets/img4.svg";
import image4 from "../assets/img5.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const viewport = { once: true, amount: 0.15 };

const Home = () => {
  return (
    <div>
      <Wrapper>
        <div className="pt-[78px]">
          <HomeHero />
          <ImageSection />
          <CardSection />
          <WhySection />
        </div>
      </Wrapper>

     
      <OverviewSection />
      <NewSection />
    </div>
  );
};

const features = [
  {
    icon: CircleDollarSign,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "Zero-Error Automated Payroll",
    description:
      "Calculate salaries, allowances, deductions, and statutory taxes with a single click. Generate instant digital payslips and maintain 100% tax compliance automatically.",
  },
  {
    icon: Users,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    title: "Frictionless Employee Lifecycle",
    description:
      "From candidate sourcing in the built-in ATS to automated day-one onboarding and offboarding clearances, keep every record organized in one secure hub.",
  },
  {
    icon: Sparkles,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    title: "AI-Powered Workplace Intelligence",
    description:
      "Use built-in AI assistance and predictive analytics to spot retention risks, automate complex approval workflows, and uncover workforce productivity trends.",
  },
  {
    icon: Wallet,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    title: "Employee Financial Wellness",
    description:
      "Boost retention with integrated employee wallets, accessible earned wages, and transparent expense reimbursement tracking.",
  },
];

const HomeHero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeIn}
      className="relative mt-8 overflow-hidden rounded-[28px] border border-[#e2efff] bg-white px-4 pb-10 pt-6 sm:rounded-[48px] sm:px-8 sm:pt-7 md:pb-14 lg:px-12 lg:pb-16">

      {/* Second / Inner Border (decorative — hidden on very small screens to avoid overlapping content) */}
      <div className="hidden sm:block absolute left-[12%] right-[12%] top-[72px] h-[420px] rounded-[50px] border border-[#e8f2ff]" />

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-[850px] flex-col items-center text-center">

        {/* AI Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dcecff] bg-[#f7fbff] px-3 py-1.5 text-[10px] font-medium text-[#1744d8] sm:px-4 sm:py-2 sm:text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#55bfff]" />
          AI-Powered Human Resource & Work Management Platform
        </div>

        {/* Heading */}
        <h1 className="max-w-[750px] text-[32px] font-bold leading-[1.12] tracking-[-1.2px] text-[#292929] sm:text-[38px] sm:leading-[1.08] sm:tracking-[-1.8px] md:text-[58px] lg:text-[62px]">
          Streamline Your Entire
          <br />
          People Operations from
          <br />

          <span className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span>Hire</span>

            {/* Avatars */}
            <span className="flex -space-x-2">
              <img src={img} alt="" />
                              <img src={image1} alt="" />
                              <img src={image2} alt="" />
                              <img src={image3} alt="" />
                              <img src={image4} alt="" />
            </span>

            <span>Retire.</span>
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[700px] text-sm leading-[1.7] text-[#444] sm:text-xs sm:leading-[2] md:text-[18px]">
          Manage People. Organize Work. Track Time. Control Costs. Improve
          Performance. CepahsHR is an intelligent, all-in-one HR and Work
          Management platform that connects employees, projects, tasks,
          calendars, attendance, time tracking, expenses, payroll and
          performance in one seamless ecosystem.
        </p>

        {/* CTA */}
        <Button className="mt-6 rounded-full bg-[#193FD3] px-8 py-3 text-sm font-medium text-white hover:bg-[#1535b8]">
          Book a Demo
        </Button>

      </motion.div>
    </motion.section>
  );
};

const ImageSection = () => {
  return (
    <motion.div className="mt-6 " initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
      <div className="flex justify-center px-2">
        <motion.img src={ChrImg} alt="HR platform" className="w-full h-auto lg:w-auto" />
      </div>

      <div className="mt-8">
        <p className="font-medium text-xl sm:text-2xl md:text-[31px] text-[#272727] text-center px-4">
          Trusted by forward-thinking teams across Africa
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-16 mt-4 mb-5 px-4">
          <img src={OneImg} alt="" className="h-6 sm:h-8 w-auto" />
          <img src={TwoImg} alt="" className="h-6 sm:h-8 w-auto" />
          <img src={ThreeImg} alt="" className="h-6 sm:h-8 w-auto" />
          <img src={FourImg} alt="" className="h-6 sm:h-8 w-auto" />
        </div>
      </div>
    </motion.div>
  );
};

const CardSection = () => {
  return (
    <motion.section className="mt-14 w-full" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

        {/* Card 1 */}
        <div className="relative min-h-[220px] overflow-hidden rounded-[16px] bg-[#f7f7f8] px-5 pt-6 sm:min-h-[300px] sm:px-7 sm:pt-7">
          <div className="">
            <h3 className="text-[18px] font-bold leading-[1.25]  text-[#272727] md:text-[31px]">
              Automate your entire employee
              <br className="hidden sm:block" />
              lifecycle seamlessly
            </h3>

            <p className="mt-2 text-sm leading-[1.5] text-[#272727] md:text-[18px]">
              Streamline hiring, day-one onboarding, leave requests,
              and asset management in one unified workspace.
            </p>
          </div>

          <img
            src={EmployeeImg}
            alt="Employee management dashboard"
            className="mt-4 w-full h-auto lg:w-auto"
          />
        </div>

        {/* Card 2 */}
        <div className="relative min-h-[220px] overflow-hidden rounded-[16px] bg-[#f7f7f8] px-5 pt-6 sm:min-h-[300px] sm:px-7 sm:pt-7">
          <div>
            <h3 className="text-[18px] font-bold leading-[1.25]  text-[#272727] sm:text-[31px]">
              Real-time analytics to optimize
              <br className="hidden sm:block" />
              workforce performance
            </h3>

            <p className="mt-2 mb-2 text-sm text-[#272727] sm:text-[18px]">
              Track team productivity, review OKRs, and uncover
              retention trends with automated AI-driven reporting.
            </p>
          </div>

          <img
            src={AnalyticsImg}
            alt="Workforce analytics dashboard"
            className="mt-4 w-full h-auto lg:w-auto"
          />
        </div>

        {/* Card 3 */}
        <div className=" overflow-hidden rounded-[16px] bg-[#f7f7f8] px-5 pt-6 md:col-span-2 sm:px-7 sm:pt-7">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6 lg:gap-0">
            {/* Text */}
            <div>
              <h3 className="text-[18px] font-bold leading-[1.32] text-center lg:text-left  text-[#272727] md:text-[31px]">
                Zero-error payroll, automated
                <br className="hidden lg:block" />
                {" "}expenses, and complete
                <br className="hidden lg:block" />
                {" "}compliance
              </h3>

              <p className="mt-2 text-sm text-center lg:text-left leading-[1.5] text-[#272727] md:text-[18px]">
                Run statutory-compliant payroll runs in minutes,
                approve instant expense claims, and empower
                employees with built-in digital wallets and salary
                advances.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="mt-4 rounded-full bg-[#0596F1] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#078bd3] sm:py-4 md:text-[18px] cursor-pointer">
                  Explore Payroll & FinTech
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[1500px]">
              {/* Dashboard image */}
              <img
                src={PayrollImg}
                alt="Payroll and fintech dashboard"
                className="w-full h-auto lg:w-auto"
              />
            </div>
          </div>


        </div>

      </div>
    </motion.section>
  );
};

const WhySection = () => {
  return (
    <motion.div className="w-full bg-white px-6 py-16" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#272727] mb-8">
        Why <span className="bg-gradient-to-r from-[#58B9F6] to-[#1233CC] bg-clip-text text-transparent">
          CephasHR?
        </span>
      </h2>

      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map(({ icon: Icon, iconBg, iconColor, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center mb-4`}>
              <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={1.75} />
            </div>
            <h3 className="text-[15px] font-bold text-[#272727] mb-2">{title}</h3>
            <p className="text-[16px] font-normal text-[#272727] leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const overviewFeatures = [
  {
    number: "01",
    title: "Employee & HR Management",
    description:
      "Manage your entire employee lifecycle from one centralized platform.",
  },
  {
    number: "02",
    title: "Smart Calendar & Workforce Scheduling",
    description: "Turn your employee calendar into a productivity tool.",
  },
  {
    number: "03",
    title: "Projects & Task Management",
    description: "Connect HR with the actual work employees perform.",
  },
  {
    number: "04",
    title: "Time Tracking & Timesheets",
    description: "Know exactly where employees' time is going.",
  },
  {
    number: "05",
    title: "Expense & Reimbursement Management",
    description:
      "Manage employee and project expenses from submission to reimbursement.",
  },
  {
    number: "06",
    title: "Payroll & Compensation",
    description: "Connect workforce activity with financial management.",
  },
  {
    number: "07",
    title: "Performance & Productivity Management",
    description: "Measure performance using real work data.",
  },
  {
    number: "08",
    title: "CephasHR AI",
    description: "Connect workforce activity with financial management.",
  },
  {
    number: "09",
    title: "Workforce Analytics & Dashboards",
    description: "Get real-time visibility across your organization.",
  },
  {
    number: "10",
    title: "Workflow Automation",
    description:
      "Replace manual HR processes with configurable digital workflows.",
  },
  {
    number: "11",
    title: "Enterprise Security & Access Control",
    description: "Built for organizations of different sizes and structures.",
  },
  {
    number: "12",
    title: "Mobile Workforce Management",
    description: "Give employees and managers access wherever work happens.",
  },
];


const OverviewSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      className="w-full bg-[#f5f7fb] px-6 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <Wrapper>
        <h2 className="mb-10 text-center text-3xl font-bold text-[#272727] sm:text-4xl md:text-5xl lg:text-[54px]">
          Overview of{" "}
          <span className="bg-gradient-to-r from-[#58B9F6] to-[#1233CC] bg-clip-text text-transparent">
            Major Features
          </span>
        </h2>

        <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
          {overviewFeatures.map(
            ({ number, title, description }, index) => (
              <div
                key={number}
                className={`flex h-auto w-full max-w-[555px] gap-4 rounded-[20px] px-6 py-5 sm:px-10 lg:h-[152px] ${
                  index % 2 === 0
                    ? "bg-[#eef3fd]"
                    : "bg-[#e9eaf9]"
                } ${
                  index >= 6 && !showMore
                    ? "hidden lg:flex"
                    : "flex"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <h1 className="shrink-0 text-3xl font-bold text-blue-500 sm:text-4xl lg:text-[48px]">
                      {number}
                    </h1>
                  </div>

                  <div>
                    <h3 className="mb-1 text-[16px] font-bold text-[#272727] sm:text-[18px]">
                      {title}
                    </h3>

                    <p className="text-sm font-normal text-[#272727] sm:text-[17px]">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* View More / View Less */}
        <div className="mt-8 text-center lg:hidden">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm font-medium text-blue-600 underline underline-offset-2"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>

        {/* Desktop View Details */}
        <div className="mt-8 hidden text-center lg:block">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 underline underline-offset-2"
          >
            View Details
          </a>
        </div>
      </Wrapper>
    </motion.div>
  );
};



const systemSteps = [
  {
    step: "Step 01",
    title: "Connect & Migrate",
    description:
      "Import your employee database effortlessly using our smart templates or have our dedicated setup team handle migration for you.",
  },
  {
    step: "Step 02",
    title: "Automate Everyday Admin",
    description:
      "Configure custom approval paths, setup biometric/time trackers, and let the system handle routine leave, onboarding, and payslip distribution.",
  },
  {
    step: "Step 03",
    title: "Make Data-Driven Decisions",
    description:
      "Access real-time HR dashboards, track company-wide KPIs, and run multi-entity payroll without ever touching a manual spreadsheet.",
  },
];
 
const SystemSection = () => {
  return (
    <motion.div className="w-full bg-white px-6" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#272727] mb-2">
        How the <span className="text-blue-500">System</span> Works
      </h2>
      <p className="text-center text-sm sm:text-base md:text-[18px] text-[#272727] mb-14">
        Three simple steps from setup to strategic decisions.
      </p>
 
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
        {systemSteps.map(({ step, title, description }, index) => (
          <div key={step} className="relative flex flex-col items-center text-center">
            {/* Connector line to the next step */}
            {index < systemSteps.length - 1 && (
              <div className="hidden sm:block absolute top-12 left-1/2 w-full h-px border-t border-solid border-blue-200" />
            )}
 
            <div className="relative z-10 w-[88px] h-[88px] sm:w-[104px] sm:h-[104px] rounded-full bg-blue-50 flex items-center justify-center mb-5">
              <span className="text-sm sm:text-[18px] font-bold text-[#0596F1]">{step}</span>
            </div>
 
            <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#272727] mb-2">{title}</h3>
            <p className="text-sm sm:text-base md:text-[18px] font-normal text-gray-500 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const industryItems = [
  {
    number: "01",
    title: "Technology & Fast-Growing Startups",
    description:
      "Scale from 10 to 500+ employees without breaking your operational backbone.",
  },
  {
    number: "02",
    title: "Financial Services & Fintech",
    description:
      "Meet strict audit controls, granular role-based permissions, and complex compliance frameworks.",
  },
  {
    number: "03",
    title: "Logistics & Field Operations",
    description:
      "Manage shift-based workforces, overtime schedules, and multi-location attendance seamlessly.",
  },
  {
    number: "04",
    title: "Retail & Hospitality",
    description:
      "Handle high-turnover recruitment, flexible rosters, and quick-turnaround employee onboarding effortlessly.",
  },
];
 

const IndustrySection = () => {
  return (
    <motion.div className="w-full bg-white px-6 py-16 mt-5" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
    
        <h2 className="mb-2 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#272727]">
          Built for Your{" "}
          <span className="bg-gradient-to-r from-[#58B9F6] to-[#1233CC] bg-clip-text text-transparent">
            Industry & Scale
          </span>
        </h2>

        <p className="mb-10 text-center text-sm sm:text-base lg:text-[17px] font-normal text-[#272727]">
          Purpose-built workflows for the sectors and company sizes that need
          them most.
        </p>

        <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
          {industryItems.map(({ number, title, description }, index) => (
            <div
              key={number}
              className={`flex h-auto w-full max-w-[555px] gap-4 rounded-[20px] px-6 py-5 sm:px-10 lg:h-[152px] ${
                index % 2 === 0
                  ? "bg-[#eef3fd]"
                  : "bg-[#e9eaf9]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div>
                  <h1 className="shrink-0 text-3xl sm:text-4xl lg:text-[48px] font-bold text-blue-500">
                    {number}
                  </h1>
                </div>

                <div>
                  <h3 className="mb-1 text-[16px] sm:text-[18px] font-bold text-[#272727]">
                    {title}
                  </h3>

                  <p className="text-sm sm:text-[17px] font-normal text-[#272727]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </motion.div>
  );
};

const testimonials = [
  {
    initials: "SO",
    avatarBg: "bg-blue-400",
    quote:
      "Switching to Cephas HR cut our monthly payroll cycle from four days to just under 30 minutes. The automated tax calculations and instant employee self-service have completely transformed our operations.",
    name: "Sarah O.",
    role: "Head of People Operations at PayFlow Africa",
  },
  {
    initials: "DK",
    avatarBg: "bg-[#1233CC]",
    quote:
      "The asset tracking and automated onboarding workflows saved our IT and HR teams hundreds of manual hours during our last hiring sprint. It is the most intuitive HR tool we've used.",
    name: "David K.",
    role: "Chief Operating Officer at Swift Logistics",
  },
];
 

const TestimonialSection = () => {
  return (
    <motion.div className="w-full bg-[#f5f7fb] px-6 py-16" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
     
        <h2 className="mb-10 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#272727]">
          Customer{" "}
          <span className="bg-gradient-to-r from-[#58B9F6] to-[#1233CC] bg-clip-text text-transparent">
            Testimonial
          </span>
        </h2>

        <div className=" flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-10">
          {testimonials.map(
            ({ initials, avatarBg, quote, name, role }) => (
              <div
                key={name}
                className="h-auto w-full max-w-[518px] mx-auto rounded-[20px] bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-8 lg:h-[346px]"
              >
                <span className="font-serif text-4xl sm:text-[48px] leading-none text-[#58B9F6]">
                  &ldquo;
                </span>

                <p className="mb-8 text-sm sm:text-[17px] font-normal leading-relaxed text-[#272727]">
                  {quote}
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${avatarBg} text-sm font-semibold text-white`}
                  >
                    {initials}
                  </div>

                  <div>
                    <p className="text-[16px] font-bold text-[#272727]">
                      {name}
                    </p>

                    <p className="text-[14px] text-gray-500">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
     
    </motion.div>
  );
};





const NewSection = () => {
  return (
    <div >
      <Wrapper className="w-full bg-white px-6 py-16">
          <SystemSection/>
          <IndustrySection/>
         
      </Wrapper>
       <TestimonialSection/>
       <AnotherSection/>
    </div>
  );
};

const AnotherSection = () => {
  return (
    <div>
      <Wrapper>
        <TeamSecion/>
        <ModernizeSection/>
       
      </Wrapper>
       <Footer/>
    </div>
  )
}

const plans = [
  {
    name: "Starter",
    description: "For early-stage teams getting their HR foundations right.",
    features: [
      "Essential Core HR",
      "Employee Directory",
      "Document Management",
      "Leave Tracking",
    ],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "Growth",
    badge: "Most Popular",
    description:
      "The complete suite for scaling companies with complex workflows.",
    features: [
      "Complete Payroll",
      "Automated ATS",
      "Expense Management",
      "Performance KPIs",
      "Asset Management",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    description:
      "Full-platform access for large, multi-entity organizations.",
    features: [
      "Full Platform Access",
      "HR AI Automation",
      "Custom API Integrations",
      "Dedicated Account Support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];
 

const TeamSecion = () => {
  return (
    <motion.div className="w-full bg-white px-6 py-16" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6 }}>
      
        <h2 className="mb-2 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#272727]">
          Transparent plans that{" "}
          <span className="bg-gradient-to-r from-[#58B9F6] to-[#1233CC] bg-clip-text text-transparent">
            Grow with Your Team
          </span>
        </h2>

        <p className="mb-12 text-center text-sm sm:text-base lg:text-[17px] font-normal text-[#272727]">
          Simple per-employee pricing with no hidden fees or surprise
          implementation costs.
        </p>

        <div className="mx-auto grid grid-cols-1 items-start justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
          {plans.map(
            ({
              name,
              badge,
              description,
              features,
              cta,
              featured,
            }) => (
              <div
                key={name}
                className={`relative h-auto w-full max-w-[385px] mx-auto rounded-[20px] px-6 py-8 lg:h-[538px] ${
                  featured
                    ? "bg-[#193FD3] lg:-mt-4 lg:pb-12"
                    : "bg-[#f7f7f8]"
                }`}
              >
                {badge && (
                  <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-blue-600">
                    {badge}
                  </span>
                )}

                <h3
                  className={`mb-2 text-xl font-bold ${
                    featured ? "text-white" : "text-[#272727]"
                  }`}
                >
                  {name}
                </h3>

                <p
                  className={`mb-6 text-sm leading-relaxed ${
                    featured ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {description}
                </p>

                <ul className="mb-8 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2"
                    >
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          featured
                            ? "bg-white/20"
                            : "bg-blue-100"
                        }`}
                      >
                        <Check
                          className={`h-2.5 w-2.5 ${
                            featured
                              ? "text-white"
                              : "text-blue-600"
                          }`}
                          strokeWidth={3}
                        />
                      </span>

                      <span
                        className={`text-sm ${
                          featured
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full cursor-pointer rounded-full py-3 text-sm font-semibold transition ${
                    featured
                      ? "bg-white text-[#193FD3] hover:bg-blue-50"
                      : "bg-[#193FD3] text-white hover:bg-[#1535b8]"
                  }`}
                >
                  {cta}
                </button>

                <p
                  className={`mt-4 text-center text-xs ${
                    featured
                      ? "text-blue-100"
                      : "text-gray-400"
                  }`}
                >
                  Compare All Features & Calculate Pricing →
                </p>
              </div>
            )
          )}
        </div>
    
    </motion.div>
  );
};


const ModernizeSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ duration: 0.7 }}
      style={{
        background:
          "linear-gradient(135deg, #1233CC 0%, #0F3CCF 15%, #0B44D2 30%, #074CD4 45%, #0596F1 70%, #0083EA 85%, #0089EC 100%)",
      }}
      className="rounded-[20px] px-6 py-12 sm:px-8 sm:py-14 md:py-16 text-center  mb-5  mx-auto"
    >
      <h2 className="text-white text-2xl sm:text-3xl md:text-[54px] font-bold leading-tight max-w-2xl mx-auto">
        Ready to modernize your people operations?
      </h2>

      <p className="text-white/80 text-sm md:text-[20px] mt-4 max-w-xl mx-auto leading-relaxed">
        Join hundreds of forward-thinking organizations using Cephas HR to
        build better workplaces. Book a personalized demo tailored to your
        company's workflows.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-white text-blue-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
          Schedule Your Live Demo
        </button>

        <a
          href="#"
          className="text-white text-sm font-medium  hover:text-white/80 transition-colors"
        >
          Talk to an HR Solutions Specialist
        </a>
      </div>
    </motion.div>
  );
};



export default Home;