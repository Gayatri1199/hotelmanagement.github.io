import React from "react";
import HeroBanner from "../components/HeroBanner";
import AboutUsSection from "../components/AboutUsSection";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";
import Loading from "../components/Loading";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <AboutUsSection />
      <Services />
      <FeaturedRoom />
      <Loading />
    </div>
  );
};

export default Home;
