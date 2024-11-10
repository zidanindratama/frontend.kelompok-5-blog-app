import AllPosts from "@/components/main/blogs/AllPosts";
import FeaturedPPost from "@/components/main/blogs/FeaturedPPost";
import CTA from "@/components/main/CTA";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import React from "react";

const BlogsPage = () => {
  return (
    <div>
      <Navbar />
      <FeaturedPPost />
      <AllPosts />
      <CTA />
      <Footer />
    </div>
  );
};

export default BlogsPage;
