import React from "react";
import OrganizationItem from "./OrganizationItem";
import PillarCard from "./Features/FeaturesCard";
import MobileAppCard from "./Features/MobileAppCard";
import { ShieldCheck, Building2, CalendarDays, FileText } from "lucide-react";
import StepIndicator from "./Features/StepIndicator";

const ProductNative = () => {
  const privacyFeatures = [
    {
      icon: ShieldCheck,
      title: "Role–Based Access Control",
      description:
        "Restrict access to sensitive salary, medical, and disciplinary records by role, seniority, or department. Granular permission matrices for every team size.",
    },
    {
      icon: Building2,
      title: "Data Isolation & Privacy",
      description:
        "Multi-tenant architecture with organisation-level data encryption at rest and in transit. Your data is never co-mingled.",
    },
    {
      icon: CalendarDays,
      title: "Calendar Privacy Safeguards",
      description:
        "Personal calendar blocks remain private to the individual while showing only busy states to schedulers — protecting focus time without hiding availability.",
    },
    {
      icon: FileText,
      title: "Audit Trails & Logs",
      description:
        "Full historical logging of every document change, salary modification, and approval action — immutable and always available for compliance reviews.",
    },
  ];

  const benefits = [
    "Automate repetitive processes across HR, payroll and project management",
    "Gain complete workforce visibility from headcount to project profitability",
    "Evidence-based performance reviews using actual work data",
    "Four AI modules monitoring timesheets, expenses, schedules and workforce health",
    "Multi-persona dashboards for every leadership layer",
  ];

  return (
    <div>
      <div className="bg-[#F7F7F9] pb-10 mt-20 rounded-2xl">
        <div className="mx-auto max-w-[1400px] px-4 pt-20">
          <OrganizationItem
            number="04"
            label="Time, Expenses & Payroll Connected Engine"
          />
        </div>
        <p className="mx-auto max-w-[1000px] px-4 text-center md:text-[37px] text-[20px] font-medium leading-[1.4] text-[#444]">
          Native iOS & Android apps.{" "}
          <span className="bg-[radial-gradient(50%_50%_at_50%_50%,_#58B9F6_0%,_#1233CC_100%)] bg-clip-text text-transparent">
            Full HR power in your pocket.
          </span>
        </p>
        <p className="max-w-[672px] text-[18px] text-center mx-auto mt-4">
          Employees and managers each get a purpose-built mobile experience —
          not a stripped-down version of the web app.
        </p>
        <div className="flex flex-col px-8 gap-10 max-w-[1400px] mt-18 xl:flex xl:flex-row md:flex md:flex-col mx-auto items-center justify-center">
          <div className="flex-1">
            <PillarCard
              badge="Staff / Employees"
              title="Employee Mobile"
              features={[
                {
                  description: "View daily calendar & shift schedule",
                },
                {
                  description: "Run task timers & submit weekly timesheets",
                },
                {
                  description: "Snap photos of expense receipts instantly",
                },
                {
                  description: "Request leave & check approval status",
                },
                {
                  description: "View & download digital payslips securely",
                },
              ]}
            />
          </div>
          <div className="flex-1">
            <MobileAppCard />
          </div>
          <div className="flex-1">
            <PillarCard
              badge="Work Admin / HR"
              title="Manager Mobile"
              features={[
                {
                  description: "Assign urgent tasks to available staff",
                },
                {
                  description:
                    "Review and approve timesheets & leaves on the go",
                },
                {
                  description: "Approve expense claims with attached receipts",
                },
                {
                  description: "Monitor live project progress & team workload",
                },
                {
                  description: "Receive instant workflow & escalation alerts",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-18">
        <span className="flex gap-4 items-center bg-[#CDEAFC4D] rounded-2xl px-4">
          <span>🔒</span>
          <p>Enterprise Security & Trust Layer</p>
        </span>
        <p className="mx-auto max-w-[1000px] px-4 py-4 text-center md:text-[37px] text-[20px] font-medium leading-[1.4] text-[#444]">
          Built on a foundation of.{" "}
          <span className="bg-[radial-gradient(50%_50%_at_50%_50%,_#58B9F6_0%,_#1233CC_100%)] bg-clip-text text-transparent">
            enterprise grade security.
          </span>
        </p>
        <p className="max-w-[672px] text-center text-[18px] ">
          Sensitive salary, medical and disciplinary data is protected at every
          layer from access control to encryption.
        </p>
        <div>
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
            {privacyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-2xl bg-[#F7F8FA] p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E2EFFF]">
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="text-[#1744d8]"
                    />
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-[#111]">
                      {feature.title}
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.6] text-[#777]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* hr */}
      <div className="mt-20">
        <p className="mx-auto max-w-[1000px] px-4 text-center md:text-[37px] text-[20px] font-medium leading-[1.4] text-[#444] ">
          From HR Operations to Employee Experience, <br />
          <span className=" bg-[radial-gradient(50%_50%_at_50%_50%,_#58B9F6_0%,_#1233CC_100%)] bg-clip-text text-transparent ">
            Everything Connects.
          </span>
        </p>
        <p className="text-center mt-2">
          Three simple steps from setup to strategic decisions.
        </p>
        <div className="mt-10">
          <StepIndicator />
        </div>
        {/* platform */}
        <div className="mt-20">
          <p className="mx-auto max-w-[1000px] px-4 text-center md:text-[37px] text-[20px] font-medium leading-[1.4] text-[#444] ">
            One Platform. <br />
            <span className=" bg-[radial-gradient(50%_50%_at_50%_50%,_#58B9F6_0%,_#1233CC_100%)] bg-clip-text text-transparent ">
              Two Powerful Experiences.
            </span>
          </p>
          <p className="text-[18px] text-center mt-4">
            The same data, the same source of truth — presented differently for
            each role.
          </p>
          <div className="flex flex-col xl:flex xl:flex-row md:flex md:flex-col gap-10 mt-18 max-w-[1200px] mx-auto">
            <div className="relative  overflow-hidden rounded-3xl bg-[#1233CC] p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />

              <h3 className="relative text-[26px] font-bold leading-[1.3] text-white">
                Command your workforce with complete clarity
              </h3>

              <p className="relative mt-3 text-[14px] leading-[1.6] text-white/80">
                For HR teams, managers, finance and executives — full
                operational control from a single pane of glass.
              </p>

              <div className="relative mt-6 flex flex-col gap-3">
                {benefits.map((text, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-[11px] text-white">
                      ✓
                    </span>
                    <p className="text-[13px] leading-[1.6] text-white/90">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <PillarCard
                badge="Staff / Employees"
                title="Everything work-related, at your fingertips"
                description="For staff and individual contributors who want things to work — simply, instantly, without needing to contact HR."
                features={[
                  {
                    description:
                      "Update personal details and banking credentials without emailing HR",
                  },
                  {
                    description:
                      "Start a work timer, snap a receipt or request leave from your phone",
                  },
                  {
                    description:
                      "Track your own KPIs, feedback and project wins in real time",
                  },
                  {
                    description:
                      "Access payslips, expense reimbursements and training from one portal",
                  },
                  {
                    description:
                      "Ask the AI Assistant anything — policies, leave balance, next payroll date",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNative;
