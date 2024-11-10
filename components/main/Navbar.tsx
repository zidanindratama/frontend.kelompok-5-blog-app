"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiBars3BottomRight } from "react-icons/hi2";
import React, { useState } from "react";

interface NavLink {
  id: number;
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About Us",
    href: "/about-us",
  },
  {
    id: 3,
    label: "Blogs",
    href: "/blogs",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="sticky top-0 py-4 bg-blackBlog drop-shadow z-10">
      <div className="relative flex flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <Link
          className="text-yellowBlog font-bold text-base md:text-lg lg:text-xl"
          href={"#"}
        >
          HealthScape.
        </Link>
        <div className="hidden md:flex flex-row items-center gap-8">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.href}
                className={`${
                  pathname === `${link.href}`
                    ? "text-yellowBlog after:absolute after:bottom-0 after:inset-x-0 after:h-[3px] after:rounded after:bg-yellowBlog"
                    : "hover:text-yellowBlog"
                } text-base text-white relative pb-1 font-semibold`}
                key={link.id}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            variant={"yellowBlog"}
            className="font-semibold px-10 rounded-none"
            asChild
          >
            <Link href={"/sign-in"}>Join Us</Link>
          </Button>
        </div>
        <div className="md:hidden flex flex-col">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger>
              <HiBars3BottomRight className="text-white h-6 w-6 cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="flex flex-col pt-20">
              {navLinks.map((link) => {
                return (
                  <Link
                    href={link.href}
                    onClick={() => {
                      setOpenSheet(false);
                    }}
                    className={`${
                      pathname === `${link.href}`
                        ? "text-yellowBlog"
                        : "hover:text-yellowBlog text-black"
                    } text-base font-semibold`}
                    key={link.id}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                variant={"yellowBlog"}
                className="font-semibold px-10 rounded-none"
                asChild
              >
                <Link href={"/sign-in"}>Join Us</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
