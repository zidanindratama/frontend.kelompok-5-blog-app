import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Started = () => {
  return (
    <div className="relative py-12 md:py-20 bg-white">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center justify-center">
          <Image
            src={"/main/sports/sport-2.jpg"}
            className="w-full object-cover md:h-96"
            alt="Healthy Lifestyle"
            width={1400}
            height={1400}
          />
          <div className="">
            <h3 className="uppercase text-xs md:text-base font-semibold">
              Why We Started
            </h3>
            <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl mt-2 md:mt-5">
              A Journey Towards Wellness and Balance
            </h1>
            <p className="font-light my-3 text-xs md:text-base">
              We began with a simple goal such as to inspire healthier choices.
              Our passion grew as we connected with others seeking balance in
              their physical, mental, and emotional well-being.
            </p>
            <Button
              variant={"yellowBlog"}
              className="w-fit mx-auto font-bold mt-5 text-xs md:text-base md:px-10 md:py-6 rounded-none capitalize"
              asChild
            >
              <Link href={"/about-us"}>Discover our story</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
