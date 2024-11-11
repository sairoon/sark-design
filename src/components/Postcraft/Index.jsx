import React from "react";
import TrialButton from "../trialButton/Index";
import { IdeaIcon } from "../../svg/Idea";
import { TutorialIcon } from "../../svg/Tutorial";
import { BlocksIcon } from "../../svg/Blocks";
import { CardIcon } from "../../svg/Card";

const PostCraft = () => {
  return (
    <div className="pt-44 pb-24 bg-white flex flex-col items-center justify-center px-72">
      <h1 className="font-primaryBold text-[42px] text-[#0F172A] mb-20">
        3,583 Customers are using Postcrafts
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-40 text-red-600">
        <div className="flex flex-row">
          <div>
            <IdeaIcon />
          </div>
          <div className="ml-8">
            <h4 className="font-primaryBold text-lg text-black mb-4">
              Made for Developers
            </h4>
            <p className="font-primaryRegular text-base text-[#52525B]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <TutorialIcon />
          </div>
          <div className="ml-8">
            <h4 className="font-primaryBold text-lg text-black mb-4">
              Helpful Video Tutorials
            </h4>
            <p className="font-primaryRegular text-base text-[#52525B]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <BlocksIcon />
          </div>
          <div className="ml-8">
            <h4 className="font-primaryBold text-lg text-black mb-4">
              120+ Coded Blocks
            </h4>
            <p className="font-primaryRegular text-base text-[#52525B]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <CardIcon />
          </div>
          <div className="ml-8">
            <h4 className="font-primaryBold text-lg text-black mb-4">
              Secured Payments
            </h4>
            <p className="font-primaryRegular text-base text-[#52525B]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <TrialButton />
      </div>
    </div>
  );
};

export default PostCraft;
