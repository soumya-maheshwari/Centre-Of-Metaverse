"use client";
import Spline from "@splinetool/react-spline";
import React from "react";
import { motion } from "framer-motion";

const VR = () => {
  return (
    <div className="flex mx-auto p-4 flex-col items-center justify-center mt-8 px-1 sm:px-20 md:px-10 py-6 gap-6 sm:flex-row ">
      {" "}
      <div className="w-full sm:w-1/2 p-4">
        <motion.h2
          className="md:text-3xl text-xl  text-white font-futura"
          initial={{ y: -50, opacity: 0 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Virtual Reality
        </motion.h2>
        <motion.p
          className="mt-2 text-md sm:text-xl text-white font-work-sans"
          initial={{ x: -150, opacity: 0 }}
          exit={{ x: -150, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          Virtual Reality (VR) is pure immersion! It whisks you away from
          reality into mind-blowing digital realms. With a headset, you're
          transported to thrilling adventures, lifelike simulations, and
          breathtaking experiences that feel unbelievably real!
        </motion.p>
      </div>
      <div className="w-full sm:w-1/2 p-3 sm:p-0">
        <Spline
          scene="https://prod.spline.design/tN8T7GqMZDVvPCVU/scene.splinecode"
          style={{ width: "100%", maxWidth: "auto", height: 480 }}
          className="cursor-fill"
        />
      </div>
    </div>
  );
};

export default VR;
