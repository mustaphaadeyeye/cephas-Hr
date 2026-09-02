import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Wrapper from "../components/Wrapper";

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Starter and Growth plans come with a 14-day free trial — no credit card required. You can explore every feature in your tier before committing.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Pricing is per employee, per month. You're only billed for active employees on your platform, and you can add or remove seats as your team changes.",
  },
  {
    question: "What happens if we exceed our employee limit?",
    answer:
      "We'll notify you before you hit your plan's limit. You can upgrade to the next tier at any time, and your data and settings carry over automatically.",
  },
  {
    question: "Can we switch plans mid-cycle?",
    answer:
      "Yes, you can upgrade or downgrade at any time. Upgrades apply immediately; downgrades take effect at the start of your next billing cycle.",
  },
  {
    question: "Is our data safe and NDPR-compliant?",
    answer:
      "Yes. All customer data is hosted within Nigeria and stored in compliance with the Nigeria Data Protection Regulation (NDPR), with encryption in transit and at rest.",
  },
  {
    question: "Do you support multi-entity organisations?",
    answer:
      "Yes, this is available on our Growth and Enterprise plans, letting you manage payroll and HR across multiple legal entities or subsidiaries from one account.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "Our team guides you through data migration, payroll setup, and employee onboarding. Most teams are fully live within 3–14 days depending on plan and company size.",
  },
  {
    question: "Can we integrate with our existing accounting or ERP software?",
    answer:
      "Yes, Enterprise plans include API and webhook access for integrating with accounting and ERP systems. Contact sales to confirm compatibility with your specific stack.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="rounded-2xl border border-gray-200 bg-white">
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between px-6 py-4 text-left"
    >
      <span className="text-sm font-medium text-[#111111]">
        {faq.question}
      </span>
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <ChevronDown size={16} className="text-[#111111]" />
      </span>
    </button>

    {isOpen && (
      <div className="px-6 pb-5">
        <p className="text-sm leading-relaxed text-gray-500">{faq.answer}</p>
      </div>
    )}
  </div>
);

const PriceFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <Wrapper>
        <div className="mb-10 text-center">
          <h2 className="text-[37px] font-bold text-[#272727]">FAQs</h2>
          <p className="mt-2 text-sm text-gray-500">
            Everything you need to know before you commit.
          </p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => toggleFaq(i)}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-[14px] text-gray-400">Still have questions?</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-full border border-[#193FD3] px-6 py-3 text-sm font-medium text-[#193FD3] hover:bg-[#f5f8ff]">
              Talk to a Sales Specialist
            </button>
            <button className="rounded-full bg-[#193FD3] px-6 py-3 text-sm font-medium text-white hover:bg-[#1535b8]">
              Book a Live Demo
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PriceFaq;