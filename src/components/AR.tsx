"use client";
import Spline from "@splinetool/react-spline";
import React from "react";

const AR = () => {
  return (
    <div className="flex mx-auto w-[90%] flex-col md:flex-row items-center justify-center md:justify-between mt-6">
      <div className="md:w-1/2 p-4">
        <Spline
          scene="https://prod.spline.design/4aTmo1PUk7ZZP4uf/scene.splinecode"
          style={{ width: 480, height: 480 }}
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-white font-futura">
          Augmented Reality .
        </h2>
        <p className="mt-2 text-white max-w-xl font-work-sans text-xl">
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
