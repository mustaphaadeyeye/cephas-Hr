import vector from "../../../assets/Vector.svg";
import { motion } from "framer-motion";
const FeatureItem = ({ title, description }) => (
  <div className="flex items-start gap-3">
    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#CDEAFC] text-[#1744d8]">
      <img src={vector} alt="" />
    </span>
    <div>
      <p className="text-[15px] font-semibold text-[#111]">{title}</p>
      <p className="text-[13px] text-[#666]">{description}</p>
    </div>
  </div>
);

const PillarCard = ({
  badge,
  title,
  description,
  features,
  height = "auto",
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
      className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm"
      style={{ height, maxWidth: width }}
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#EFF2FF] px-3 py-1 text-[11px] font-semibold text-[#1744d8]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#1744d8]" />
        {badge}
      </span>

      <div>
        <h3 className="text-[22px] font-bold text-[#111]">{title}</h3>
        <p className="mt-2 text-[14px] text-[#666]">{description}</p>
      </div>

      <div className="flex flex-col gap-5">
        {features.map((item, index) => (
          <FeatureItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PillarCard;
