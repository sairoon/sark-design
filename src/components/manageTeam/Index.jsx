import React from "react";
import TrialButton from "../trialButton/Index";

const ManageTeam = () => {
  return (
    <div className="bg-white py-[100px] px-[152px] grid grid-cols-[2fr_3fr] items-center relative">
      <div className="flex flex-col items-center max-w-[430px]">
        <h1 className="text-[#0F172A] font-primaryBold text-[42px] leading-[48px] mb-6">
          Easily customizable & manage your team
        </h1>
        <p className="text-[#3F3F46] font-primaryRegular text-base mb-11">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque
          aliquam enim.
        </p>
        <div className="me-auto">
          <TrialButton />
        </div>
      </div>
      <div className="ms-auto">
        <img src="/images/deals-graphic.png" alt="deals graph image" />
      </div>
      <div className="absolute bottom-36 right-1/3 w-[210px] bg-white shadow-xl rounded-[10px] py-1">
        <div className="w-full flex py-3 px-4">
          <input
            type="checkbox"
            id="checkbox1"
            className="accent-[#2B59FF] cursor-pointer"
            defaultChecked
          />
          <img
            src="https://picsum.photos/200"
            alt="checkbox image"
            className="w-6 h-6 rounded-full ml-6 mr-3"
          />
          <label
            htmlFor="checkbox1"
            className="text-[#0F172A] font-primaryMedium text-sm cursor-pointer select-none"
          >
            Jane Doe
          </label>
        </div>
        <hr className="w-[75%] mx-auto text-[#12141D]" />
        <div className="w-full flex py-3 px-4">
          <input
            type="checkbox"
            id="checkbox2"
            className="accent-[#2B59FF] cursor-pointer"
          />
          <img
            src="https://picsum.photos/300"
            alt="checkbox image"
            className="w-6 h-6 rounded-full ml-6 mr-3"
          />
          <label
            htmlFor="checkbox2"
            className="text-[#0F172A] font-primaryMedium text-sm select-none cursor-pointer"
          >
            Jones Dermot
          </label>
        </div>
        <hr className="w-[75%] mx-auto text-[#12141D]" />
        <div className="w-full flex py-3 px-4">
          <input
            type="checkbox"
            id="checkbox3"
            className="accent-[#2B59FF] cursor-pointer"
          />
          <img
            src="https://picsum.photos/100"
            alt="checkbox image"
            className="w-6 h-6 rounded-full ml-6 mr-3"
          />
          <label
            htmlFor="checkbox3"
            className="text-[#0F172A] font-primaryMedium text-sm cursor-pointer select-none"
          >
            Martin Merces
          </label>
        </div>
      </div>
    </div>
  );
};

export default ManageTeam;
