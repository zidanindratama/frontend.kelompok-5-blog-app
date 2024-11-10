import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Post {
  id: number;
  author: string;
  created_at: string;
  title: string;
}

const posts: Post[] = [
  {
    id: 1,
    author: "Zidan Indratama",
    created_at: "August 23, 2024",
    title: "The Importance of Mindfulness in Daily Life",
  },
  {
    id: 2,
    author: "Rina Pratiwi",
    created_at: "September 10, 2024",
    title: "10 Easy Recipes for a Healthy Lifestyle",
  },
  {
    id: 3,
    author: "Budi Santoso",
    created_at: "September 15, 2024",
    title: "How to Stay Active While Working from Home",
  },
  {
    id: 4,
    author: "Diana Mardiana",
    created_at: "September 20, 2024",
    title: "Balancing Work and Wellness: Tips for Success",
  },
];

const FeaturedPosts = () => {
  return (
    <div className="relative py-12 md:py-20 bg-white">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="font-bold text-base md:text-lg xl:text-2xl">
              Featured Post
            </h1>
            <div className="mt-5 md:mt-8">
              <Image
                src={"/main/sports/sport-1.jpg"}
                className="w-full h-48 md:h-96 object-cover"
                alt="featured"
                width={1000}
                height={1000}
              />
              <div className="p-6 border flex flex-col">
                <div className="flex flex-col-reverse md:flex-row justify-between md:items-center font-medium my-2 md:my-5 gap-1">
                  <h1 className="text-sm md:text-base">
                    By{" "}
                    <Link href={"#"} className="text-[#592EA9]">
                      Zidan Indratama
                    </Link>
                  </h1>
                  <p className="text-xs md:text-base">October 18, 2024</p>
                </div>
                <h1 className="font-bold text-base md:text-xl xl:text-2xl mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </h1>
                <p className="font-light text-xs md:text-base">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <Button
                  variant={"yellowBlog"}
                  className="md:w-fit font-bold mt-5 text-xs md:text-base md:px-10 md:py-6 rounded-none capitalize"
                  asChild
                >
                  <Link href={"#"}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-bold text-base md:text-lg xl:text-2xl">
                All Posts
              </h1>
              <Link href={"#"} className="text-[#592EA9]">
                View All
              </Link>
            </div>
            <div className="mt-5 md:mt-8 flex flex-col gap-2 md:gap-4">
              {posts.map((post) => {
                return (
                  <div
                    className="bg-[#FBF6EA] hover:bg-yellowBlog/20"
                    key={post.id}
                  >
                    <div className="p-4">
                      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center font-medium my-2 md:my-5 gap-1">
                        <h1 className="text-sm md:text-base">
                          By{" "}
                          <Link href={"#"} className="text-[#592EA9]">
                            {post.author}
                          </Link>
                        </h1>
                        <p className="text-xs md:text-base">
                          {post.created_at}
                        </p>
                      </div>
                      <Link
                        href={"#"}
                        className="font-bold sm:text-lg md:text-xl xl:text-2xl"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
