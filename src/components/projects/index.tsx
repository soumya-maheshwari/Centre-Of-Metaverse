"use client";
import { projects } from "@/constants";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export const Projects = () => {
  return (
    <section className="mt-12">
      <div className="w-[90%] mx-auto">
        <h1 className="font-futura text-5xl mb-4 text-white">Projects</h1>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={2.5}
        autoplay={{ delay: 2000 }}
        centeredSlides
        className="rotate-[-3deg] overflow-x-hidden w-[101%]"
        loop
        grabCursor
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                width={560}
                height={280}
                src={project.image}
                alt={project.name}
                className="rounded-2xl m-4"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
