import React from 'react'
import Wrapper from '../components/Wrapper'
import { ArrowRight, ArrowDown, X, Check } from "lucide-react";

const AboutUs = () => {
  return (
    <div>
        <AboutHero/>
        <AboutProblem/>
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

export default AboutUs