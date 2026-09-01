
import React from "react";

const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 xl:px-18 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;






