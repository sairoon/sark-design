import React from "react";
import TrialButton from "../trialButton/Index";

const BottomBanner = () => {
  return (
    <div className="bg-[#0F172A] py-[100px] flex flex-col items-center justify-center">
      <h1 className="text-white text-[48px] font-primaryBold text-center mb-[18px] leading-[60px]">
        Ready to get started?
      </h1>
      <p className="text-[#E2E8F0] text-lg font-primaryRegular mt-4 text-center w-[500px] mb-9">
        With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page.
      </p>
      <div>
        <TrialButton />
      </div>
      <p className="text-[#CBD5E1] text-sm font-primaryRegular mt-6 text-center w-[500px]">
        No credit card required
      </p>
    </div>
  );
};

export default BottomBanner;
