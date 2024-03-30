"use client";

import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const images = [
    { src: "/blender.png", alt: "blender" },
    { src: "/c++.png", alt: "c++" },
    { src: "/Figma.png", alt: "Figma" },
    { src: "/unity.png", alt: "unity" },
    { src: "/c_hash.png", alt: "c#" },
    { src: "/unreal.png", alt: "unreal" },
    { src: "/oculus.png", alt: "oculus" },
  ];

  const duplicatedImages = [...images, ...images];
  const secondImage = images[0];
  const imagesStartingFromSecond = images.slice(1);

  const newImagesArray = [...imagesStartingFromSecond, secondImage];

  const duplicatedImages2 = [...newImagesArray, ...newImagesArray];

  return (
    <div className="flex mx-auto w-[90%] flex-col mt-12">
      <h1 className="text-4xl font-bold text-white mb-6 font-futura">
        Techstack
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden relative gap-x-10">
        <div className="md:w-1/2 p-4">
          <p className="mt-2 text-white text-md font-work-sans text-base">
            We utilize a diverse range of cutting-edge technologies to push the
            boundaries of creativity and innovation. Our tech stack includes
            powerful tools such as Blender for immersive 3D modeling, C++ for
            robust programming, Figma for collaborative design, Unity and Unreal
            Engine for crafting interactive experiences, C# for versatile
            development, and Oculus for immersive VR experiences.
          </p>
        </div>

        <div className="md:w-1/2 p-4">
          <div className=" flex flex-col gap-6 border border-white rounded-[20px] p-4 overflow-hidden">
            {/* row 1 */}
            <motion.div
              className="flex px-1 py-2"
              animate={{
                x: ["-100%", "0%"],
                transition: {
                  ease: "linear",
                  duration: 10,
                  repeat: Infinity,
                },
              }}
            >
              {duplicatedImages.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mr-16"
                  // style={{ width: `${100 / images.length}%` }}
                >
                  <div className="flex flex-col items-center justify-center h-full text-6xl text-white">
                    <img src={slide.src} alt={slide.alt} />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* row 2 */}
            <motion.div
              className="flex px-1 py-2"
              animate={{
                x: ["0%", "-100%"],
                transition: {
                  ease: "linear",
                  duration: 10,
                  repeat: Infinity,
                },
              }}
            >
              {duplicatedImages.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mr-16"
                  // style={{ width: `${100 / images.length}%` }}
                >
                  <div className="flex flex-col items-center justify-center h-full text-6xl text-white">
                    <img src={slide.src} alt={slide.alt} />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* row 3 */}
            <motion.div
              className="flex px-1 py-2"
              animate={{
                x: ["-100%", "0%"],
                transition: {
                  ease: "linear",
                  duration: 10,
                  repeat: Infinity,
                },
              }}
            >
              {duplicatedImages2.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mr-16"
                  // style={{ width: `${100 / images.length}%` }}
                >
                  <div className="flex flex-col items-center justify-center h-full text-6xl text-white">
                    <img src={slide.src} alt={slide.alt} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
