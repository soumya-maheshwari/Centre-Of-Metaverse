"use client";
import { WorkCard } from "@/type";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { FC } from "react";

export interface Props extends WorkCard {}

export const Card: FC<Props> = ({ thumb, title, desc, img }) => {
  return (
    <div className="flex bg-[#090909] shadow-lg p-12 rounded-3xl items-center justify-between gap-20 h-[90vh]">
      <div className="w-[22rem]">
        <Image
          src={thumb}
          alt={title}
          width={192}
          height={192}
          className="rounded-xl"
        />
        <h2 className="text-white font-futura text-5xl mt-4 uppercase">
          {title}
        </h2>
        <p className="text-white font-work-sans text-xl mt-4">{desc}</p>
      </div>
      <div>
        {img.is3D ? (
          <Spline scene={img.src} style={{ width: 480, height: 480 }} />
        ) : (
          <Image src={img.src} alt={title} width={480} height={480} />
        )}
      </div>
    </div>
  );
};
