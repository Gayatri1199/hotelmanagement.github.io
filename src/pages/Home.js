import React from "react";
import HeroBanner from "../components/HeroBanner";
import AboutUsSection from "../components/AboutUsSection";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <AboutUsSection />
      <Services />
      <FeaturedRoom />
    </div>
  );
};

export default Home;
