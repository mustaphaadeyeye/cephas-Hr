import React from 'react'
import { Mail } from 'lucide-react'
import Wrapper from './Wrapper'
import Flogo from "../assets/footerlogo.png"


const InstagramIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedInIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

const XIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.3L1 2h7l4.9 6.1L18.9 2zm-1.2 18h1.9L7.4 4h-2l12.3 16z" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white px-8 py-14">
        <Wrapper>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={Flogo} alt="Cephas HR Logo" />
          </div>
         <p className="text-white font-bold text-[18px] leading-snug mb-4 max-w-[210px]">
  The all-in-one HR, payroll, and workforce operating system
</p>
          <p className="text-white/50 text-xs leading-relaxed">
            © 2026 Cephas HR Inc. All rights reserved.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">Core HR & Directory</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Recruitment & ATS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Payroll & Compliance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Time & Attendance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Performance & Reviews</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FinTech & Wallet</a></li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-4">Solutions</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">For HR Leaders</a></li>
            <li><a href="#" className="hover:text-white transition-colors">For Founders & CEOs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">For Operations Teams</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Startups (1–50)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mid-Market (51–500)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Enterprise (500+)</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">Blog & Insights</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">HR Template Library</a></li>
            <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
          </ul>
        </div>

        {/* WORKFORCE & FINANCE */}
        <div>
          <h4 className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-4">Workforce & Finance</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security & Trust</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
            <InstagramIcon /> Instagram
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
            <XIcon /> X (Twitter)
          </a>
          <a href="mailto:support@cephas.hr" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} /> support@cephas.hr
          </a>
        </div>
      </div>
      </Wrapper>
    </footer>
  )
}

export default Footer