"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const cardsData = [
  {
    title: "Dream",
    desc: "We help you dream big and achieve your goals. We provide you with the best tools and resources to help you succeed.",
    img: {
      is3D: true,
      src: "https://prod.spline.design/bRiHlwZJ2-YRBEvA/scene.splinecode",
    },
    thumb:'/dream.png'
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
          <motion.div style={{ x }} className="h-screen w-full">
            <h1 className="text-white font-futura text-5xl m-16 mx-32">
              <span className="bg-gradient-to-b from-[#74D0FC] to-[#E00CC7] text-transparent bg-clip-text">
                What
              </span>
              <br /> we do
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
