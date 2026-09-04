import { motion } from "framer-motion";
const StatBox = ({ value, total, label }) => (
  <div className="flex flex-col items-center rounded-xl bg-[#F5F6F8] px-4 py-3">
    <p className="text-[20px] font-bold text-[#111]">
      {value}
      <span className="text-[13px] font-medium text-[#999]">/{total}</span>
    </p>
    <p className="text-[11px] text-[#777]">{label}</p>
  </div>
);

const MetricBar = ({ label, score, max = 100, color }) => (
  <div>
    <div className="mb-1 flex items-center justify-between text-[13px]">
      <span className="text-[#444]">{label}</span>
      <span className="font-semibold" style={{ color }}>
        {score}/{max}
      </span>
    </div>
    <div className="h-2 w-full rounded-full bg-[#EDEFF3]">
      <div
        className="h-2 rounded-full"
        style={{ width: `${(score / max) * 100}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

const PerformanceCard = ({
  title,
  badge,
  stats,
  metrics,
  winsTitle,
  wins,
  width = "auto",
}) => {
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
      className="flex w-full max-w-[440px] flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm"
      style={{ maxWidth: width }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold text-[#111]">{title}</h3>
        <span className="rounded-full bg-[#E7F0FF] px-3 py-1 text-[11px] font-semibold text-[#1744d8]">
          {badge}
        </span>
      </div>

      {/* Stat boxes */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <StatBox
            key={index}
            value={stat.value}
            total={stat.total}
            label={stat.label}
          />
        ))}
      </div>

      {/* Metric bars */}
      <div className="flex flex-col gap-4">
        {metrics.map((metric, index) => (
          <MetricBar
            key={index}
            label={metric.label}
            score={metric.score}
            max={metric.max}
            color={metric.color}
          />
        ))}
      </div>

      {/* Wins box */}
      <div className="rounded-2xl bg-[#F5F6F8] p-4">
        <p className="mb-2 text-[13px] font-semibold text-[#111]">
          📌 {winsTitle}
        </p>
        <ul className="flex flex-col gap-1">
          {wins.map((win, index) => (
            <li key={index} className="text-[13px] text-[#555]">
              ✓ {win}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PerformanceCard;
