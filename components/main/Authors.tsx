import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Team {
  id: number;
  name: string;
  NPM: string;
  link: string;
  image: string;
}

const teams: Team[] = [
  {
    id: 1,
    name: "Dimas Arya",
    NPM: "50422428",
    link: "https://www.instagram.com/arya_dimas99",
    image: "/main/persons/dimas.jpg",
  },
  {
    id: 1,
    name: "Kerraf Albar Ali",
    NPM: "50422775",
    link: "https://www.instagram.com/kerrafalbr",
    image: "/main/persons/kerraf.jpg",
  },
  {
    id: 2,
    name: "Zidan Indratama",
    NPM: "50422968",
    link: "https://www.linkedin.com/in/zidan-indratama",
    image: "/main/persons/zidan.jpg",
  },
  {
    id: 3,
    name: "Rifqi Dwi Putra",
    NPM: "51422145",
    link: "https://www.instagram.com/mhmmdrifqidwi/",
    image: "/main/persons/rifqi.jpg",
  },
  {
    id: 4,
    name: "Muhammad Iqbal",
    NPM: "51422078",
    link: "https://www.instagram.com/iqbalsanwani/",
    image: "/main/persons/iqbal.png",
  },
  {
    id: 5,
    name: "Rakan Fatih",
    NPM: "51422370",
    link: "https://www.instagram.com/rakanfth",
    image: "/main/persons/rakan.jpg",
  },
];

const Authors = () => {
  return (
    <div className="relative py-12 md:py-20 bg-white">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col items-center mx-auto justify-center">
          <h1 className="font-bold text-base md:text-lg xl:text-2xl text-center">
            MEET OUR TEAM
          </h1>
          <p className="font-light my-3 text-xs md:text-base md:max-w-3xl text-center">
            Our team is dedicated to promoting a healthy and balanced lifestyle.
            We strive to empower individuals with the knowledge and tools to
            enhance their physical, mental, and emotional well-being, making
            every step towards wellness a shared journey.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 mt-10">
          {teams.map((team) => {
            return (
              <Link
                target="_blank"
                href={team.link}
                className="bg-[#FBF6EA] hover:bg-yellowBlog/40 flex flex-col items-center mx-auto flex-1 w-full md:w-fit"
                key={team.id}
              >
                <Image
                  src={team.image}
                  className="h-64 w-64 object-cover hidden md:block"
                  width={1000}
                  height={1000}
                  alt={team.name}
                />
                <div className="p-6 flex flex-col mt-3 items-center justify-center mx-auto">
                  <h1 className="font-bold text-sm md:text-base md:max-w-90 text-center">
                    {team.name}
                  </h1>
                  <p>{team.NPM}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Authors;
