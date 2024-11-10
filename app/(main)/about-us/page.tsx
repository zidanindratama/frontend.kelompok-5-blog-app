import Creative from "@/components/main/about-us/Creative";
import Hero from "@/components/main/about-us/Hero";
import Started from "@/components/main/about-us/Started";
import Authors from "@/components/main/Authors";
import CTA from "@/components/main/CTA";
import Footer from "@/components/main/Footer";
import Missions from "@/components/main/Missions";
import Navbar from "@/components/main/Navbar";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Missions />
      <Creative />
      <Started />
      <Authors />
      <CTA />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
