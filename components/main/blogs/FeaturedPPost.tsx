import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedPPost = () => {
  return (
    <div className="relative py-12 md:py-20 bg-[#FBF6EA]">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
          <div className="flex flex-col">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h1>
            <p className="font-light text-xs md:text-base">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <Button
              variant={"yellowBlog"}
              className="md:w-fit font-bold mt-5 text-xs md:text-base md:px-10 md:py-6 rounded-none capitalize"
              asChild
            >
              <Link href={"#"}>Read More</Link>
            </Button>
          </div>
          <Image
            src={"/main/sports/sport-1.jpg"}
            alt="featured"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPPost;
