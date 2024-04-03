"use client";
import Spline from "@splinetool/react-spline";
import React from "react";
import { motion } from "framer-motion";

const AR = () => {
  return (
    <div className="flex mx-auto w-[90%] md:w-[80%] flex-col md:flex-row items-center justify-center md:justify-between mt-6">
      <div className="md:w-1/2 md:justify-start">
        <Spline
          scene="https://prod.spline.design/4aTmo1PUk7ZZP4uf/scene.splinecode"
          style={{ width: "100%", maxWidth: 490, height: 480 }}
          className="cursor-fill"
        />
      </div>
      <div className="p-4 flex justify-end flex-col">
        <motion.h2 className="md:text-4xl text-3xl font-bold text-white font-futura whitespace-nowrap"
          initial={{ y: -50, opacity: 0 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Augmented Reality
        </motion.h2>
        <motion.p
          className="mt-2  text-white  font-work-sans text-xl md:max-w-96"
          initial={{ x: 150, opacity: 0 }}
          exit={{ x: 150, opacity: 0 }}
          transition={{ duration: 0.4,delay:0.3 }}
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
