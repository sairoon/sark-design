import React from "react";
import Hero from "../components/hero/Index";
import Banner from "../components/banner/Index";
import PostCraft from "../components/Postcraft/Index";

const Home = () => {
  return (
    <div className="w-[1600px] mx-auto relative">
      <div className="w-full h-[1001px] bg-gradient-to-b from-[#EEF3FE] to-[#F2F2F2] overflow-hidden">
        <Hero />
        <Banner />
      </div>
        <PostCraft />
    </div>
  );
};

export default Home;
