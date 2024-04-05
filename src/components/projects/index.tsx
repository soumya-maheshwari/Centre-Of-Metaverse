"use client";
import { projects } from "@/constants";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export const Projects = () => {
  const [slidesPerView, setSlidesPerView] = useState(2.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1.5);
      } else {
        setSlidesPerView(2.5);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="mt-12 overflow-hidden">
      <div className="w-[94%] p-1 sm:p-4 mx-auto">
        <h1 className="font-futura md:text-4xl text-3xl mb-8 text-white font-bold">
          Projects
        </h1>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={slidesPerView}
        autoplay={{ delay: 2000 }}
        centeredSlides
        className="rotate-[-3deg] overflow-x-hidden w-[101%]"
        loop
        navigation
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
