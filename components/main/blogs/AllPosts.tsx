"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { truncateText } from "@/helpers/truncateText";
import { useFetchData } from "@/hooks/useFetchData";
import { Blog } from "@/interface/interface";
import { Skeleton } from "@/components/ui/skeleton";

const AllPosts = () => {
  const {
    data: blogsData,
    isSuccess,
    isLoading,
  } = useFetchData({
    queryKey: ["blogsData"],
    dataProtected: `blogs?isPaginated=false`,
  });

  const blogs = blogsData?.data.blogs.slice(0, -1);
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col">
          <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl">
            All posts
          </h1>
          <div className="h-[1px] w-full bg-[#D0D1D3] my-5"></div>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5">
            <Skeleton className="w-full h-44" />
            <Skeleton className="w-full h-44" />
            <Skeleton className="w-full h-44" />
          </div>
        ) : (
          blogs && (
            <div className="flex flex-col gap-5 md:gap-10">
              {blogs.map((blog: Blog) => {
                return (
                  <div
                    className="flex flex-col md:flex-row md:gap-10 items-center"
                    key={blog.id}
                  >
                    <div className="md:w-1/2">
                      <Image
                        src={blog.image}
                        alt={blog.slug}
                        width={1000}
                        height={1000}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    <div className="flex flex-col md:w-1/2 p-4 md:p-0 border md:border-0">
                      {blog.categories.map((category) => {
                        return (
                          <Link
                            key={category.id}
                            href={`/categories/${category.category.slug}`}
                            className="uppercase text-xs md:text-base font-semibold text-[#592EA9]"
                          >
                            {category.category.name}
                          </Link>
                        );
                      })}
                      <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl mt-2 md:mt-5">
                        {blog.title}
                      </h1>
                      <p className="font-light my-3 text-xs md:text-base">
                        {truncateText(blog.shortDescription, 100)}
                      </p>
                      <Button
                        variant={"yellowBlog"}
                        className="md:w-fit font-bold mt-5 text-xs md:text-base md:px-10 md:py-6 rounded-none capitalize"
                        asChild
                      >
                        <Link href={`/blogs/${blog.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllPosts;
