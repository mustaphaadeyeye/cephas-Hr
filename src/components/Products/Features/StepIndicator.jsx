const steps = [
  { label: "Step 01" },
  { label: "Step 02" },
  { label: "Step 03" },
];

const HrOperations = [
  {
    title: "Configure",
    desc: "Set up people, policies, role-based permissions and multi-level approval workflows. Import existing employee records in minutes.",
  },
  {
    title: "Automate",
    desc: "Let CephasHR handle timesheets, expense routing, payroll runs, onboarding tasks and approval chains without manual intervention.",
  },
  {
    title: "Empower",

    desc: "Give employees self-service access to every HR service. Give leaders real-time dashboards. Let AI surface what needs attention.",
  },
];
const StepIndicator = () => {
  return (
    <div>
      <div className="relative mx-auto flex max-w-[1000px] items-center justify-between px-4">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-[#B8D9FF]" />

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF3FF]"
          >
            <span className="text-[13px] font-semibold text-[#1744d8]">
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col xl:flex xl:flex-row md:flex md:flex-col mt-18 items-center justify-center max-w-[1000px] mx-auto gap-14">
        {HrOperations.map((items, index) => (
          <div key={index} className="flex flex-col gap-4 items-center">
            <p className="text-[#272727] text-[28px] font-bold">
              {items.title}
            </p>
            <p className="w-[336px] text-center text-[18px]">{items.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
