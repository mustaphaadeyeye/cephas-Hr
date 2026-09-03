
import React from "react";
import { Mail } from "lucide-react";
import Wrapper from "./Wrapper";
import Flogo from "../assets/footerlogo.png";

const InstagramIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const XIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.3L1 2h7l4.9 6.1L18.9 2zm-1.2 18h1.9L7.4 4h-2l12.3 16z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#171717] px-5 py-12 text-white sm:px-8 sm:py-14 lg:px-10">
      <Wrapper>

        {/* Main Footer */}
        <div className="mx-auto grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5 lg:gap-8 xl:gap-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center">
              <img
                src={Flogo}
                alt="Cephas HR Logo"
                className="h-auto w-[140px] sm:w-[170px]"
              />
            </div>

            <p className="mb-4 max-w-[280px] text-[16px] font-bold leading-snug text-white sm:text-[18px]">
              The all-in-one HR, payroll, and workforce operating system
            </p>

            <p className="text-[12px] leading-relaxed text-white/50 sm:text-[14px]">
              © 2026 Cephas HR Inc. All rights reserved.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="mb-4 text-[15px] font-bold uppercase tracking-wider sm:text-[18px]">
              Product
            </h4>

            <ul className="space-y-2 text-[13px] text-white/70 sm:text-[16px]">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Core HR & Directory
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Recruitment & ATS
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Payroll & Compliance
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Time & Attendance
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Performance & Reviews
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  FinTech & Wallet
                </a>
              </li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="mb-4 text-[15px] font-bold uppercase tracking-wider sm:text-[18px]">
              Solutions
            </h4>

            <ul className="space-y-2 text-[13px] text-white/70 sm:text-[16px]">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  For HR Leaders
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  For Founders & CEOs
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  For Operations Teams
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Startups (1–50)
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Mid-Market (51–500)
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Enterprise (500+)
                </a>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="mb-4 text-[15px] font-bold uppercase tracking-wider sm:text-[18px]">
              Resources
            </h4>

            <ul className="space-y-2 text-[13px] text-white/70 sm:text-[16px]">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Blog & Insights
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  HR Template Library
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* WORKFORCE & FINANCE */}
          <div>
            <h4 className="mb-4 text-[15px] font-bold uppercase tracking-wider sm:text-[18px]">
              Workforce & Finance
            </h4>

            <ul className="space-y-2 text-[13px] text-white/70 sm:text-[16px]">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Contact Sales
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Security & Trust
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-4 text-center text-[12px] text-white/70 sm:gap-x-8 sm:text-sm">

            <a
              href="#"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <InstagramIcon />
              Instagram
            </a>

            <a
              href="#"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <LinkedInIcon />
              LinkedIn
            </a>

            <a
              href="#"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <XIcon />
              X (Twitter)
            </a>

            <a
              href="mailto:support@cephas.hr"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail size={16} />
              <span className="break-all">support@cephas.hr</span>
            </a>

          </div>
        </div>

      </Wrapper>
    </footer>
  );
};

export default Footer;

