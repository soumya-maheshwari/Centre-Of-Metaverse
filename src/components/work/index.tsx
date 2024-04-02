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
import Spline from "@splinetool/react-spline";

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
    title: "Dream",
    desc: "At the Centre Of Metaverse, we start with a dream—believing in imagination's power to shape new worlds. Our visionaries create immersive experiences, transporting you to places you've only dreamed of. Dream big because in AR/VR, possibilities are limitless.",
    img: {
      is3D: true,
      src: "https://prod.spline.design/bRiHlwZJ2-YRBEvA/scene.splinecode",
    },
    thumb: "/dream.svg",
  },
  {
    title: "Dream",
    desc: "At the Centre Of Metaverse, we start with a dream—believing in imagination's power to shape new worlds. Our visionaries create immersive experiences, transporting you to places you've only dreamed of. Dream big because in AR/VR, possibilities are limitless.",
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
            <div className="flex gap-4">
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
