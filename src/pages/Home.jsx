import React from "react";
import Hero from "../components/hero/Index";
import Banner from "../components/banner/Index";
import PostCraft from "../components/Postcraft/Index";
import Testimonial from "../components/testimonial/Index";
import SalesProgress from "../components/sales/Index";
import ReceiveUpdate from "../components/receiveUpdate/Index";
import ManageTeam from "../components/manageTeam/Index";
import BottomBanner from "../components/banner2/Index";
import Footer from "../components/footer/Index";

const Home = () => {
  return (
    <div className="w-[1600px] mx-auto relative">
      <div className="w-full h-[1001px] bg-gradient-to-b from-[#EEF3FE] to-[#F2F2F2] overflow-hidden">
        <Hero />
        <Banner />
      </div>
      <PostCraft />
      <Testimonial />
      <SalesProgress />
      <ReceiveUpdate />
      <ManageTeam />
      <BottomBanner />
      <Footer />
    </div>
  );
};

export default Home;
