"use client";
import Spline from "@splinetool/react-spline";
import React from "react";

const VR = () => {
  return (
    <div className="flex mx-auto w-[90%] flex-col md:flex-row items-center justify-center md:justify-between mt-6">
      <div className="md:w-1/2 p-4">
        <h2 className="font-bold text-white text-3xl font-futura sm:text-4xl">
          Virtual Reality
        </h2>
        <p className="mt-2 text-white font-work-sans text-xl md:max-w-96">
          Virtual Reality (VR) is pure immersion! It whisks you away from
          reality into mind-blowing digital realms. With a headset, you're
          transported to thrilling adventures, lifelike simulations, and
          breathtaking experiences that feel unbelievably real!
        </p>
      </div>
      <div className="md:w-1/2 flex md:justify-end mx-auto">
        <Spline
          scene="https://prod.spline.design/tN8T7GqMZDVvPCVU/scene.splinecode"
          style={{ width: "100%", maxWidth: "auto", height: 480 }}
        />
      </div>
    </div>
  );
};

export default VR;
