"use client";
import Spline from "@splinetool/react-spline";
import React from "react";

const AR = () => {
  return (
    <div className="flex mx-auto w-[90%] md:w-[80%] flex-col md:flex-row items-center justify-center md:justify-between mt-6">
      <div className="md:w-1/2 md:justify-start">
        <Spline
          scene="https://prod.spline.design/4aTmo1PUk7ZZP4uf/scene.splinecode"
          style={{ width: "100%", maxWidth: 490, height: 480 }}
        />
      </div>
      <div className="p-4 flex justify-end flex-col">
        <h2 className="md:text-4xl text-3xl font-bold text-white font-futura whitespace-nowrap">
          Augmented Reality
        </h2>
        <p className="mt-2  text-white  font-work-sans text-xl md:max-w-96">
          Augmented Reality (AR) is like magic! It mixes the real world with
          awesome digital elements, enhancing your view with cool info, videos,
          or games right in front of you. It's fun, futuristic, and super
          engaging!
        </p>
      </div>
    </div>
  );
};

export default AR;
