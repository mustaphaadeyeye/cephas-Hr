const FinalCTA = () => {
  return (
    <div className="px-2 mt-20 pb-25">
      <div className="mx-auto flex h-[487px] max-w-[1439px] flex-col items-center justify-center rounded-[32px] bg-gradient-to-br from-[#0B1FB8] to-[#0596F1] px-6 py-10 text-center sm:px-10 sm:py-16">
        <h2 className="mx-auto max-w-[700px] text-[26px] font-bold leading-[1.3] text-white sm:text-[32px] md:text-[42px]">
          Ready to see both sides in action?
        </h2>

        <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-[1.6] text-white/80 sm:text-[15px]">
          Experience how Cephas HR connects high-level administrative governance
          with seamless employee self-service — in a demo built around your
          workflows.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="w-full rounded-full bg-white px-8 py-3 text-[14px] font-semibold text-[#1233CC] hover:bg-white/90 sm:w-auto">
            Book a Customized Demo
          </button>
          <button className="w-full rounded-full border border-white/50 px-8 py-3 text-[14px] font-semibold text-white hover:bg-white/10 sm:w-auto">
            View Full Pricing Matrix
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
