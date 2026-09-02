import React from 'react'
import Wrapper from '../components/Wrapper'
import { ArrowRight, ArrowDown, X, Check, ShieldCheck, Database, TrendingUp, Lock  } from "lucide-react";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <div>
        <AboutHero/>
        <AboutProblem/>
        <ProductPhilosophy/>
        <AboutPlatform/>
        <AboutPeople/>
        <TrialSection/>
        <Footer/>
    </div>
  )
}

const AboutHero = () => {
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
          Building the operating system for modern, productive workforces.
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[700px] text-[11px] leading-[2] text-[#444] sm:text-xs md:text-[18px]">
         Per-employee pricing that scales with your team. No hidden setup fees, no module paywalls, no long-term lock-ins.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            style={{
              background:
                "linear-gradient(135deg, #1233CC 0%, #0F3CCF 20%, #0596F1 80%, #0089EC 100%)",
            }}
            className="flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Explore the Platform
            <ArrowRight size={16} />
          </button>

          <button className="flex items-center gap-2 rounded-full border border-gray-200 px-8 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-gray-50">
            Meet the Team
            <ArrowDown size={16} />
          </button>
        </div>

      </div>
    </section>
            </Wrapper>
        </div>
    )
}

const oldWay = [
  "6+ separate tools",
  "Manual data reconciliation",
  "Error-prone payroll runs",
  "No real-time visibility",
];

const cephasWay = [
  "One unified platform",
  "Automated, connected data",
  "100% statutory accuracy",
  "Live AI workforce insights",
];

const AboutProblem = () => {
  return (
    <div className="bg-[#f7f8fa] py-16">
      <Wrapper>
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#111111] sm:text-4xl">
            The Problem We Are Solving
          </h2>
          <h3 className="mt-1 text-3xl font-bold text-[#193FD3] sm:text-4xl">
            (Why CephasHR Exists)
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 sm:text-base">
            Managing people has historically been fractured across
            disconnected spreadsheets, separate payroll systems, manual
            attendance sheets, and rigid task tools.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* Left: narrative text */}
          <div className="space-y-5 text-sm leading-relaxed text-[#444] sm:text-[15px]">
            <p>
              For decades, organisations have been forced to stitch together
              disconnected spreadsheets, separate payroll systems, manual
              attendance sheets, and rigid task tools — creating invisible
              seams where data gets lost, errors compound, and hours vanish
              into administrative overhead.
            </p>
            <p>
              Payroll didn't know what hours had been logged. HR didn't know
              which projects were running over budget. Finance couldn't
              reconcile expense claims without a three-day paper chase.
            </p>
            <p className="font-semibold text-[#111111]">
              CephasHR was built from scratch to fix that — uniting workforce
              data with actual daily work execution. Smart calendars, project
              tasks, and time tracking feed directly into zero-error payroll
              and AI-powered workforce analytics. One platform, no gaps.
            </p>
          </div>

          {/* Right: comparison cards */}
          <div className="space-y-4">
            {/* The Old Way */}
            <div className="rounded-2xl border border-red-100 bg-[#fef3f2] p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-red-500">
                The Old Way
              </p>
              <ul className="space-y-2.5">
                {oldWay.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-red-600"
                  >
                    <X size={14} className="shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CephasHR Way */}
            <div className="rounded-2xl border border-blue-100 bg-[#eef2ff] p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#193FD3]">
                CephasHR Way
              </p>
              <ul className="space-y-2.5">
                {cephasWay.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-[#193FD3]"
                  >
                    <Check size={14} className="shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};


const principles = [
  {
    icon: ShieldCheck,
    title: "Radical Simplicity",
    description:
      "Powerful enterprise tools don't need to be clunky or complicated. We design intuitive experiences for both admins and frontline employees.",
  },
  {
    icon: Database,
    title: "Data Integrity & Accuracy",
    description:
      "Payroll, statutory taxes, and employee records require zero-tolerance for error. Precision is engineered into every line of code.",
  },
  {
    icon: TrendingUp,
    title: "Employee-Centric Empowerment",
    description:
      "Great HR software serves the employee just as much as the manager, providing self-service transparency from day one.",
  },
  {
    icon: Lock,
    title: "Security by Design",
    description:
      "We treat organizational data, compensation details, and identity documents with bank-grade encryption and privacy controls.",
  },
];

const ProductPhilosophy = () => {
  return (
    <section className="bg-white py-16">
      <Wrapper>
        {/* Badge */}
        <div className="mb-5 flex justify-center">
          <span className="rounded-full border border-[#dcecff] bg-[#f7fbff] px-4 py-1.5 text-[10px] font-semibold tracking-wide text-[#1744d8]">
            OUR PRODUCT PHILOSOPHY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold leading-[1.15] text-[#111111] sm:text-4xl md:text-[44px]">
          Principles that shape{" "}
          <span className="text-[#193FD3]">every product decision.</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-500 sm:text-base">
          We don't design for feature checklists. We design for the person at
          the desk, the manager in the field, and the CFO who needs an answer
          by 9am.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6"
              >
                {/* Decorative blob */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#f5f8ff]" />

                <div className="relative z-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#eef2ff]">
                    <Icon size={18} className="text-[#193FD3]" />
                  </div>

                  <h3 className="mb-2 text-sm font-semibold text-[#111111]">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

const mainStats = [
  {
    value: "99.9%",
    label: "Platform Uptime SLA",
    note: "Guaranteed availability",
  },
  {
    value: "100%",
    label: "Statutory & Tax Compliance Rate",
    note: "Zero manual calculation errors",
  },
  {
    value: "80%",
    label: "Avg. Reduction in Admin Hours",
    note: "Per week, per HR team",
  },
  {
    value: "40,000+",
    label: "Employees Supported",
    note: "Across 12+ industries",
  },
];

const pillStats = [
  { value: "500+", label: "Companies onboarded" },
  { value: "₦2.8B+", label: "Payroll processed monthly" },
  { value: "4.9/5", label: "Customer satisfaction score" },
  { value: "< 10min", label: "Average setup time to live" },
];

const AboutPlatform = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #1233CC 0%, #0F3CCF 15%, #0B44D2 30%, #074CD4 45%, #0596F1 70%, #0083EA 85%, #0089EC 100%)",
      }}
      className="py-16"
    >
      <Wrapper>
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold tracking-wider text-white/70">
            CEPHASHR BY THE NUMBERS
          </p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Platform credibility you can measure.
          </h2>
        </div>

        {/* Main stats */}
        <div className="mb-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {mainStats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/90">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-white/50">{stat.note}</p>
            </div>
          ))}
        </div>

        {/* Pill stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {pillStats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/10 px-5 py-4 text-center"
            >
              <p className="text-lg font-bold text-white sm:text-xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

const team = [
  {
    initials: "CO",
    name: "Chukwuemeka Obi",
    role: "Co-Founder & CEO",
    roleColor: "text-[#193FD3]",
    avatarColor: "bg-gradient-to-br from-[#193FD3] to-[#0596F1]",
    bio: "Former VP of Operations at a 1,200-person logistics firm. Spent 7 years reconciling payroll across 4 states before building the system he wished had existed.",
  },
  {
    initials: "AN",
    name: "Adaeze Nwosu",
    role: "Co-Founder & CTO",
    roleColor: "text-[#0596F1]",
    avatarColor: "bg-gradient-to-br from-[#0596F1] to-[#3fd1e8]",
    bio: "Ex-Google engineer with 10 years in distributed systems and fintech infrastructure. Responsible for CephasHR's zero-downtime payroll engine and AI pipeline.",
  },
  {
    initials: "TA",
    name: "Tunde Afolabi",
    role: "Head of Product & Design",
    roleColor: "text-[#8b5cf6]",
    avatarColor: "bg-gradient-to-br from-[#8b5cf6] to-[#c084fc]",
    bio: "Previously led product design at Flutterwave. Architects the design system that makes CephasHR feel like consumer software inside an enterprise-grade platform.",
  },
  {
    initials: "SO",
    name: "Sade Okafor",
    role: "Head of Customer Success",
    roleColor: "text-[#16a34a]",
    avatarColor: "bg-gradient-to-br from-[#22c55e] to-[#4ade80]",
    bio: "12 years in HRIS implementation and workforce consulting across West Africa. Ensures every customer is fully operational — and genuinely successful — within 14 days.",
  },
];

const AboutPeople = () => {
  return (
    <section className="bg-[#f7f8fa] py-16">
      <Wrapper>
        {/* Badge */}
        <div className="mb-5 flex justify-center">
          <span className="rounded-full border border-[#dcecff] bg-[#f7fbff] px-4 py-1.5 text-[10px] font-semibold tracking-wide text-[#1744d8]">
            LEADERSHIP & TEAM
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold leading-[1.15] text-[#111111] sm:text-4xl">
          Built by people who've{" "}
          <span className="text-[#193FD3]">felt the problem firsthand.</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-gray-500 sm:text-base">
          Our founding team combines deep experience in enterprise software
          engineering, people operations, and financial compliance across
          African markets.
        </p>

        {/* Team cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex items-start gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white ${member.avatarColor}`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    {member.name}
                  </p>
                  <p className={`text-xs font-semibold ${member.roleColor}`}>
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-gray-500">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

const TrialSection = () => {
  return (
    <div className="py-16">
      <Wrapper>
        <div
          style={{
            background:
              "linear-gradient(135deg, #1233CC 0%, #0F3CCF 15%, #0B44D2 30%, #074CD4 45%, #0596F1 70%, #0083EA 85%, #0089EC 100%)",
          }}
          className="rounded-[24px] px-8 py-14 text-center md:py-16"
        >
          <h2 className="mx-auto text-[54px] w-1/2 font-bold leading-tight text-white md:text-4xl">
           Ready to partner with a team dedicated to your workforce success?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
           Talk with an HR solutions specialist or schedule an executive walkthrough of the CephasHR platform.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#193FD3] transition-colors hover:bg-gray-100">
              Schedule a Live Demo
            </button>

            <button className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
             Contact Our Team
            </button>
          </div>

         
        </div>
      </Wrapper>
    </div>
  );
};


export default AboutUs