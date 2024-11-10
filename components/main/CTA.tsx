import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="relative py-12 md:py-20 bg-white">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col mx-auto text-center">
          <h3 className="uppercase text-xs md:text-base font-semibold text-center mx-auto">
            Join Us
          </h3>
          <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl mt-2 md:mt-5 text-center mx-auto">
            Become Part of Our Journey to Make a Difference
          </h1>
          <p className="font-light text-xs md:text-base mt-3 md:max-w-md text-center mx-auto">
            Join a community dedicated to inspiring change and promoting
            well-being. Let&apos;s make an impact together.
          </p>
          <Button
            variant={"yellowBlog"}
            className="w-fit mx-auto font-bold mt-5 text-xs md:text-base md:px-10 md:py-6 rounded-none capitalize"
            asChild
          >
            <Link href={"/sign-in"}>Join Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
