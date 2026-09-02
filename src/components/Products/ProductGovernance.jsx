import React from "react";
import OrganizationItem from "./OrganizationItem";
import PillarCard from "./Features/FeaturesCard";
import manage from "../../assets/management.svg";
import people from "../../assets/dashboard.svg";
import Overlay from "../../assets/overlay.svg";

const ProductGovernance = () => {
  return (
    <div className="bg-[#F7F7F9]">
      <div className="mx-auto max-w-[1400px] px-4 pt-20">
        <OrganizationItem number="01" label="People,Lifestyle & Governance" />
      </div>
      <p className="mx-auto max-w-[800px] px-4 text-center md:text-[37px] text-[20px]  font-medium leading-[1.4] text-[#444] ">
        Every employee record, workflow and policy{" "}
        <span className=" bg-[radial-gradient(50%_50%_at_50%_50%,_#58B9F6_0%,_#1233CC_100%)] bg-clip-text text-transparent ">
          in one governance layer
        </span>
      </p>
      <div className="flex flex-col xl:flex xl:flex-row md:flex md:flex-col items-center justify-center gap-10 mt-20 max-w-[1200px] mx-auto ">
        <PillarCard
          badge="WORK ADMIN / HR"
          title="Full operational control"
          description="Built for Work Admins, HR teams and Legal — to manage, automate and govern the entire workforce."
          features={[
            {
              title: "Employee Lifecycle Hub",
              description:
                "Manage digital records, team hierarchies, dynamic org charts, and automated onboarding/offboarding clearance workflows.",
            },
            {
              title: "Recruitment & ATS",
              description:
                "Track vacancies, screen candidate pipelines, schedule panel interviews, and issue digital offer letters.",
            },
            {
              title: "Asset & Relations Management",
              description:
                "Assign and track company equipment with digital return sign-offs; log disciplinary investigations and grievance cases securely.",
            },
            {
              title: "Enterprise Security & Access",
              description:
                "Configure granular role-based permissions, department boundaries, multi-factor authentication (MFA), and immutable audit logs.",
            },
            {
              title: "Configurable Multi-Level Automations",
              description:
                "Build automated routing rules for leave, document approvals, and policy sign-offs.",
            },
          ]}
        />
        <PillarCard
          height="585px"
          badge="STAFF / EMPLOYEES"
          title="Self-service, without the back-and-forth"
          description="Employees get a personal HR portal — update details, track leave, sign docs and grow their career without emailing HR."
          features={[
            {
              title: "Self-Service Profile",
              description:
                "Update personal details, emergency contacts, and banking credentials without emailing HR.",
            },
            {
              title: "Leave & Request Portal",
              description:
                "Check real-time leave balances, submit time-off requests, and track approval status instantly.",
            },
            {
              title: "Digital Document Locker",
              description:
                "Access company policies, upload certifications, and sign official letters via built-in e-signatures.",
            },
            {
              title: "Career & Learning Hub",
              description:
                "Access enrolled training modules, view career development tracks, and submit benefit claims.",
            },
          ]}
        />
      </div>
      <div className="flex flex-col xl:flex xl:flex-row md:flex md:flex-col items-center justify-center gap-10 mt-20 max-w-[1300px] mx-auto ">
        <div className="relative">
          <img src={manage} alt="management" />
          <img src={Overlay} alt="" className="absolute bottom-8 right-0" />
        </div>
        <img src={people} alt="dashboard" />
      </div>
    </div>
  );
};

export default ProductGovernance;
