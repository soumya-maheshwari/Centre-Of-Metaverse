"use client";
import { projects } from "@/constants";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export const Projects = () => {
  return (
    <section className="overflow-hidden mt-12">
      <h1 className="font-futura text-5xl text-white my-24 ml-36">Projects</h1>
      {/* panorema effect slides */}
      <Swiper
        slidesPerView={2.5}
        autoplay
        centeredSlides
        className="rotate-[-3deg] w-[101%]"
        loop
        grabCursor
        slideToClickedSlide
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} >
            <div>
              <Image
                width={560}
                height={280}
                src={project.image}
                alt={project.name}
                className="rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
