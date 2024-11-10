import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-10 mb-5 md:mb-10">
          <div className="flex flex-col">
            <h3 className="uppercase text-xs md:text-base font-semibold">
              ABOUT US
            </h3>
            <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl mt-2 md:mt-5">
              We are a team of passionate content creators sharing knowledge and
              insights
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="font-light text-xs md:text-base mt-3 text-justify">
              This project is part of our Web Programming course in the 5th
              semester, built with Next.js and enhanced with ShadCN UI
              components. Our goal is to deliver an engaging, responsive
              platform for sharing valuable insights on various topics.
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 md:block">
        <Image
          src={"/main/hero-about-us.jpg"}
          className="w-full object-cover md:h-[70vh]"
          alt="Hero Image"
          width={1400}
          height={1400}
        />
      </div>
    </div>
  );
};

export default Hero;
