"use client";

import { Button } from "@/components/ui/button";
import { useFetchData } from "@/hooks/useFetchData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "@/helpers/formatDate";
import { truncateText } from "@/helpers/truncateText";
import { Blog } from "@/interface/interface";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedPPost = () => {
  const {
    data: blogsData,
    isSuccess,
    isLoading,
  } = useFetchData({
    queryKey: ["blogsData"],
    dataProtected: `blogs?isPaginated=false`,
  });

  const newestBlog = blogsData?.data.blogs.at(-1) as Blog;

  return (
    <div className="relative py-12 md:py-20 bg-[#FBF6EA]">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        {isLoading ? (
          <Skeleton className="w-full h-96" />
        ) : (
          newestBlog && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
              <div className="flex flex-col">
                <div className="flex flex-col-reverse md:flex-row justify-between md:items-center font-medium my-2 md:my-5 gap-1">
                  <h1 className="text-sm md:text-base">
                    By{" "}
                    <Link href={"#"} className="text-[#592EA9]">
                      {newestBlog.author.name}
                    </Link>
                  </h1>
                  <p className="text-xs md:text-base">
                    {formatDate(newestBlog.createdAt)}
                  </p>
                </div>
                <h1 className="font-bold text-base md:text-xl xl:text-2xl mb-2">
                  {newestBlog.title}
                </h1>
                <p className="font-light text-xs md:text-base">
                  {newestBlog.shortDescription}
                </p>
                <Button
                  variant={"yellowBlog"}
                  className="md:w-fit font-bold mt-5 text-xs md:text-base md:px-10 md:py-6 rounded-none capitalize"
                  asChild
                >
                  <Link href={`/blogs/${newestBlog.slug}`}>Read More</Link>
                </Button>
              </div>
              <Image
                src={newestBlog.image}
                alt={newestBlog.slug}
                width={1000}
                height={1000}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FeaturedPPost;
