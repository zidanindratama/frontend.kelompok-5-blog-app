"use client";

import Image from "next/image";
import React from "react";

interface Tech {
  name: string;
  image: string;
}

const backendTechs: Tech[] = [
  {
    name: "Typescript",
    image: "/main/technologies/be/typescript.svg",
  },
  {
    name: "NestJS",
    image: "/main/technologies/be/nestjs.svg",
  },
  {
    name: "PassportJS",
    image: "/main/technologies/be/passport.svg",
  },
  {
    name: "JWT",
    image: "/main/technologies/be/jsonwebtokens.svg",
  },
  {
    name: "Cloudinary",
    image: "/main/technologies/be/cloudinary.svg",
  },
  {
    name: "Prisma ORM",
    image: "/main/technologies/be/prisma.svg",
  },
  {
    name: "MongoDB",
    image: "/main/technologies/be/mongodb.svg",
  },
];

const frontendTech: Tech[] = [
  {
    name: "Typescript",
    image: "/main/technologies/fe/typescript.svg",
  },
  {
    name: "NextJS",
    image: "/main/technologies/fe/nextdotjs.svg",
  },
  {
    name: "Tailwind CSS",
    image: "/main/technologies/fe/tailwindcss.svg",
  },
  {
    name: "ShadCN UI",
    image: "/main/technologies/fe/shadcnui.svg",
  },
  {
    name: "Lucide Icon",
    image: "/main/technologies/fe/lucide.svg",
  },
  {
    name: "React Hook Form",
    image: "/main/technologies/fe/reacthookform.svg",
  },
  {
    name: "React Query",
    image: "/main/technologies/fe/reactquery.svg",
  },
  {
    name: "Axios",
    image: "/main/technologies/fe/axios.svg",
  },
  {
    name: "Zod",
    image: "/main/technologies/fe/zod.svg",
  },
];

const Tech = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 gap-5 md:gap-10 items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-base md:text-lg xl:text-2xl capitalize">
              Technologies Used
            </h1>
            <p className="font-light text-xs md:text-base md:max-w-3xl mt-3">
              Our project utilizes a variety of advanced technologies to deliver
              seamless and efficient user experiences.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:gap-10 mt-10">
          <div className="">
            <h1 className="md:text-lg font-semibold p-2 bg-yellowBlog/30 w-fit">
              Frontend
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-5">
              {frontendTech.map((fe) => {
                return (
                  <div key={fe.name} className="flex flex-col items-center">
                    <Image
                      src={fe.image}
                      alt={fe.name}
                      width={300}
                      height={300}
                      className="w-10 md:w-20 h-10 md:h-20"
                    />
                    <h1 className="font-semibold mt-2">{fe.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <h1 className="md:text-lg font-semibold p-2 bg-yellowBlog/30 w-fit">
              Backend
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-5">
              {backendTechs.map((be) => {
                return (
                  <div key={be.name} className="flex flex-col items-center">
                    <Image
                      src={be.image}
                      alt={be.name}
                      width={300}
                      height={300}
                      className="w-10 md:w-20 h-10 md:h-20"
                    />
                    <h1 className="font-semibold mt-2">{be.name}</h1>
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

export default Tech;
