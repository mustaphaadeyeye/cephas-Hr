import React from "react";
import OrganizationItem from "./OrganizationItem";
import PillarCard from "./Features/FeaturesCard";
import staffs from "../../assets/peoplemanagement.svg";
import manage from "../../assets/peoplemanagement.svg";
import Overlay from "../../assets/overlay.svg";
import AIEngineSection from "./AIEngineSection";
import Button from "../Button";
import overview from "../../assets/Overview.svg";

const ProductEvidence = () => {
  return (
    <div className="bg-white">
      <div className="">
        <div className="mx-auto max-w-[1400px] px-4 pt-20">
          <OrganizationItem
            number="04"
            label="Performance, Analytics & CephasHR AI"
          />
        </div>

        <p className="mx-auto max-w-[800px] px-4 text-center md:text-[37px] text-[20px]  font-medium leading-[1.4] text-[#444] ">
          Evidence based performance, real-time intelligence
          <span className=" bg-[radial-gradient(50%_50%_at_50%_50%,_#58B9F6_0%,_#1233CC_100%)] bg-clip-text text-transparent ">
            and AI that works for everyone.
          </span>
        </p>
        <div className="flex flex-col xl:flex xl:flex-row md:flex md:flex-col items-center justify-center gap-10 mt-20 max-w-[1300px] mx-auto">
          <div>
            <PillarCard
              badge="Work Admin / HR"
              title="Evidence-Based Performance Reviews"
              description="Evaluate employees using actual work data — completed tasks, utilization rates, and project milestones — paired with human 360° reviews."
              features={[
                {
                  description:
                    "Task completion rates and utilization data auto-pulled from timesheets",
                },
                {
                  description:
                    "360° peer feedback alongside quantitative evidence",
                },
                {
                  description:
                    "OKR and KPI alignment tracked against real deliverables",
                },
                {
                  description:
                    "Multi-persona executive dashboards for leadership, finance, HR, managers and PMs",
                },
              ]}
            />
          </div>
          <div>
            <PillarCard
              badge="Staff / Employees"
              title="Continuous Feedback & AI Productivity Summaries"
              description="Evaluate employees using actual work data completed tasks, utilization rates, and project milestones paired with human 360° reviews."
              features={[
                {
                  description:
                    "Task completion rates and utilization data auto-pulled from timesheets",
                },
                {
                  description:
                    "360° peer feedback alongside quantitative evidence",
                },
                {
                  description:
                    "OKR and KPI alignment tracked against real deliverables",
                },
                {
                  description:
                    "Multi-persona executive dashboards for leadership, finance, HR, managers and PMs",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex xl:flex-row md:flex md:flex-col max-w-[1300px] mx-auto gap-10 mt-20 items-center justify-center">
          <div className="relative">
            <img src={staffs} alt="" className="" />
            <img
              src={Overlay}
              alt=""
              className="absolute bottom-10 xl:-right-6 right-2"
            />
          </div>
          <img src={manage} alt="" className="" />
        </div>

        <div className="mt-20">
          <AIEngineSection />
        </div>
      </div>

      <div className="bg-[#F7F7F9] rounded-2xl text-center flex flex-col justify-center items-center max-w-[1400px] mx-auto mt-20">
        <p className="text-[24px] font-bold text-center mt-10">
          Role-Based Dashboard Explorer
        </p>
        <p className="text-[14px]">
          Preview the specialised dashboard each decision-maker gets out of the
          box.
        </p>
        <div className="flex items-center gap-6 text-[14px] mt-6">
          <Button className="bg-[#1233CC] rounded-2xl px-4 py-3 text-white">
            Adin/HR
          </Button>
          <Button className="bg-[#FFFFFF] text-[#27272799] border-[#E8EDF5] shadow px-6 py-3 border-gray-50 rounded-2xl">
            Staff/Employess
          </Button>
        </div>
        <div className="mt-6">
          <img src={overview} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductEvidence;
