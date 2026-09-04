import { motion } from "framer-motion";
const aiModules = [
  {
    icon: "🗓️",
    title: "AI Task & Schedule Optimizer",
    description:
      "Recommends optimal schedule slots based on deadlines, leave calendars, and individual capacity.",
  },
  {
    icon: "⏱️",
    title: "AI Timesheet Auditor",
    description:
      "Flags duplicate entries, abnormal overtime spikes, and unallocated gaps automatically.",
  },
  {
    icon: "🧾",
    title: "AI Expense Policy Guardian",
    description:
      "Detects duplicate claims and flags out-of-policy expenses before managerial review.",
  },
  {
    icon: "📊",
    title: "AI Workforce Intelligence",
    description:
      "Summarises weekly company-wide output, utilisation bottlenecks, and cost forecasts.",
  },
];

const engineFeatures = [
  {
    icon: "🔍",
    title: "Task & Schedule Optimizer",
    description: "Recommends optimal slots based on leave calendars & capacity",
  },
  {
    icon: "⏱️",
    title: "Timesheet Auditor",
    description: "Flagged 2 duplicate entries and 1 overtime anomaly this week",
  },
  {
    icon: "🧾",
    title: "Expense Policy Guardian",
    description: "Detected 1 out-of-policy claim before manager review",
  },
  {
    icon: "📊",
    title: "Workforce Intelligence",
    description: "Weekly digest: 87% utilization, ₦2.1M payroll impact",
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};
const AIEngineSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      custom={0}
      variants={fadeUp}
      className="mx-auto max-w-[1400px] rounded-[32px] bg-gradient-to-br from-[#0B44D2] to-[#0596F1] p-10 md:p-14"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
        {/* Left column */}
        <div className="flex-1 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[12px] font-medium">
            ⚙️ CephasHR AI Engine
          </span>

          <h2 className="mt-5 text-[32px] font-bold leading-[1.2] md:text-[38px]">
            Four AI modules working in the background always
          </h2>

          <p className="mt-4 text-[14px] leading-[1.6] text-white/80">
            AI isn't an add-on. It's embedded across every workflow — auditing,
            optimising, summarising and protecting your organisation in real
            time.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {aiModules.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl bg-white/10 p-4"
              >
                <span className="text-[18px]">{item.icon}</span>
                <div>
                  <p className="text-[14px] font-semibold">{item.title}</p>
                  <p className="mt-1 text-[13px] text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col justify-between rounded-3xl bg-white p-6 shadow-lg">
          <div>
            <div className="flex items-center gap-3 border-b border-[#F0F0F0] pb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0596F1] text-white">
                ⚙️
              </span>
              <div>
                <p className="text-[15px] font-bold text-[#111]">
                  CephasHR AI Engine
                </p>
                <p className="flex items-center gap-1 text-[12px] text-[#0596F1]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />4
                  active intelligence modules
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {engineFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl bg-[#F7F8FA] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[16px]">{item.icon}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#111]">
                        {item.title}
                      </p>
                      <p className="text-[12px] text-[#666]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#10B981]" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#0B44D2] to-[#0596F1] p-4 text-white">
            <p className="flex items-center gap-2 text-[13px] font-semibold">
              💬 Employee AI Assistant
            </p>
            <p className="mt-1 text-[13px] text-white/90">
              "How many leave days do I have left?" →{" "}
              <span className="font-semibold">8 days</span> remaining. Next
              approved leave: Aug 15–17.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIEngineSection;
