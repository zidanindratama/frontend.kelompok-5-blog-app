import BlogDetail from "@/components/main/blogs/BlogDetail";
import CTA from "@/components/main/CTA";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import React from "react";

type Param = {
  slug: string;
};

type Props = {
  params: Param;
};

const BlogDetailPage = ({ params: { slug } }: Props) => {
  return (
    <div>
      <Navbar />
      <BlogDetail blogSlug={slug} />
      <CTA />
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
