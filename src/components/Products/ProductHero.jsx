import Button from "../Button";
import Wrapper from "../Wrapper";
import video from "../../assets/Text.png";
import img from "../../assets/img.svg";
import image1 from "../../assets/img2.svg";
import image2 from "../../assets/img3.svg";
import image3 from "../../assets/img4.svg";
import image4 from "../../assets/img5.svg";
import ProductGovernance from "./ProductGovernance";
import ProductConnect from "./ProductConnect";
import TimeSheets from "./TimeSheets";
import ProductEvidence from "./ProductEvidence";
import ProductNative from "./ProductNative";

const ProductHero = () => {
  const organization = [
    {
      title: "01",
      description: "People, Lifecycle & Governance",
    },
    {
      title: "02",
      description: "Smart Scheduling & Work Execution",
    },
    {
      title: "03",
      description: "Time, Expenses & Payroll Engine",
    },
    {
      title: "04",
      description: "Performance, Analytics & AI",
    },
    {
      title: "05",
      description: "Mobile Workforce Management",
    },
  ];
  return (
    <div>
      <section className="relative mt-8 overflow-hidden rounded-[48px] border border-[#e2efff] bg-white px-4 pb-10 pt-6 sm:px-8 sm:pt-7 md:pb-14 lg:px-12 lg:pb-16">
        {/* Second / Inner Border */}
        <div className="absolute left-[12%] right-[12%] top-[72px] h-[420px] rounded-[50px] border border-[#e8f2ff]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-[850px] flex-col items-center text-center">
          {/* AI Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dcecff] bg-[#f7fbff] px-4 py-2 text-[9px] font-medium text-[#1744d8] sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#55bfff]" />
            AI-Powered Human Resource & Work Management Platform
          </div>

          {/* Heading */}
          <h1 className="max-w-[750px] xl:text-[38px] text-[24px] font-bold leading-[1.08] tracking-[-1.8px] text-[#292929] sm:text-[48px] md:text-[58px] lg:text-[62px]">
            One Connected Workplace
            <br />
            Built for Admins, Loved by
            <br />
            <span className="inline-flex flex-wrap items-center justify-center gap-3">
              <span>Employees</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[700px] text-[11px] leading-[2] text-[#444] sm:text-xs md:text-[18px]">
            From hiring and automated payroll to self-service requests and daily
            productivity—Cephas HR empowers operations while giving employees
            complete control over their work life.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-10 justify-center">
            <Button className="mt-6 rounded-full bg-[#193FD3] px-8 py-3 text-sm font-medium text-white hover:bg-[#1535b8]">
              Book an Interactive Demo
            </Button>

            <Button className="border-[#55bfff] py-2 px-5 rounded-2xl border text-center mt-6">
              <img
                src={video}
                alt="Play Button"
                className="inline-block mr-2"
              />
              Watch Platform Overview (2 min)
            </Button>
          </div>
          <div className="flex items-center gap-8 mt-10 justify-center">
            <div className="flex -space-x-2">
              <img src={img} alt="" />
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CDEAFC] bg-[#CDEAFC] px-8 py-2 text-[9px] font-medium text-[#1744d8] sm:text-[10px]">
              Trusted by 500+ teams across Africa
            </div>
          </div>
          {/* {organization} */}
          <div className="mt-20 leading-16">
            <p className="xl:text-[54px] text-[24] font-bold text-nowrap">
              Everything Your Organization Needs.
            </p>
            <p className=" bg-[radial-gradient(50%_50%_at_50%_50%,_#58B9F6_0%,_#1233CC_100%)] bg-clip-text text-transparent font-bold text-[54px] ">
              {" "}
              One Connected Platform.{" "}
            </p>
            <p>
              12 integrated modules organized across 5 functional pillars
              covering every layer of HR and work management.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 mt-14 sm:flex-row sm:flex-wrap sm:gap-10 lg:flex-nowrap lg:gap-16 text-left">
          {organization.map((items, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 sm:w-[45%] lg:w-[150px]"
            >
              <p className="text-[24px] font-bold text-[#0596F133]">
                {items.title}
              </p>
              <p className="text-[16px]">{items.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-20">
        <ProductGovernance />
      </div>
      <ProductConnect />
      <TimeSheets />
      <ProductEvidence />
      <ProductNative />
    </div>
  );
};

export default ProductHero;
