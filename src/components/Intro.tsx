"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div
      className="flex mx-auto p-4 flex-col items-center justify-center mt-16 px-1 sm:px-20 md:px-10 py-6 gap-16 sm:flex-row"
      id="explore"
    >
      <div className="w-full sm:w-1/2 p-4">
        <motion.h2
          className="md:text-3xl text-xl  text-white font-futura"
          initial={{ y: -50, opacity: 0 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          What is AR/VR
        </motion.h2>
        <motion.p
          className="mt-2 text-md sm:text-xl text-white font-work-sans"
          initial={{ x: -150, opacity: 0 }}
          exit={{ x: -150, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          AR adds digital wonder to reality while VR transports you to new
          realms, turning you from a mere spectator into an active explorer. AR
          enhances reality; VR crafts new worlds, each offering captivating
          journeys.
        </motion.p>
      </div>
      <div className="w-full sm:w-1/2 p-3 sm:p-0">
        <Image
          src="/person_with_headset.png"
          layout="responsive"
          width={1000}
          height={200}
          alt="headset"
          className="mx-auto cursor-fill"
        />
      </div>
    </div>
  );
};

export default Intro;
