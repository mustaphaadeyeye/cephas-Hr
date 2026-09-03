import React, { useState } from "react";
import { motion } from "framer-motion";
import Wrapper from '../components/Wrapper'
import { Check, X } from "lucide-react";
import PriceFeature from "./PriceFeature";
import PriceFaq from "./PriceFaq";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Pricing = () => {
  return (
    <div className="pt-[78px]">
        <PricingHome/>
        <PricingCards/>
        <PriceFeature/>
        <PriceCompare/>
        <PriceFaq/>
        <TrialSection/>
        <Footer/>
    </div>
  )
}

const PricingHome = () => {
    const [billing, setBilling] = useState("monthly");

    return (
        <div>
            <Wrapper>
                 <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="relative mt-8 overflow-hidden rounded-[32px] sm:rounded-[48px] border border-[#e2efff] bg-white px-4 pb-10 pt-6 sm:px-8 sm:pt-7 md:pb-14 lg:px-12 lg:pb-16">

      {/* Second / Inner Border - hidden on mobile, unchanged from sm: up */}
      <div className="hidden sm:block absolute left-[12%] right-[12%] top-[72px] h-[420px] rounded-[50px] border border-[#e8f2ff]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[850px] flex-col items-center text-center">

        {/* AI Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dcecff] bg-[#f7fbff] px-4 py-2 text-[9px] font-medium text-[#1744d8] sm:text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#55bfff]" />
         Simple, Transparent Pricing
        </div>

        {/* Heading */}
        <h1 className="max-w-[750px] text-[32px] font-bold leading-[1.1] tracking-[-1.2px] text-[#292929] sm:text-[48px] sm:leading-[1.08] sm:tracking-[-1.8px] md:text-[58px] lg:text-[62px]">
         Pay for what you use. Nothing more.
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[700px] text-[13px] leading-[1.8] text-[#444] sm:text-xs sm:leading-[2] md:text-[18px]">
        Per-employee pricing that scales with your team. No hidden setup fees, no module paywalls, no long-term lock-ins.
        </p>

        {/* Billing Toggle */}
        <div className="mt-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gray-100 p-1.5">
          <button
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors ${
              billing === "monthly"
                ? "bg-white text-[#111111] shadow-sm"
                : "text-gray-400"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("annual")}
            className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors ${
              billing === "annual"
                ? "bg-white text-[#111111] shadow-sm"
                : "text-gray-400"
            }`}
          >
            Annual
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-green-600">
              Save 17%
            </span>
          </button>
        </div>

      </div>
    </motion.section>
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
    priceNote: "per employee /",
    priceMonth: "month",
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
    priceNote: "per employee /",
    priceMonth: "month",
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
    price: "5,500",
    priceNote: "per employee /",
    priceMonth: "month",
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
    className={`flex flex-col rounded-2xl bg-white p-5 sm:p-6 ${
      plan.popular
        ? "border-2 border-[#193FD3]"
        : "border border-gray-200"
    }`}
  >
    {/* Header */}
    <div className="mb-4 flex items-start justify-between gap-2">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#eef2ff] text-sm font-semibold text-[#193FD3]">
          {plan.letter}
        </div>
        <div>
          <h3 className="text-base font-bold text-[#111111]">
            {plan.name}
          </h3>
          <p className="text-xs text-gray-400">{plan.subtitle}</p>
        </div>
      </div>

      {plan.popular && (
        <span className="shrink-0 rounded-full bg-[#193FD3] px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-white">
          Most Popular
        </span>
      )}
    </div>

    <p className="mb-4 text-sm text-gray-500">{plan.description}</p>

    {/* Price */}
    <div className="mb-5 flex items-center gap-2">
      <h1 className="text-3xl font-bold text-[#111111]">{plan.price}</h1>
      <div>
        <p className="text-[13px] sm:text-[14px] font-normal text-gray-400">{plan.priceNote}</p>
      <span className="text-[13px] sm:text-[14px] font-normal text-gray-400">{plan.priceMonth}</span>
      </div>
      
    </div>

    {/* CTA */}
    <button
      className={`mb-1 w-full rounded-full py-3 text-sm font-medium text-white transition-colors ${
        plan.popular
          ? "bg-[#193FD3] hover:bg-[#1535b8]"
          : "bg-[#193FD3] hover:bg-[#1535b8]"
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
    <div className="bg-white py-10 sm:py-16">
      <Wrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-col items-center gap-y-3 border-t border-gray-100 pt-8 text-xs text-gray-500 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
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



const testimonials = [
  {
    plan: "Growth Plan · 120 employees",
    quote:
      "We moved from a spreadsheet payroll nightmare to fully automated statutory compliance in under two weeks. The ROI was immediate.",
    initial: "E",
    name: "Emeka D.",
    role: "Finance Director, Techbridge Solutions",
    color: "bg-[#193FD3]",
  },
  {
    plan: "Starter Plan · 30 employees",
    quote:
      "As a 30-person startup, we needed HR that just worked without a 6-month implementation. CephasHR was live in 3 days.",
    initial: "A",
    name: "Adaeze I.",
    role: "CEO, Stackr Africa",
    color: "bg-[#3fb6f5]",
  },
  {
    plan: "Enterprise Plan · 600+ employees",
    quote:
      "The RBAC controls and immutable audit logs are exactly what our CBN regulatory requirements demanded. Nothing else came close.",
    initial: "C",
    name: "Chidi A.",
    role: "Chief Compliance Officer, PrimeFin Nigeria",
    color: "bg-[#111111]",
  },
];

const stats = [
  { value: "500+", label: "Companies onboarded" },
  { value: "40,000+", label: "Employees managed" },
  { value: "₦2.8B+", label: "Payroll processed monthly" },
  { value: "4.9 / 5", label: "Average customer rating" },
];

const PriceCompare = () => {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeUp}
    className="bg-[#f7f8fa] py-10 sm:py-16">
      <Wrapper>
        <div className="mb-8 sm:mb-10 text-center">
          <h2 className="text-xl font-bold text-[#111111] sm:text-2xl md:text-3xl">
            Compare every feature,{" "}
            <span className="text-[#193FD3]">side by side</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <p className="mb-3 text-xs font-semibold text-[#193FD3]">
                {t.plan}
              </p>

              <p className="mb-5 text-sm leading-relaxed text-[#333]">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${t.color}`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 rounded-2xl border border-gray-200 bg-white p-4 sm:p-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-lg font-bold text-[#193FD3] sm:text-2xl md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] sm:text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
};

const trustPoints = [
  "14-day free trial",
  "Cancel anytime",
  "Data stays in Nigeria",
  "NDPR compliant",
];

const TrialSection = () => {
  return (
    <div className="py-10 sm:py-16">
      <Wrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          style={{
            background:
              "linear-gradient(135deg, #1233CC 0%, #0F3CCF 15%, #0B44D2 30%, #074CD4 45%, #0596F1 70%, #0083EA 85%, #0089EC 100%)",
          }}
          className="rounded-[24px] px-5 py-10 text-center sm:px-8 sm:py-14 md:py-16"
        >
          <h2 className="mx-auto text-[28px] font-bold leading-tight text-white sm:text-4xl md:text-4xl">
            Start your 14-day free trial today.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            No credit card. No setup fees. Full access to every feature in
            your chosen plan — ready in under 10 minutes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full sm:w-auto rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#193FD3] transition-colors hover:bg-gray-100">
              Start Free — No Credit Card
            </button>

            <button className="w-full sm:w-auto rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Book a Personalised Demo
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustPoints.map((point, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-xs text-white/80"
              >
<div className="flex items-center justify-center w-6 h-6 bg-white/60 rounded-full z-20">
  <Check
    size={14}
    strokeWidth={4}
    className="text-white"
  />
</div>
                {point}
              </span>
            ))}
          </div>
        </motion.div>
      </Wrapper>
    </div>
  );
};



export default Pricing