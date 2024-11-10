import Image from "next/image";
import React from "react";

const Creative = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-base md:text-lg xl:text-2xl capitalize">
              Meet Our Creative Team
            </h1>
            <h4 className="my-3 font-semibold text-base md:text-lg">
              A diverse group of passionate individuals dedicated to
              transforming ideas into impactful solutions.
            </h4>
            <p className="font-light text-xs md:text-base">
              Our team is driven by creativity and a passion for wellness. We
              combine fresh ideas with expertise to bring you engaging content
              that promotes a balanced lifestyle. Together, we&apos;re committed
              to making wellness accessible, enjoyable, and inspiring for all.
            </p>
          </div>

          <Image
            src={"/main/creative.jpg"}
            alt="creative"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Creative;
