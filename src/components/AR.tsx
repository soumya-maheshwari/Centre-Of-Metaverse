import Image from "next/image";
import React from "react";

const AR = () => {
  return (
    <div className="flex mx-auto w-[80%] flex-col md:flex-row items-center justify-center md:justify-between mt-6">
      <div className="md:w-1/2 p-4 ar-container">
        <Image
          width={1000}
          height={300}
          src="/image.png"
          alt="Sample"
          className="w-96 h-auto ar-image"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-white">Augmented Reality .</h2>
        <p className="mt-2 text-white max-w-xl">
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
