import React from "react";
import OrganizationItem from "./OrganizationItem";
import PillarCard from "./Features/FeaturesCard";
import PerformanceCard from "./Features/Performance";
import pay1 from "../../assets/payroll1.svg";
import pay2 from "../../assets/payroll2.svg";
import blue from "../../assets/lightblue.svg";
import blue2 from "../../assets/rightcont.svg";

const TimeSheets = () => {
  return (
    <div className="bg-[#F7F7F9] mt-20  pb-10">
      <div className="mx-auto max-w-[1400px] px-4 pt-20">
        <OrganizationItem
          number="03"
          label="Time, Expenses & Payroll Connected Engine"
        />
      </div>
      <p className="mx-auto max-w-[800px] px-4 text-center md:text-[37px] text-[20px]  font-medium leading-[1.4] text-[#444] ">
        Timesheets, expenses and payroll{" "}
        <span className=" bg-[radial-gradient(50%_50%_at_50%_50%,_#58B9F6_0%,_#1233CC_100%)] bg-clip-text text-transparent ">
          one automated financial engine.
        </span>
      </p>
      <div className="flex flex-col xl:flex xl:flex-row md:flex md:flex-col items-start justify-center gap-10 mt-20 max-w-[1100px] mx-auto ">
        <div className="flex-1">
          <PillarCard
            width="600px"
            badge="Work Admin / HR"
            title="From timesheet to bank transfer automated"
            features={[
              {
                title: "Payroll-Linked Time Approvals",
                description:
                  "Review timesheets, detect missing hours, approve overtime, and sync billable hours directly into the payroll engine.",
              },
              {
                title: "Automated Expense Policy Engine",
                description:
                  "Enforce spending limits, approve reimbursable receipts, and assign billable vs. non-billable expenses to specific project budgets.",
              },
              {
                title: "One-Click Statutory Payroll",
                description:
                  "Process custom salary structures, automate tax withholdings and pension deductions, factor in approved overtime, and disburse digital payslips.",
              },
              {
                title: "Total Project Costing",
                description:
                  "Automatically compute: Labor Hours + Expenses = Total Project Cost & Margin.",
              },
            ]}
          />
        </div>
        <div className="flex-1">
          <PerformanceCard
            width="600px"
            title="Performance Review · Q3 2026"
            badge="Evidence-Based"
            stats={[
              { value: 94, total: 102, label: "Tasks Completed" },
              { value: "87%", total: "", label: "Utilization Rate" },
              { value: 6, total: 7, label: "Milestones Hit" },
            ]}
            metrics={[
              {
                label: "360° Peer Feedback",
                score: 91,
                max: 100,
                color: "#1233CC",
              },
              {
                label: "Manager Rating",
                score: 88,
                max: 100,
                color: "#2F8CFF",
              },
              {
                label: "Self-Assessment",
                score: 85,
                max: 100,
                color: "#9FD3FF",
              },
            ]}
            winsTitle="Project Wins (auto-logged)"
            wins={[
              "Delivered July payroll 2 days early",
              "Reduced onboarding time by 40%",
              "Closed 3 critical vacancies in Q3",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex xl:flex-row md:flex md:flex-col items-start justify-center gap-10 mt-20 max-w-[1100px] mx-auto ">
        <div className="flex-1">
          <PillarCard
            width="600px"
            badge="Staff / Employees"
            title="Track time, claim expenses, get paid frictionlessly"
            features={[
              {
                title: "Frictionless Time Tracking",
                description:
                  "Start/stop 1-click timers tied to active tasks, log manual hours, or auto-fill weekly timesheets from calendar events.",
              },
              {
                title: "Snap & Submit Receipts",
                description:
                  "Capture receipt photos on mobile; automated optical parsing auto-populates amounts, dates, and categories.",
              },
              {
                title: "Clear Reimbursement Tracking",
                description:
                  "Monitor claim approval statuses and receive approved payouts directly with monthly payroll.",
              },
              {
                title: "Digital Payslip Access",
                description:
                  "View breakdown of base salary, allowances, overtime bonuses, and tax deductions with 1-click PDF downloads.",
              },
            ]}
          />
        </div>
        <div className="flex-1">
          <PerformanceCard
            width="600px"
            title="Performance Review · Q3 2026"
            badge="Evidence-Based"
            stats={[
              { value: 94, total: 102, label: "Tasks Completed" },
              { value: "87%", total: "", label: "Utilization Rate" },
              { value: 6, total: 7, label: "Milestones Hit" },
            ]}
            metrics={[
              {
                label: "360° Peer Feedback",
                score: 91,
                max: 100,
                color: "#1233CC",
              },
              {
                label: "Manager Rating",
                score: 88,
                max: 100,
                color: "#2F8CFF",
              },
              {
                label: "Self-Assessment",
                score: 85,
                max: 100,
                color: "#9FD3FF",
              },
            ]}
            winsTitle="Project Wins (auto-logged)"
            wins={[
              "Delivered July payroll 2 days early",
              "Reduced onboarding time by 40%",
              "Closed 3 critical vacancies in Q3",
            ]}
          />
        </div>
      </div>
      <div className="bg-white shadow max-w-[1200px] mx-auto rounded-2xl xl:max-h-[401px] mt-20 relative">
        <img src={blue2} alt="" className="absolute top-0 left-0 " />
        <div className="gap-16 flex flex-col xl:flex xl:flex-row md:flex md:flex-col items-center py-10 max-w-[1350px] mx-auto px-10 ">
          <div className="flex-1 gap-4 flex flex-col">
            <p className="text-[#0596F1] text-[12px]">One-Click Payroll</p>
            <p className="text-[36px] font-bold">
              Statutory compliant payroll processed in minutes
            </p>
            <p>
              Every approved hour and expense automatically factors into the
              payroll run. Zero manual reconciliation, zero spreadsheets.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-[#F7F7F9] rounded-2xl flex flex-col items-center px-4 py-3">
                <p className="text-[#1233CC]">₦48.2M</p>
                <span>Payroll Processed</span>
              </div>
              <div className="bg-[#F7F7F9] rounded-2xl flex flex-col items-center px-4 py-3">
                <p className="text-[#0596F1]">324</p>
                <span>Employees Paid</span>
              </div>
              <div className="bg-[#F7F7F9] rounded-2xl flex flex-col items-center px-4 py-3">
                <p className="text-[#10B981]">100%</p>
                <span>Compliance Rate</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative ">
            <img
              src={pay1}
              alt=""
              className="border-[#82CAF8] border-2 rounded-2xl"
            />
            <img
              src={pay2}
              alt=""
              className="absolute bottom-10 right-8 border-[#82CAF8] border-2 rounded-2xl"
            />
            <img
              src={blue}
              alt=""
              className="absolute -bottom-12 xl:-right-9 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSheets;
