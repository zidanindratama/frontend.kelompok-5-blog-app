"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/helpers/formatDate";
import { useFetchData } from "@/hooks/useFetchData";
import { Blog } from "@/interface/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blogSlug: string;
};

const BlogDetail = ({ blogSlug }: Props) => {
  const {
    data: blogData,
    isSuccess,
    isLoading,
  } = useFetchData({
    queryKey: ["blogData"],
    dataProtected: `blogs/${blogSlug}`,
  });

  const blog = blogData?.data as Blog;

  return (
    <div className="relative py-12 md:py-20 bg-white">
      {isLoading ? (
        <Skeleton className="max-w-7xl h-96 mx-auto" />
      ) : (
        blog && (
          <>
            <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
              <div className="flex flex-row items-center gap-5">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={blog.author.image!} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h1 className="font-bold text-[#592EA9] md:text-lg">
                    {blog.author.name}
                  </h1>
                  <p className="text-xs md:text-sm">
                    Posted on {formatDate(blog.createdAt)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-5 md:mt-10">
                <h1 className="uppercase font-bold text-lg md:text-2xl lg:text-5xl md:max-w-4xl">
                  {blog.title}
                </h1>
                <p className="md:max-w-3xl text-xs md:text-base lg:text-lg mt-2 md:mt-5">
                  {blog.shortDescription}
                </p>
              </div>
            </div>
            <div className="p-6 block">
              <Image
                src={blog.image}
                className="w-full object-cover md:h-[60vh]"
                alt={blog.slug}
                width={1400}
                height={1400}
              />
            </div>
            <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
              <div
                className="rich-text-content prose"
                dangerouslySetInnerHTML={{ __html: blogData?.data.content }}
              />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default BlogDetail;
