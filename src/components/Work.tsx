import React from "react";

const Work = () => {
  return (
    <div className="mx-auto w-[90%] mt-12">
      <h2 className="text-4xl font-bold text-white mb-6">What we do</h2>
      <div className=" flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <div
          className="md:w-1/3 p-4 rounded-lg"
          style={{ background: "#2C2C2C33" }}
        >
          <div className="flex flex-col items-center md:items-start pb-8">
            <div className="flex items-center flex-row gap-3">
              <img
                src="dream.svg"
                alt="Image 1"
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-white uppercase font-futura leading-5">
                dream
              </h3>
            </div>

            <p className="text-gray-300 mt-5 font-work-sans text-xl">
              At the Centre Of Metaverse, we start with a dream—believing in
              imagination's power to shape new worlds. Our visionaries create
              immersive experiences, transporting you to places you've only
              dreamed of. Dream big because in AR/VR, possibilities are
              limitless.
            </p>
          </div>
        </div>

        <div
          className="md:w-1/3 p-4 rounded-lg"
          style={{ background: "#2C2C2C33" }}
        >
          <div className="flex flex-col items-center md:items-start pb-8">
            <div className="flex items-center flex-row gap-3">
              <img
                src="design.svg"
                alt="Image 1"
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white uppercase font-futura">
                design
              </h3>
            </div>
            <p className="text-gray-300 mt-5 font-work-sans text-xl">
              Design blends creativity with functionality, sparking the magic of
              the virtual world. We're devoted to crafting captivating,
              user-friendly experiences. Our skilled designers meticulously
              create dreamscapes, focusing on every detail, color, and
              interaction.
            </p>
          </div>
        </div>

        <div
          className="md:w-1/3 p-4 rounded-lg"
          style={{ background: "#2C2C2C33" }}
        >
          <div className="flex flex-col items-center md:items-start pb-8">
            <div className="flex items-center flex-row gap-3">
              <img
                src="develop.svg"
                alt="Image 1"
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white uppercase font-futura">
                develop
              </h3>
            </div>
            <p className="text-gray-300 mt-5 font-work-sans text-xl">
              Our developers are the Metaverse architects, constructing digital
              foundations to realize our dreams. They code, optimize
              performance, and ensure seamless experiences. Development turns
              ideas into immersive AR/VR projects for everyone to enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
