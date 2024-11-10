"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

interface Testimonial {
  id: number;
  image: string;
  name: string;
  position: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/main/persons/zidan.jpg",
    name: "Zidan Indratama",
    position: "Student",
    content:
      "This blog is amazing! The articles are easy to understand and provide a lot of insights on health, from light exercises to stress management tips.",
  },
  {
    id: 2,
    image: "/main/persons/dimas.jpg",
    name: "Dimas",
    position: "Private Employee",
    content:
      "I always look forward to the latest updates on this blog. It’s very useful for those who want to live a healthy lifestyle despite having a busy work schedule!",
  },
  {
    id: 3,
    image: "/main/persons/rifqi.jpg",
    name: "Rifqi",
    position: "Teacher",
    content:
      "The mental health articles on this blog have greatly helped me understand and manage stress. I highly recommend this blog to anyone who wants to live a healthier life.",
  },
  {
    id: 4,
    image: "/main/persons/kerraf.jpg",
    name: "Kerraf",
    position: "Entrepreneur",
    content:
      "As an entrepreneur, I often forget to take care of my health. This blog has become an interesting source of information and provides tips for maintaining a healthier lifestyle.",
  },
  {
    id: 5,
    image: "/main/persons/iqbal.png",
    name: "Iqbal",
    position: "Student",
    content:
      "This blog is very interesting! I've learned a lot about healthy living, including nutritious food options that are easy for young people like me to follow.",
  },
  {
    id: 6,
    image: "/main/persons/rakan.jpg",
    name: "Rakan",
    position: "Freelancer",
    content:
      "With a freelancer lifestyle that often involves staying up late, this blog helps me maintain a healthier lifestyle and offers beneficial tips for both physical and mental health.",
  },
];

const Testimnials = () => {
  return (
    <div className="relative py-12 md:py-20 bg-white">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6 bg-[#FBF6EA]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-10">
          <div className="flex flex-col">
            <h3 className="uppercase text-xs md:text-base font-semibold">
              TESTIMONIALS
            </h3>
            <h1 className="font-bold sm:text-xl md:text-3xl xl:text-3xl mt-2 md:mt-5">
              What people say about our blog
            </h1>
            <p className="font-light text-xs md:text-base mt-3 md:max-w-md">
              Discover how our blog has inspired healthier lifestyles and
              provided fresh perspectives on well-being and happiness.
            </p>
          </div>
          <div className="">
            <Carousel
              opts={{
                align: "start",
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-mt-1">
                {testimonials.map((testimonial) => {
                  return (
                    <CarouselItem key={testimonial.id} className="">
                      <div className="grid grid-cols-1 gap-4 content-between">
                        <h1 className="font-bold sm:text-base md:text-lg xl:text-xl mt-2 md:mt-5">
                          {testimonial.content}
                        </h1>
                        <div className="flex flex-row gap-4 items-center">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={1000}
                            height={1000}
                            className="h-12 w-12 object-cover rounded-full"
                          />
                          <div className="flex flex-col">
                            <h1 className="text-sm md:text-base font-semibold">
                              {testimonial.name}
                            </h1>
                            <p className="text-xs md:text-sm font-light mt-1">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimnials;
