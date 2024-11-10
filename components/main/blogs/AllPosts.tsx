import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { truncateText } from "@/helpers/truncateText";

interface Post {
  id: number;
  image: string;
  title: string;
  content: string;
  category: string;
}

const posts: Post[] = [
  {
    id: 1,
    image: "/main/sports/sport-3.jpg",
    title: "10 Tips for a Healthier Lifestyle",
    content:
      "Discover simple and effective tips to improve your daily routine and promote overall wellness.",
    category: "Health",
  },
  {
    id: 2,
    image: "/main/sports/sport-4.jpg",
    title: "The Benefits of Regular Exercise",
    content:
      "Learn how incorporating regular physical activity into your routine can enhance your physical and mental well-being.",
    category: "Lifestyle",
  },
  {
    id: 3,
    image: "/main/sports/sport-5.jpg",
    title: "How to Stay Motivated to Work Out",
    content:
      "Explore strategies to maintain your motivation for exercise and turn fitness into a fun habit.",
    category: "Fitness",
  },
  {
    id: 4,
    image: "/main/sports/sport-6.jpg",
    title: "Healthy Eating on a Budget",
    content:
      "Find out how to eat nutritious meals without breaking the bank with these affordable tips and recipes.",
    category: "Nutrition",
  },
  {
    id: 5,
    image: "/main/sports/sport-7.jpg",
    title: "Mindfulness and Mental Health",
    content:
      "Understand the importance of mindfulness practices and how they can improve your mental well-being.",
    category: "Mental Health",
  },
];

const AllPosts = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col">
          <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl">
            All posts
          </h1>
          <div className="h-[1px] w-full bg-[#D0D1D3] my-5"></div>
        </div>
        <div className="flex flex-col gap-5 md:gap-10">
          {posts.map((post) => {
            return (
              <div
                className="flex flex-col md:flex-row gap-5 md:gap-10 items-center"
                key={post.id}
              >
                <div className="md:w-1/2">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1000}
                    height={1000}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <Link
                    href={"#"}
                    className="uppercase text-xs md:text-base font-semibold text-[#592EA9]"
                  >
                    {post.category}
                  </Link>
                  <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl mt-2 md:mt-5">
                    {post.title}
                  </h1>
                  <p className="font-light my-3 text-xs md:text-base">
                    {truncateText(post.content, 100)}
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
            );
          })}
        </div>
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AllPosts;
