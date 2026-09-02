const OrganizationItem = ({ number, label }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl  px-6 py-5">
      <span className="md:text-[40px] text-[24px] font-bold text-[#D9E8FB] leading-none">
        {number}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-[#D9E8FB] to-transparent" />
      <span className="md:text-[16px] text-[14px] font-semibold text-[#1744d8] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default OrganizationItem;
