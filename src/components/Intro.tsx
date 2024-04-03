"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div
      className="flex mx-auto w-[90%] flex-col md:flex-row items-center justify-center md:justify-between mt-16"
      id="explore"
    >
      <div
        className="md:w-1/2 p-4"
      >
        <motion.h2 className="text-4xl font-bold text-white font-futura"
          initial={{ y: -50, opacity: 0 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          What is AR/VR
        </motion.h2>
        <motion.p className="mt-2 text-xl text-white font-work-sans md:max-w-96"
        initial={{ x: -150, opacity: 0 }}
        exit={{ x: -150, opacity: 0 }}
        transition={{ duration: 0.4,delay:0.3 }}
        whileInView={{ x: 0, opacity: 1 }}
        >
          AR adds digital wonder to reality while VR transports you to new
          realms, turning you from a mere spectator into an active explorer. AR
          enhances reality; VR crafts new worlds, each offering captivating
          journeys.
        </motion.p>
      </div>
      <div className="md:w-1/2 p-4">
        <Image
          src="/person_with_headset.png"
          width={1000}
          height={300}
          alt="headset"
          className="w-[590px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Intro;
