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
    desc: "At the Centre Of Metaverse, we start with a dream—believing in imagination's power to shape new worlds. Our visionaries create immersive experiences, transporting you to places you've only dreamed of. Dream big because in AR/VR, possibilities are limitless.",
    img: {
      is3D: true,
      src: "https://prod.spline.design/bRiHlwZJ2-YRBEvA/scene.splinecode",
    },
    thumb: "/dream.svg",
  },
  {
    title: "Design",
    desc: "Design blends creativity with functionality, sparking the magic of the virtual world. We're devoted to crafting captivating, user-friendly experiences. Our skilled designers meticulously create dreamscapes, focusing on every detail, color, and interaction.",
    img: {
      is3D: true,
      src: "https://prod.spline.design/IAStlOX6Wsvo3Un3/scene.splinecode",
    },
    thumb: "/design.svg",
  },
  {
    title: "Develop",
    desc: "Our developers are the Metaverse architects, constructing digital foundations to realize our dreams. They code, optimize performance, and ensure seamless experiences. Development turns ideas into immersive AR/VR projects for everyone to enjoy.",
    img: {
      is3D: false,
      src: "/develop.png",
    },
    thumb: "/develop.svg",
  },
];

export const Work = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0", "-140%"]);

  return (
    <section className="relative">
      <Image
        src="/lamp4.png"
        alt=""
        width={700}
        height={700}
        className="absolute -top-16 left-0 z-0"
      />
      <h1 className="text-white font-futura text-5xl text-nowrap md:hidden">
        <span className="bg-gradient-to-b from-[#74D0FC] to-[#E00CC7] text-transparent bg-clip-text">
          What
        </span>
        <br /> we do
      </h1>
      <div ref={scrollRef} className="h-[120rem] relative hidden  md:block">
        <div className="sticky overflow-hidden h-screen top-0 z-0 pt-12">
          <motion.div
            style={{ x }}
            className="h-screen w-full flex items-center flex-col md:flex-row"
          >
            <h1 className="text-white font-futura text-5xl m-16 mx-32 text-nowrap">
              <span className="bg-gradient-to-b from-[#74D0FC] to-[#E00CC7] text-transparent bg-clip-text">
                What
              </span>
              <br /> we do
            </h1>
            <div className="flex gap-4">
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex gap-4 flex-col md:hidden ">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
