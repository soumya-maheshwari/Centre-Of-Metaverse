import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-white uppercase text-center font-bold mt-12">
        <span className="text-[4.5rem] leading-none">EXPERIENCE THE</span>
        <br />
        <span className="text-[6.5rem]">METAVERSE</span>
      </h1>
      <div className="mt-6">
        <Image
          src="/Vision.png"
          alt="Hero"
          width={800}
          height={600}
          // layout="responsive"
          className="hover:scale-125 transition-transform duration-500 ease-in-out w-[16rem] h-auto"
        />
      </div>
      <div className="text-white mt-12 uppercase text-3xl font-bold">
        <p>DREAM.DESIGN.DEVELOP</p>
      </div>
      <Link href="#explore"
      className="mt-6 bg-white text-[#333333] px-3 py-2 rounded-full font-bold text-sm"
      >
        Know More
      </Link>
    </section>
  );
};
