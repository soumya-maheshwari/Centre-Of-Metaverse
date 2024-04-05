"use client";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { WorkCard } from "@/type";
import { Card } from "./card";
import Image from "next/image";
import ResizeObserver from "resize-observer-polyfill";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollWindowRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollWindowRef.current?.scrollWidth || 0);
    }
  }, [scrollWindowRef]);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    if(ghostRef.current) resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const transform = useTransform(
    scrollYProgress,
    [0, .8],
    [0, (-scrollRange+viewportW-200) ]
  );


  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const x = useSpring(transform, physics);

  useMotionValueEvent(transform,'change', (latest) => { 
    console.log(latest)
  })

  return (
    <section className="relative" id="work">
      <Image
        src="/lamp4.png"
        alt=""
        width={700}
        height={700}
        className="absolute -top-16 left-0 z-0"
      />
      <div>
        <h1 className="text-white font-futura text-5xl text-nowrap md:hidden">
          <span className="bg-gradient-to-b from-[#74D0FC] to-[#E00CC7] text-transparent bg-clip-text">
            What
          </span>
          <br /> we do
        </h1>
        <div
          ref={scrollRef}
          className="h-[120rem] relative hidden  md:block will-change-transform" 
        >
          <div className="sticky overflow-hidden h-screen top-0 z-0 pt-12">
            <motion.div
              ref={scrollWindowRef}
              style={{ x}}
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
        <div ref={ghostRef} className="ghost w-screen"></div>
      </div>
    </section>
  );
};
