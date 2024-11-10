"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { navLinks } from "./Navbar";
import { Button } from "../ui/button";
import { IconType } from "react-icons";

interface Social {
  id: number;
  icon: IconType;
  href: string;
}

const socials: Social[] = [
  {
    id: 1,
    icon: FaInstagramSquare,
    href: "https://instagram.com/zidanindratama",
  },
  {
    id: 2,
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/zidan-indratama",
  },
  {
    id: 3,
    icon: FaGithubSquare,
    href: "https://github.com/zidanindratama",
  },
];

const Footer = () => {
  return (
    <div className="relative py-12 md:py-20 bg-[#232536]">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
          <Link
            className="text-yellowBlog font-bold text-base md:text-lg lg:text-xl"
            href={"#"}
          >
            HealthScape.
          </Link>
          <div className="flex flex-row items-center justify-between gap-5">
            {navLinks.map((navLink) => {
              return (
                <Link
                  href={navLink.href}
                  key={navLink.id}
                  className={`text-base text-white relative pb-1 font-semibold hover:text-yellowBlog`}
                >
                  {navLink.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="bg-[#2E3040] my-5 p-10 grid grid-cols-1 md:grid-cols-2 md:items-center justify-between gap-5 md:gap-10">
          <div>
            <h1 className="text-white font-bold sm:text-lg md:text-xl xl:text-2xl">
              Subscribe to our news letter to get latest updates and news
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center w-full">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="w-full rounded-none border-[#4C4C4C] text-white/50 py-3 md:py-6"
            />
            <Button
              variant={"yellowBlog"}
              className="w-full md:w-auto font-bold md:mt-0 text-xs md:text-base py-3 md:py-6 rounded-none capitalize"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 md:gap-10">
          <div className="flex flex-col text-[#BDBEC3]">
            <h1 className="text-sm md:max-w-md">
              Jalan Akses UI, Kelapa Dua, Tugu, Kec. Cimanggis, Kota Depok, Jawa
              Barat 16451
            </h1>
            <div className="flex flex-col md:flex-row gap-2 text-sm mt-2">
              <Link
                href={"mailto:zidanindratama03@gmail.com"}
                className="hover:text-yellowBlog"
              >
                zidanindratama03@gmail.com
              </Link>
              <Link
                target="_blank"
                href={"https://wa.me/6287714044760"}
                className="hover:text-yellowBlog"
              >
                0877-1404-4760
              </Link>
            </div>
          </div>
          <div className="flex flex-row md:justify-between gap-4">
            {socials.map((social) => {
              return (
                <Link target="_blank" href={social.href} key={social.id}>
                  <social.icon className="text-[#BDBEC3] hover:text-yellowBlog w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
