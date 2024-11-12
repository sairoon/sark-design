import React from "react";
import TrialButton from "../trialButton/Index";

const ReceiveUpdate = () => {
  return (
    <div className="bg-[#F8FAFC] px-36 py-[100px] flex flex-row items-center justify-between">
      <div className="w-2/3">
        <img src="/svg/mail.svg" alt="" className="scale-110 -translate-x-2" />
      </div>
      <div className="max-w-[441px] flex flex-col w-1/3 -translate-y-2">
        <h3 className="text-[#0F172A] font-primaryBold w-full text-[42px] leading-[48px] mb-6">
          Customers can easily receive new updates
        </h3>
        <p className="text-[#3F3F46] font-primaryRegular text-base mb-10 w-[430px]">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque
          aliquam enim.
        </p>
        <div>
          <TrialButton />
        </div>
      </div>
    </div>
  );
};

export default ReceiveUpdate;
