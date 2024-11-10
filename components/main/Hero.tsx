import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative py-12 md:py-20 bg-blackBlog">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col">
          <h1 className="uppercase text-white font-bold text-lg md:text-2xl lg:text-5xl text-center md:max-w-4xl mx-auto">
            YOUR SPACE FOR{" "}
            <span className="text-yellowBlog">HEALTHY LIVING</span>
          </h1>
          <p className="text-center mx-auto text-white md:max-w-2xl text-xs md:text-base lg:text-lg mt-5">
            We are here to help you live a healthy and balanced lifestyle,
            providing tips and inspiration to maintain your physical, mental,
            and emotional well-being.
          </p>
          <Button
            variant={"yellowBlog"}
            className="w-fit mx-auto font-bold mt-5 text-xs md:text-base md:px-10 md:py-6 rounded-none capitalize"
            asChild
          >
            <Link href={"/about-us"}>Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="p-6 hidden md:block">
        <Image
          src={"/main/hero.jpg"}
          className="w-full object-cover md:h-[60vh]"
          alt="Hero Image"
          width={1400}
          height={1400}
        />
      </div>
    </div>
  );
};

export default Hero;
