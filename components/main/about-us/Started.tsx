import Image from "next/image";
import React from "react";

const Started = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-base md:text-lg xl:text-2xl capitalize">
              Discover Our Passionate Team
            </h1>
            <h4 className="my-3 font-semibold text-base md:text-lg">
              A dynamic collective united by a vision to inspire and empower.
            </h4>
            <p className="font-light text-xs md:text-base">
              Our journey began with a shared belief: that everyone deserves
              access to the knowledge and resources for a healthier, more
              vibrant life. This blog is our platform to share valuable
              insights, practical tips, and heartfelt stories that resonate with
              those seeking to enhance their well-being. We aim to create a
              community where wellness is not just a goal, but a lifestyle that
              inspires joy and fulfillment for all.
            </p>
          </div>

          <Image
            src={"/main/started.jpg"}
            alt="creative"
            width={1000}
            height={1000}
            className="md:order-first"
          />
        </div>
      </div>
    </div>
  );
};

export default Started;
