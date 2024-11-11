"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useFetchData } from "@/hooks/useFetchData";
import { formatDate } from "@/helpers/formatDate";
import { truncateText } from "@/helpers/truncateText";
import { Skeleton } from "../ui/skeleton";
import { Blog } from "@/interface/interface";

const FeaturedPosts = () => {
  const {
    data: blogsData,
    isSuccess,
    isLoading,
  } = useFetchData({
    queryKey: ["blogsData"],
    dataProtected: `blogs?isPaginated=false`,
  });

  console.log(blogsData?.data.blogs);

  const blogs = blogsData?.data.blogs.slice(0, -1) as Blog[];
  const newestBlog = blogsData?.data.blogs.at(-1) as Blog;

  return (
    <div className="relative py-12 md:py-20 bg-white">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="font-bold text-base md:text-lg xl:text-2xl">
              Featured Post
            </h1>
            {isLoading ? (
              <Skeleton className="w-full h-96 mt-5 md:mt-8" />
            ) : (
              newestBlog && (
                <div className="mt-5 md:mt-8">
                  <Image
                    src={newestBlog.image}
                    className="w-full h-48 md:h-96 object-cover"
                    alt={newestBlog.slug}
                    width={1000}
                    height={1000}
                  />
                  <div className="p-6 border flex flex-col">
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
                      {truncateText(newestBlog.shortDescription, 130)}
                    </p>
                    <Button
                      variant={"yellowBlog"}
                      className="md:w-fit font-bold mt-5 text-xs md:text-base md:px-10 md:py-6 rounded-none capitalize"
                      asChild
                    >
                      <Link href={`/blogs/${newestBlog.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-bold text-base md:text-lg xl:text-2xl">
                All Posts
              </h1>
              <Link href={"/blogs"} className="text-[#592EA9]">
                View All
              </Link>
            </div>
            <div className="mt-5 md:mt-8 flex flex-col gap-2 md:gap-4">
              {isLoading ? (
                <div className="grid gap-5">
                  <Skeleton className="w-full h-24" />
                  <Skeleton className="w-full h-24" />
                  <Skeleton className="w-full h-24" />
                </div>
              ) : (
                blogs &&
                blogs.map((blog: Blog) => {
                  return (
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="bg-[#FBF6EA] hover:bg-yellowBlog/20"
                      key={blog.id}
                    >
                      <div className="p-4">
                        <div className="flex flex-col-reverse md:flex-row justify-between md:items-center font-medium my-2 md:my-5 gap-1">
                          <h1 className="text-sm md:text-base">
                            By{" "}
                            <Link href={"#"} className="text-[#592EA9]">
                              {blog.author.name}
                            </Link>
                          </h1>
                          <p className="text-xs md:text-base">
                            {formatDate(blog.createdAt)}
                          </p>
                        </div>
                        <h1 className="font-bold sm:text-lg md:text-xl xl:text-2xl">
                          {blog.title}
                        </h1>
                        <p className="font-light text-xs md:text-base mt-2">
                          {truncateText(blog.shortDescription, 70)}
                        </p>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
