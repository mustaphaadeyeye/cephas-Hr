import React from 'react'
import Wrapper from '../components/Wrapper'
import RoleSelector from "./RoleSelector"
import Footer from "../components/Footer"
import { Clock, CheckCircle2, Rocket, Landmark, ShieldCheck, BarChart3, TrendingDown, Bot, Quote } from "lucide-react";


const Solution = () => {
  return (
    <div>
      <SolutionHero />
      <RoleSelector />
      <SolutionOutcome />
      <CustomerSpotlight />
      <DemoCTA />
      <Footer/>
    </div>
  )
}

const SolutionHero = () => {
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
          Built for the way your {" "}
             <span className="text-[#1744d8]">
               organization works.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[700px] text-[11px] leading-[2] text-[#444] sm:text-xs md:text-[18px]">
         Per-employee pricing that scales with your team. No hidden setup fees, no module paywalls, no long-term lock-ins.
        </p>

       
       

      </div>
    </section>
            </Wrapper>
        </div>
    )
}

const stats = [
  {
    icon: Clock,
    iconColor: "#7C8591",
    value: "80%",
    valueColor: "#2563EB",
    label: "Reduction in manual admin hours",
  },
  {
    icon: CheckCircle2,
    iconColor: "#16A34A",
    value: "100%",
    valueColor: "#16A34A",
    label: "Statutory tax accuracy — zero manual errors",
  },
  {
    icon: Rocket,
    iconColor: "#F97316",
    value: "3x",
    valueColor: "#2563EB",
    label: "Faster onboarding completion time",
  },
  {
    icon: Landmark,
    iconColor: "#7C8591",
    value: "60%",
    valueColor: "#9333EA",
    label: "Faster payroll run and expense reconciliation",
  },
  {
    icon: ShieldCheck,
    iconColor: "#DC2626",
    value: "No",
    valueColor: "#16A34A",
    label: "Duplicate expense payouts with AI detection",
  },
  {
    icon: BarChart3,
    iconColor: "#2563EB",
    value: "92%",
    valueColor: "#EA580C",
    label: "On-time milestone delivery with smart scheduling",
  },
  {
    icon: TrendingDown,
    iconColor: "#7C8591",
    value: "35%",
    valueColor: "#2563EB",
    label: "Reduction in labor cost variance for finance teams",
  },
  {
    icon: Bot,
    iconColor: "#7C8591",
    value: "24/7",
    valueColor: "#2563EB",
    label: "AI HR Assistant available to every employee",
  },
];
 
const SolutionOutcome = () => {
  return (
    <section className="bg-white py-20 px-6">
      <Wrapper>
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.25rem] font-bold tracking-tight text-slate-900 leading-tight">
            Measurable outcomes,{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              not just features.
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-[15px]">
            Quantified results from organisations running on CephasHR.
          </p>
        </div>
 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, iconColor, value, valueColor, label }, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-50 border border-slate-100 p-5 flex flex-col gap-3"
            >
              <Icon size={20} color={iconColor} strokeWidth={2} />
              <div className="text-2xl font-bold" style={{ color: valueColor }}>
                {value}
              </div>
              <p className="text-[13px] leading-snug text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
      </Wrapper>
    </section>
  );
};

const testimonials = [
  {
    sector: "Technology",
    badgeBg: "#EAF4FE",
    badgeColor: "#2563EB",
    quote:
      "Switching to CephasHR cut our monthly payroll cycle from four days to just under 30 minutes. The automated tax calculations and instant employee self-service have completely transformed our operations.",
    highlight: "4 days → 30 minutes payroll cycle",
    highlightColor: "#334155",
    avatarInitial: "S",
    avatarBg: "#2563EB",
    name: "Sarah O.",
    title: "Head of People Operations, PayFlow Africa",
  },
  {
    sector: "Logistics",
    badgeBg: "#FDF1E0",
    badgeColor: "#C2760C",
    quote:
      "The asset tracking and automated onboarding workflows saved our IT and HR teams hundreds of manual hours during our last hiring sprint. It's the most intuitive HR tool we've used.",
    highlight: "Hundreds of hours saved on onboarding",
    highlightColor: "#C2760C",
    avatarInitial: "D",
    avatarBg: "#EA580C",
    name: "David K.",
    title: "Chief Operating Officer, SwiftLogistics",
  },
  {
    sector: "Financial Services",
    badgeBg: "#E7F5EE",
    badgeColor: "#16803D",
    quote:
      "The immutable audit logs and RBAC controls gave our compliance team the confidence to pass our annual regulatory review without any HR-related findings for the first time.",
    highlight: "Zero HR findings in annual compliance audit",
    highlightColor: "#16803D",
    avatarInitial: "A",
    avatarBg: "#16803D",
    name: "Amara N.",
    title: "Chief Compliance Officer, FinServe Nigeria",
  },
];
 
const CustomerSpotlight = () => {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <Wrapper>

      
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.25rem] font-bold tracking-tight text-slate-900 leading-tight">
            Customer{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Spotlight by Sector
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-[15px]">
            Real outcomes from organisations using CephasHR across industries.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-slate-100 p-6 flex flex-col shadow-sm"
            >
              <span
                className="self-start text-xs font-medium px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: t.badgeBg, color: t.badgeColor }}
              >
                {t.sector}
              </span>
 
              <p className="text-[14px] leading-relaxed text-slate-600 flex-1">
                "{t.quote}"
              </p>
 
              <div className="mt-5 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5">
                <Quote size={14} color={t.highlightColor} strokeWidth={2} className="shrink-0" />
                <span
                  className="text-[13px] font-medium"
                  style={{ color: t.highlightColor }}
                >
                  {t.highlight}
                </span>
              </div>
 
              <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                  style={{ backgroundColor: t.avatarBg }}
                >
                  {t.avatarInitial}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-slate-800">{t.name}</div>
                  <div className="text-[12px] text-slate-500">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Wrapper>
    </section>
  );
};


const audiences = [
  { emoji: "🚀", label: "HR Leaders" },
  { emoji: "📊", label: "CEOs & Founders" },
  { emoji: "💰", label: "Finance & Ops" },
  { emoji: "📋", label: "Project Managers" },
];

const DemoCTA = () => {
  return (
    <section className="bg-white py-10 px-6">
      <Wrapper>
      <div
        className=" rounded-3xl px-8 md:px-14 py-14 text-center"
        style={{
          background: "linear-gradient(135deg, #1D2FD1 0%, #1E4FE8 45%, #2CA6F0 100%)",
        }}
      >
        <h2 className="text-white font-bold text-3xl md:text-[2.25rem] leading-tight max-w-2xl mx-auto">
          Ready for a personalised, role-specific product walkthrough?
        </h2>
        <p className="mt-4 text-blue-100 text-[15px] max-w-xl mx-auto">
          Book a demo built around your exact role, team size, and industry challenges — not a generic product tour.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          {audiences.map(({ emoji, label }, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 text-[13px] text-white bg-white/15 border border-white/20 rounded-full px-3.5 py-1.5"
            >
              <span>{emoji}</span>
              {label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button className="bg-white text-blue-700 font-medium text-[14px] rounded-full px-6 py-3 hover:bg-blue-50 transition-colors">
            Book a Customised Demo
          </button>
          <button className="bg-white/10 text-white font-medium text-[14px] rounded-full px-6 py-3 border border-white/30 hover:bg-white/20 transition-colors">
            Talk to a Solutions Specialist
          </button>
        </div>
      </div>
      </Wrapper>
    </section>
  );
};



export default Solution