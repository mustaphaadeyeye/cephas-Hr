import { motion } from "framer-motion";
const quickActions = [
  { icon: "⏱️", label: "Start Timer" },
  { icon: "📄", label: "Submit Leave" },
  { icon: "📷", label: "Snap Receipt" },
  { icon: "🧾", label: "View Payslip" },
];

const MobileAppCard = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      custom={0}
      variants={fadeUp}
      className="w-full overflow-hidden rounded-3xl bg-white shadow-lg"
    >
      <div className="bg-gradient-to-br from-[#0B44D2] to-[#0596F1] px-5 pb-8 pt-5 text-white">
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-bold">CephasHR Mobile</p>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium">
              iOS
            </span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium">
              Android
            </span>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white/15 p-4">
          <p className="text-[12px] text-white/80">Today · Good morning, Ada</p>
          <p className="mt-1 text-[15px] font-semibold">
            3 tasks due · 2 approvals pending
          </p>
        </div>
      </div>

      <div className="-mt-4 rounded-t-3xl bg-white px-5 pb-5 pt-4">
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-2xl bg-[#F7F8FA] px-4 py-4"
            >
              <span className="text-[16px]">{action.icon}</span>
              <span className="text-[13px] font-medium text-[#111]">
                {action.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-2xl bg-[#F7F8FA] px-4 py-4">
          <p className="text-[13px] font-semibold text-[#111]">Shift Today</p>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-[13px] text-[#777]">08:00 – 17:00</span>
            <span className="flex items-center gap-1.5 text-[13px] font-medium text-[#10B981]">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              Clocked In
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileAppCard;
