import React from "react";
import { LogoIcon } from "../../svg/Logo";
import TrialButton from "../trialButton/Index";

const navbar = () => {
  return (
    <div className="w-full h-20 flex items-center justify-between px-[50px]">
      <div>
        <LogoIcon />
      </div>
      <nav className="text-[#201F22] flex items-center text-base font-medium">
        <div className="mx-2 px-4 py-2 rounded-full hover:bg-[#0F172A] hover:text-white transition-all ease-linear duration-150 cursor-pointer">
          Features
        </div>
        <div className="mx-2 px-4 py-2 rounded-full hover:bg-[#0F172A] hover:text-white transition-all ease-linear duration-150 cursor-pointer">
          Solutions
        </div>
        <div className="mx-2 px-4 py-2 rounded-full hover:bg-[#0F172A] hover:text-white transition-all ease-linear duration-150 cursor-pointer">
          Resources
        </div>
        <div className="mx-2 px-4 py-2 rounded-full hover:bg-[#0F172A] hover:text-white transition-all ease-linear duration-150 cursor-pointer">
          Pricing
        </div>
      </nav>
      <TrialButton />
    </div>
  );
};

export default navbar;
