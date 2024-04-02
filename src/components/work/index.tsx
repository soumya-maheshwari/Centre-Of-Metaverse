"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { WorkCard } from "@/type";
import { Card } from "./card";
import Image from "next/image";

const cardsData: WorkCard[] = [
  {
    title: "Dream",
    desc: "We help you dream big and achieve your goals. We provide you with the best tools and resources to help you succeed.",
    img: {
      is3D: true,
      src: "https://prod.spline.design/bRiHlwZJ2-YRBEvA/scene.splinecode",
    },
    thumb: "/dream.svg",
  },
];

export const Work = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section>
      <div ref={scrollRef} className="h-[120rem] relative">
        <div className="sticky overflow-hidden h-screen top-0 z-0">
          <motion.div style={{ x }} className="h-screen w-full flex">
            <h1 className="text-white font-futura text-5xl m-16 mx-32">
              <span className="bg-gradient-to-b from-[#74D0FC] to-[#E00CC7] text-transparent bg-clip-text">
                What
              </span>
              <br /> we do
            </h1>
            {cardsData.map(({thumb,desc,img,title}, index) => (
              <div className="flex flex-col items-center justify-center w-64 h-64 bg-[#090909] rounded-lg shadow-lg">
              <div>
                  <Image src={thumb} alt={title} width={192} height={192} className="rounded-xl" />
                  <h2 className="text-white font-futura text-5xl mt-4 uppercase">{title}</h2>
                  <p className="text-white font-futura text-2xl mt-4">{desc}</p>
              </div>
          </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
