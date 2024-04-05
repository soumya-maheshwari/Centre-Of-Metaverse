"use client";
import { WorkCard } from "@/type";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import { physicsAnim } from '../../constants/index';

export interface Props extends WorkCard {isImg?:boolean}

export const Card: FC<Props> = ({ thumb, title, desc, splineUrl, img,isImg }) => {
  return (
    <div className="flex bg-[#090909] shadow-lg p-4 md:p-12 rounded-3xl items-center justify-between gap-20 md:h-[82vh] flex-col md:flex-row w-[90%] mx-auto">
      <div className="md:min-w-[22rem]">
        <Image
          src={thumb}
          alt={title}
          width={192}
          height={192}
          className="rounded-xl w-24 md:w-48"
        />
        <motion.h2
          className="text-white font-futura md:text-5xl mt-4 uppercase text-3xl"
          initial={{ y: -50, opacity: 0 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-white font-work-sans text-xl mt-4"
          initial={{ x: -150, opacity: 0 }}
          exit={{ x: -150, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          {desc}
        </motion.p>
      </div>
      <motion.div className="sm:min-w-[30rem] cursor-fill"
        initial={{ y: 100, opacity: 0 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ ...physicsAnim }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {!isImg ? (
          <div className="">
            <Spline
              scene={splineUrl}
              style={{ width: "480px", height: "480px" }}
              className="spline-scene"
            />
          </div>
        ) : (
          <Image src={img} alt={title} width={1024} height={580} />
        )}
      </motion.div>
    </div>
  );
};
