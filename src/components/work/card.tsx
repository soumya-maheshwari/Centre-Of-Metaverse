"use client";
import { WorkCard } from "@/type";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { FC } from "react";

export interface Props extends WorkCard {}

export const Card: FC<Props> = ({ thumb, title, desc, img }) => {
  return (
    <div className="flex bg-[#090909] shadow-lg p-12 rounded-3xl items-center justify-between gap-20 md:h-[82vh] flex-col md:flex-row w-[90%] mx-auto">
      <div className="md:min-w-[22rem]">
        <Image
          src={thumb}
          alt={title}
          width={192}
          height={192}
          className="rounded-xl w-24 md:w-48"
        />
        <h2 className="text-white font-futura md:text-5xl mt-4 uppercase text-3xl">
          {title}
        </h2>
        <p className="text-white font-work-sans text-xl mt-4">{desc}</p>
      </div>
      <div className="md:min-w-[30rem]">
        {img.is3D ? (
          <Spline scene={img.src} style={{ width: 480, height: 480 }} />
        ) : (
          <Image src={img.src} alt={title} width={1024} height={580} />
        )}
      </div>
    </div>
  );
};
