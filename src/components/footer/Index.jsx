import React from "react";
import { LogoIcon } from "../../svg/Logo";
import { TwitterIcon } from "../../svg/twitter";
import { FbIcon } from "../../svg/fb";
import { InstagramIcon } from "../../svg/Instagram";
import { GithubIcon } from "../../svg/Github";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white pt-20 pb-7 px-36">
      <div>
        <LogoIcon />
      </div>
      <div className="mt-16 grid grid-cols-5 gap-20">
        <div className="flex flex-col">
          <h4 className="font-primaryBold text-[#0F172A] text-sm uppercase mb-8">
            Company
          </h4>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            About
          </div>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Feature
          </div>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Works
          </div>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Career
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-primaryBold text-[#0F172A] text-sm uppercase mb-8">
            Help
          </h4>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Customer Support
          </div>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Delivery Details
          </div>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Terms & Conditions
          </div>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Privacy Policy
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-primaryBold text-[#0F172A] text-sm uppercase mb-8">
            Resources
          </h4>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Free eBooks
          </div>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Development Tutorial
          </div>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            How to - Blog
          </div>
          <div className="py-2 font-primaryRegular text-sm text-[#0F172A] hover:underline cursor-pointer underline-offset-4">
            Youtube Playlist
          </div>
        </div>
        <div className="flex flex-col col-span-2">
          <h4 className="font-primaryBold text-[#0F172A] text-sm uppercase mb-8">
            Subscribe to newsletter
          </h4>
          <div className="mb-7 flex flex-row">
            <input
              type="text"
              placeholder="Enter email address"
              className="placeholder:text-[#71717A] text-[#0F172A] rounded-s-[10px] bg-white text-sm font-primaryRegular border border-[#EAE9F2] w-[230px] h-10 pl-5 pr-1 py-6 leading-6 outline-none"
            />
            <button className="bg-[#2563EB] text-white px-14 py-3 hover:bg-[#3048a1] transition ease-linear duration-150 font-medium text-base rounded-e-[10px]">
              Join
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="text-sm font-primaryBold text-[#64748B] mb-2 uppercase">
                Call us
              </div>
              <a
                href="tel:+8801709771437"
                className="text-xl font-primaryBold text-[#0F172A]"
              >
                (+880) 170977-1437
              </a>
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-primaryBold text-[#64748B] mb-2 uppercase">
                email us
              </div>
              <a
                href="mailto:info@sairoon.com"
                className="text-xl font-primaryBold text-[#0F172A]"
              >
                info@sairoon.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-20 mb-5" />
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-primaryRegular text-[#0F172A]">
          © Copyright {currentYear}, All Rights Reserved
        </div>
        <div className="flex flex-row items-center gap-7">
          <a
            href="https://x.com/SairoonX/"
            target="_blank"
            className="w-[14px] h-[12px] text-[#0F172A] hover:scale-125 transition ease-out duration-150"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.facebook.com/mahmud.sairoon.10/"
            target="_blank"
            className="hover:scale-125 transition ease-out duration-150"
          >
            <FbIcon />
          </a>
          <a
            href="https://www.instagram.com/mahmud_sairoon/"
            target="_blank"
            className="hover:scale-125 transition ease-out duration-150"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://github.com/sairoon/"
            target="_blank"
            className="hover:scale-125 transition ease-out duration-150"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
