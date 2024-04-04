"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const MotionLink = motion(Link);

export const Hero = () => {
  return (
    <section className="flex flex-col items-center mt-12">
      <h1 className="text-white uppercase text-center font-bold mt-12 font-futura flex flex-col">
        <motion.span
          className="lg:text-[4.5rem] md:text-[3rem] text-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          EXPERIENCE THE
        </motion.span>
        <br />
        <motion.span
          className="lg:text-[6.5rem] md:text-[4.5rem] text-4xl leading-normal"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.4 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          METAVERSE
        </motion.span>
      </h1>
      <div className="mt-6">
        <MotionImage
          src="/Vision.png"
          alt="Hero"
          width={800}
          height={600}
          // layout="responsive"
          className="ease-in-out w-[16rem] h-auto cursor-fill"
          initial={{ scale: 0.5, opacity: 0 , }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.6}}}
          whileHover={{ scale: 1.2 , transition:{delay:0, duration:0.3}}}
        />
      </div>
      <motion.div
        className="text-white mt-12 uppercase md:text-2xl font-bold font-futura text-lg tracking-wider"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <p>DREAM.DESIGN.DEVELOP</p>
      </motion.div>
      <MotionLink
        href="#explore"
        className="mt-6 bg-white text-[#333333] px-3 py-2 rounded-full font-bold text-sm"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Know More
      </MotionLink>
    </section>
  );
};
