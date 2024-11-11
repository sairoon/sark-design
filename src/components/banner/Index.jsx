import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#0F172A] w-[1076px] rounded-[10px] absolute top-[900px] left-1/2 -translate-x-1/2">
      <div className="px-14 py-9">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center justify-center">
            <div className="font-primaryBold text-5xl text-white">110+</div>
            <div className="font-primaryMedium text-base mt-6 text-center text-[#CBD5E1]">
              Automation templates for creating your campaigns quickly
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-primaryBold text-5xl text-white">4M</div>
            <div className="font-primaryMedium text-base mt-6 text-center text-[#CBD5E1]">
              Automation templates for creating your campaigns quickly
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="font-primaryBold text-5xl text-white">99.99%</div>
            <div className="font-primaryMedium text-base mt-6 text-center text-[#CBD5E1]">
              Automation templates for creating your campaigns quickly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
