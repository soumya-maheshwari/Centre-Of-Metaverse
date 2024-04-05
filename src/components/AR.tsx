"use client";
import Spline from "@splinetool/react-spline";
import React from "react";
import { motion } from "framer-motion";

const AR = () => {
  return (
    <div className="flex mx-auto p-4 flex-col items-center justify-center mt-8 px-1 sm:px-20 md:px-10 py-6 gap-6 sm:flex-row ">
      <div className="w-full sm:w-1/2 p-3 sm:p-0">
        <div className="hidden sm:block">
          <Spline
            scene="https://prod.spline.design/4aTmo1PUk7ZZP4uf/scene.splinecode"
            style={{ width: "100%", maxWidth: "auto", height: 480 }}
            className="cursor-fill"
          />
        </div>
        <div className="sm:hidden flex justify-center items-center mx-auto">
          <img
            src="image.png"
            alt="AR Experience"
            style={{
              width: "100%",
              // maxWidth: "auto",
              height: "auto",
            }}
            className="mx-auto"
          />
        </div>
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
          transition={{ duration: 0.4, delay: 0.3 }}
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
