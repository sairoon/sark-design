import React from "react";
import { CopyIcon } from "../../svg/Copy";
import { CustomizeIcon } from "../../svg/Customize";
import { SaleProgressCards } from "../../svg/SaleProgress";

const SalesProgress = () => {
  return (
    <div className="bg-white py-[100px] px-40 flex items-center gap-[180px]">
      <div className="flex flex-col items-center max-w-[428px]">
        <h1 className="text-[#0F172A] font-primaryBold text-[42px] leading-[48px] mb-16">
          Increase your sales via email marketing
        </h1>
        <div className="grid grid-rows-2">
          <div className="flex flex-row mb-10">
            <div>
              <CopyIcon />
            </div>
            <div className="ml-6">
              <h4 className="text-[#0F172A] font-primaryBold text-lg">
                Simply Copy & Paste
              </h4>
              <p className="text-[#12141D] font-primaryRegular text-base mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt elementum feugiat interdum tortor, porttitor morbi sed
                facilisis.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <CustomizeIcon />
            </div>
            <div className="ml-6">
              <h4 className="text-[#0F172A] font-primaryBold text-lg">
                Easy to Customize
              </h4>
              <p className="text-[#12141D] font-primaryRegular text-base mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt elementum feugiat interdum tortor, porttitor morbi sed
                facilisis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="/images/sales-progress.png"
          alt="sales progress graph"
          className="scale-[1.20] -translate-y-2"
        />
        <div className="absolute bottom-[10%] -right-20 px-16 py-1 translate-x-[-50%] cursor-pointer translate-y-[-50%] rounded-lg select-none">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};

export default SalesProgress;
