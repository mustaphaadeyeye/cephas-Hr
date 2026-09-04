import React from "react";
import OrganizationItem from "./OrganizationItem";
import PillarCard from "./Features/FeaturesCard";
import produtt from "../../assets/product.svg";
import cardimg from "../../assets/card.svg";
import actimg from "../../assets/activity.svg";
import Cad from "../../assets/card2.svg";
import Cadd from "../../assets/Card3.svg";
import calendar from "../../assets/Calendar.svg";
import { motion } from "framer-motion";

const ProductConnect = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
    }),
  };
  return (
    <div className="bg-white ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={0}
        variants={fadeUp}
        className="mx-auto max-w-[1400px] px-4 pt-20"
      >
        <OrganizationItem
          number="02"
          label="Smart Scheduling & Work Execution"
        />
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={0}
        variants={fadeUp}
        className="xl:px-24 px-10 text-left max-w-[900px] md:text-[37px] mt-6 text-[20px] font-medium leading-[1.4] text-[#444] "
      >
        Connect people, calendars and projects{" "}
        <span className="bg-[radial-gradient(50%_50%_at_50%_50%,_#58B9F6_0%,_#1233CC_100%)] bg-clip-text text-transparent">
          with zero scheduling friction.
        </span>
      </motion.p>
      <div className="flex flex-col px-4 xl:flex xl:flex-row md:flex md:flex-col items-center justify-center gap-10 mt-20 xl:max-w-[1300px] mx-auto ">
        <div className="flex-1">
          <PillarCard
            width="600px"
            badge="Work Admin / HR"
            title="Manage workload, projects and delivery"
            features={[
              {
                title: "Workload & Capacity Scheduling",
                description:
                  "View total team availability, detect calendar conflicts, and assign tasks based on real-time bandwidth.",
              },
              {
                title: "Multi-View Project Management",
                description:
                  "Oversee projects using Kanban boards, Gantt charts, interactive Timelines, and List views.",
              },
              {
                title: "Milestones & Budget Tracking",
                description:
                  "Set dependencies, define deliverables, and monitor labor budgets against project progress in real time.",
              },
              {
                title: "Multi-Source Task Creation",
                description:
                  "Spin up tasks from project boards, employee profiles, executive dashboards, or via CephasHR AI.",
              },
            ]}
          />
        </div>
        <div className="flex-1">
          <div className="relative ">
            <img src={produtt} alt="activit" className="w-full" />
            <img
              src={actimg}
              alt="product"
              className="absolute bottom-14 xl:-right-10 -right-2 xl:w-[500px] w-[400px] z-10"
            />
            <img
              src={cardimg}
              alt="card"
              className="absolute bottom-6 right-0 "
            />
            <img src={Cad} alt="card2" className="absolute -top-4 right-22 " />
            <img src={Cadd} alt="card3" className="absolute top-16 left-10 " />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 xl:flex xl:flex-row md:flex md:flex-col items-start justify-center gap-10 mt-20 max-w-[1300px] mx-auto ">
        <div className="flex-1">
          <PillarCard
            width="600px"
            badge="Staff / Employees"
            title="Your unified workspace for focused work"
            features={[
              {
                title: "Integrated Work Calendar",
                description:
                  "View scheduled shifts, upcoming deadlines, team meetings, and assigned tasks in a single unified view.",
              },
              {
                title: "Focus & Calendar Blocking",
                description:
                  "Block focus time to prevent overlapping meeting invites and prioritize deep work.",
              },
              {
                title: "Task Workspace",
                description:
                  "Manage daily to-dos, update subtask completion states, attach project assets, and collaborate via task comments.",
              },
            ]}
          />
        </div>
        <div className="flex-1">
          <img src={calendar} alt="calendar" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductConnect;
