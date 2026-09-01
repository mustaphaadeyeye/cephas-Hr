import React, { useState } from "react";
import Wrapper from '../components/Wrapper'
import { Check, X } from "lucide-react";

const Pricing = () => {
  return (
    <div>
        <PricingHome/>
        <PricingCards/>
    </div>
  )
}

const PricingHome = () => {
    const [billing, setBilling] = useState("monthly");

    return (
        <div>
            <Wrapper>
                 <section className="relative mt-8 overflow-hidden rounded-[48px] border border-[#e2efff] bg-white px-4 pb-10 pt-6 sm:px-8 sm:pt-7 md:pb-14 lg:px-12 lg:pb-16">

      {/* Second / Inner Border */}
      <div className="absolute left-[12%] right-[12%] top-[72px] h-[420px] rounded-[50px] border border-[#e8f2ff]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[850px] flex-col items-center text-center">

        {/* AI Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dcecff] bg-[#f7fbff] px-4 py-2 text-[9px] font-medium text-[#1744d8] sm:text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#55bfff]" />
         Simple, Transparent Pricing
        </div>

        {/* Heading */}
        <h1 className="max-w-[750px] text-[38px] font-bold leading-[1.08] tracking-[-1.8px] text-[#292929] sm:text-[48px] md:text-[58px] lg:text-[62px]">
         Pay for what you use. Nothing more.
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[700px] text-[11px] leading-[2] text-[#444] sm:text-xs md:text-[18px]">
        Per-employee pricing that scales with your team. No hidden setup fees, no module paywalls, no long-term lock-ins.
        </p>

        {/* Billing Toggle */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-100 p-1.5">
          <button
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              billing === "monthly"
                ? "bg-white text-[#111111] shadow-sm"
                : "text-gray-400"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("annual")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              billing === "annual"
                ? "bg-white text-[#111111] shadow-sm"
                : "text-gray-400"
            }`}
          >
            Annual
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-600">
              Save 17%
            </span>
          </button>
        </div>

      </div>
    </section>
            </Wrapper>
        </div>
    )
}

const plans = [
  {
    letter: "S",
    name: "Starter",
    subtitle: "Up to 50 employees",
    description: "For lean teams moving fast.",
    price: "₦3,000",
    priceNote: "per employee / month",
    popular: false,
    included: [
      "Core HR Directory and employee records",
      "Payroll processing with statutory deductions",
      "Leave request portal and manager approvals",
      "Recruitment and ATS — post, track, offer letters",
      "Day-1 automated onboarding checklists",
      "Employee self-service portal",
      "Mobile app (iOS and Android)",
      "Email and chat support (48h SLA)",
    ],
    notIncluded: [
      "Smart scheduling and capacity planning",
      "Project and task management",
      "Time tracking and timesheets",
      "Expense and claims automation",
      "360° performance reviews",
      "CephasHR AI modules",
      "Enterprise RBAC and MFA",
      "Custom API and webhooks",
    ],
  },
  {
    letter: "G",
    name: "Growth",
    subtitle: "Up to 500 employees",
    description: "For scaling teams that need full visibility.",
    price: "₦5,500",
    priceNote: "per employee / month",
    popular: true,
    included: [
      "Everything in Starter, plus",
      "Smart calendar and conflict detection",
      "Multi-view project and task management",
      "Time tracking with billable/non-billable split",
      "Expense and claims with AI policy enforcement",
      "360° performance reviews tied to real work",
      "Asset management and hardware tracking",
      "2 CephasHR AI modules (productivity and insights)",
      "Advanced analytics and custom reports",
      "Priority email and chat support (24h SLA)",
      "Dedicated onboarding specialist",
    ],
    notIncluded: [
      "Enterprise RBAC and MFA enforcement",
      "Immutable audit logs",
      "Multi-level approval matrix builder",
      "Custom API, webhooks and ERP integrations",
      "All 4 CephasHR AI modules",
    ],
  },
  {
    letter: "E",
    name: "Enterprise",
    subtitle: "500+ employees",
    description: "For organizations that need complete control.",
    price: "Custom",
    priceNote: "tailored to your team",
    popular: false,
    included: [
      "Everything in Growth, plus",
      "Enterprise RBAC and MFA enforcement",
      "Immutable audit logs",
      "Multi-level approval matrix builder",
      "Custom API, webhooks and ERP integrations",
      "All 4 CephasHR AI modules",
      "Dedicated account manager",
      "Custom onboarding and migration support",
      "24/7 priority support",
    ],
    notIncluded: [],
  },
];

const trustItems = [
  "NDPR compliant — data stays in Nigeria",
  "No setup fees or hidden charges",
  "Cancel or downgrade anytime",
];

const PricingCard = ({ plan }) => (
  <div
    className={`flex flex-col rounded-2xl bg-white p-6 ${
      plan.popular
        ? "border-2 border-[#193FD3]"
        : "border border-gray-200"
    }`}
  >
    {/* Header */}
    <div className="mb-4 flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef2ff] text-sm font-semibold text-[#193FD3]">
          {plan.letter}
        </div>
        <div>
          <h3 className="text-base font-semibold text-[#111111]">
            {plan.name}
          </h3>
          <p className="text-xs text-gray-400">{plan.subtitle}</p>
        </div>
      </div>

      {plan.popular && (
        <span className="rounded-full bg-[#193FD3] px-3 py-1 text-[11px] font-semibold text-white">
          Most Popular
        </span>
      )}
    </div>

    <p className="mb-4 text-sm text-gray-500">{plan.description}</p>

    {/* Price */}
    <div className="mb-5">
      <span className="text-3xl font-bold text-[#111111]">{plan.price}</span>
      <p className="text-xs text-gray-400">{plan.priceNote}</p>
    </div>

    {/* CTA */}
    <button
      className={`mb-1 w-full rounded-full py-3 text-sm font-medium text-white transition-colors ${
        plan.popular
          ? "bg-[#193FD3] hover:bg-[#1535b8]"
          : "bg-[#111111] hover:bg-[#2a2a2a]"
      }`}
    >
      {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
    </button>
    {plan.price !== "Custom" && (
      <p className="mb-6 text-center text-[11px] text-gray-400">
        14-day free trial · No credit card required
      </p>
    )}

    {/* What's included */}
    <div className="mb-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
        What's included
      </p>
      <ul className="space-y-2.5">
        {plan.included.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#333]">
            <Check size={16} className="mt-0.5 shrink-0 text-[#193FD3]" />
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Not included */}
    {plan.notIncluded.length > 0 && (
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Not included
        </p>
        <ul className="space-y-2.5">
          {plan.notIncluded.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-400"
            >
              <X size={16} className="mt-0.5 shrink-0 text-gray-300" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const PricingCards = () => {
  return (
    <div className="bg-white py-16">
      <Wrapper>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-gray-100 pt-8 text-xs text-gray-500">
          {trustItems.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <Check size={14} className="text-[#193FD3]" />
              {item}
            </span>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Pricing