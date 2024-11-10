import Authors from "@/components/main/Authors";
import CTA from "@/components/main/CTA";
import FeaturedPosts from "@/components/main/FeaturedPosts";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Missions from "@/components/main/Missions";
import Navbar from "@/components/main/Navbar";
import Started from "@/components/main/Started";
import Testimnials from "@/components/main/Testimnials";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <Missions />
      <Started />
      <Testimnials />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
