import React from "react";
import Navbar from "../navbar/Index";
import { ButtonArrowIcon } from "../../svg/ButtonArrow";
import { TrustPilotIcon } from "../../svg/TrustPilot";
import { StarIcon } from "../../svg/star";

const Hero = () => {
  return (
    <>
    <Navbar />
      <div className="w-full flex relative">
        <div className="w-1/2 mt-44 ps-36 pe-24">
          <h1 className="text-[54px] font-primaryBold font-bold text-[#0F172A] leading-[58px]">
            Advanced email marketing software for your business
          </h1>
          <p className="mt-8 text-[#0F172A] font-primaryMedium text-[18px] opacity-70 ps-1 pe-5 box-border">
            Simple email marketing is clean and user-friendly dashboard software
            that helps you achieve business goals together. Using software makes
            it easier to create.
          </p>
          <button className="bg-[#2B59FF] text-white px-7 py-3 font-semibold text-base rounded-[5px] mt-8 flex items-center leading-7 tracking-normal">
            <span className="mr-2">Get 14 days free trial</span>
            <ButtonArrowIcon />
          </button>
          <div className="flex items-center mt-8">
            <div className="">
              <TrustPilotIcon />
            </div>
            <div className="ml-4 flex flex-row gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="text-[#334155] ml-2 font-primaryMedium text-base">
              4900+ 5 Stars
            </div>
          </div>
        </div>
        <div className="absolute -right-64 top-24">
          <img
            src="/svg/gmail.svg"
            alt=""
            className="w-[975px] h-[654px] hover:-translate-x-4 transition-all ease-linear duration-100"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
