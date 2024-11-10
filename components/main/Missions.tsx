import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Missions = () => {
  return (
    <div className="relative py-12 md:py-20 bg-white">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 md:gap-x-10 bg-[#F4F0F8] p-5 md:p-10">
          <div className="">
            <h3 className="uppercase text-xs md:text-base font-semibold">
              ABOUT US
            </h3>
            <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl mt-2 md:mt-5">
              Inspiring Healthy Living for a Brighter Future
            </h1>
            <p className="font-light my-3 text-xs md:text-base">
              We are a community focused on promoting wellness, sharing tips and
              resources to help you find balance in your physical, mental, and
              emotional health.
            </p>
          </div>
          <div className="">
            <h3 className="uppercase text-xs md:text-base font-semibold">
              OUR MISSION
            </h3>
            <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl mt-2 md:mt-5">
              Empowering You to Live Your Best Life
            </h1>
            <p className="font-light my-3 text-xs md:text-base">
              Our mission is to inspire individuals to make positive choices
              each day, providing support and resources to guide you toward a
              healthier lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
