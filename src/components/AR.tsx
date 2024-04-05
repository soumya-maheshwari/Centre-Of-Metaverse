"use client";
import Spline from "@splinetool/react-spline";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";
import Image from "next/image";
import { physicsAnim } from "../constants/index";

const AR = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const resizePageHeight = (entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setWindowWidth(entry.contentRect.width);
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);

  console.log(windowWidth);

  return (
    <div className="flex mx-auto w-[90%] md:w-[80%] flex-col-reverse md:flex-row items-center justify-center md:justify-between mt-6">
      <div className="md:w-1/2 justify-start">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ...physicsAnim }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          {windowWidth > 768 ? (
            <Spline
              scene="https://prod.spline.design/4aTmo1PUk7ZZP4uf/scene.splinecode"
              style={{ width: "100%", maxWidth: 490, height: 480 }}
              className="cursor-fill"
            />
          ) : (
            <Image
              src="/AR.png"
              width={500}
              height={500}
              alt="AR"
              className="w-[490px] mx-auto cursor-fill"
            />
          )}
        </motion.div>
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <motion.h2
          className="md:text-3xl text-xl text-white font-futura whitespace-nowrap"
          initial={{ y: -50, opacity: 0 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Augmented Reality
        </motion.h2>
        <motion.p
          className="mt-2 text-white  font-work-sans text-base sm:text-xl"
          initial={{ x: 20, opacity: 0 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ ...physicsAnim, delay: 0.3 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          Augmented Reality (AR) is like magic! It mixes the real world with
          awesome digital elements, enhancing your view with cool info, videos,
          or games right in front of you. It's fun, futuristic, and super
          engaging!
        </motion.p>
      </div>
    </div>
  );
};

export default AR;
