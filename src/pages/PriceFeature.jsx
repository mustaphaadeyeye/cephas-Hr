import React from "react";
import { Check } from "lucide-react";
import Wrapper from "../components/Wrapper";

const plans = [
  { key: "starter", name: "Starter", price: "₦3,000/employee" },
  { key: "growth", name: "Growth", price: "₦5,500/employee", highlighted: true },
  { key: "enterprise", name: "Enterprise", price: "Custom pricing" },
];

const categories = [
  {
    title: "Core HR & People",
    rows: [
      { label: "Employee directory & digital records", starter: true, growth: true, enterprise: true },
      { label: "Org charts & department management", starter: true, growth: true, enterprise: true },
      { label: "Onboarding & offboarding workflows", starter: true, growth: true, enterprise: true },
      { label: "Leave requests & approvals", starter: true, growth: true, enterprise: true },
      { label: "Recruitment & offer letters", starter: true, growth: true, enterprise: true },
      { label: "Employee self-service portal", starter: true, growth: true, enterprise: true },
    ],
  },
  {
    title: "Payroll & Finance",
    rows: [
      { label: "Payroll processing", starter: "Basic", growth: "Full", enterprise: "Multi-entity" },
      { label: "Statutory deductions (PAYE, pension, NHF)", starter: true, growth: true, enterprise: true },
      { label: "Expense & claims automation", starter: false, growth: true, enterprise: true },
      { label: "AI dual-core expense detection", starter: false, growth: true, enterprise: true },
      { label: "Asset management & hardware tracking", starter: false, growth: true, enterprise: true },
      { label: "Multi-entity & cross-border payroll", starter: false, growth: false, enterprise: true },
    ],
  },
  {
    title: "Workforce & Projects",
    rows: [
      { label: "Smart scheduling & conflict detection", starter: false, growth: true, enterprise: true },
      { label: "Project & task management (Kanban / Gantt)", starter: false, growth: true, enterprise: true },
      { label: "Time tracking & timesheets", starter: false, growth: true, enterprise: true },
      { label: "360° performance reviews", starter: false, growth: true, enterprise: true },
      { label: "Advanced analytics & custom reports", starter: false, growth: false, enterprise: true },
    ],
  },
];

const Cell = ({ value, highlighted }) => {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check
          size={16}
          className={highlighted ? "text-[#193FD3]" : "text-[#3fb6f5]"}
        />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
      </div>
    );
  }
  return (
    <div
      className={`text-center text-xs font-medium ${
        highlighted ? "text-[#193FD3]" : "text-[#3fb6f5]"
      }`}
    >
      {value}
    </div>
  );
};

const PriceFeature = () => {
  return (
    <div className="bg-white py-16">
      <Wrapper>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
            Compare every feature,{" "}
            <span className="text-[#193FD3]">side by side</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full border-collapse text-sm">
            {/* Plan headers */}
            <thead>
              <tr>
                <th className="w-1/3 bg-white p-4"></th>
                {plans.map((plan) => (
                  <th
                    key={plan.key}
                    className={`p-4 text-center font-semibold ${
                      plan.highlighted ? "bg-[#eef2ff]" : "bg-white"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        plan.highlighted ? "text-[#193FD3]" : "text-[#111111]"
                      }`}
                    >
                      {plan.name}
                    </p>
                    <p
                      className={`mt-1 text-xs font-normal ${
                        plan.highlighted ? "text-[#193FD3]/70" : "text-gray-400"
                      }`}
                    >
                      {plan.price}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {categories.map((category) => (
                <React.Fragment key={category.title}>
                  {/* Category header row */}
                  <tr>
                    <td
                      colSpan={4}
                      className="bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500"
                    >
                      {category.title}
                    </td>
                  </tr>

                  {/* Feature rows */}
                  {category.rows.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="p-4 text-sm text-[#333]">{row.label}</td>
                      <td className="p-4">
                        <Cell value={row.starter} />
                      </td>
                      <td className="bg-[#f5f8ff] p-4">
                        <Cell value={row.growth} highlighted />
                      </td>
                      <td className="p-4">
                        <Cell value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </div>
  );
};

export default PriceFeature;