import Image from "next/image";
import React from "react";

const VR = () => {
  return (
    <div className="flex mx-auto w-[80%] flex-col md:flex-row items-center justify-center md:justify-between mt-6">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-white">Virtual Reality .</h2>
        <p className="mt-2 text-white max-w-xl">
          Virtual Reality (VR) is pure immersion! It whisks you away from
          reality into mind-blowing digital realms. With a headset, you're
          transported to thrilling adventures, lifelike simulations, and
          breathtaking experiences that feel unbelievably real!
        </p>
      </div>
      <div className="md:w-1/2 ar-container">
        <Image
          width={1000}
          height={300}
          src="/morphosis.png"
          alt="Sample"
          className="h-auto ar-image"
        />
      </div>
    </div>
  );
};

export default VR;
