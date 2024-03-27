"use client";

import Image from "next/image";
import React, { useState } from "react";

const Domains = () => {
  const [activeTab, setActiveTab] = useState("development");

  const handleTabClick = (tab: "development" | "designing") => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex mx-auto w-[90%]  flex-col  mt-12">
        <h2 className="text-4xl font-bold text-white mb-6">Our Domains</h2>
        <div className="flex mt-3 gap-3">
          <button
            className={`py-2 px-6 rounded-3xl font-semibold transition duration-300    hover:-translate-y-1 ${
              activeTab === "development"
                ? "domain text-white"
                : "text-white bg-gray-700"
            }`}
            onClick={() => handleTabClick("development")}
          >
            Development
          </button>
          <button
            className={`py-2 px-6 rounded-3xl font-semibold transition duration-300    hover:-translate-y-1 ${
              activeTab === "designing"
                ? "domain text-white"
                : "text-white bg-gray-700"
            }`}
            onClick={() => handleTabClick("designing")}
          >
            Designing
          </button>
        </div>

        <div className="mt-8">
          {activeTab === "development" && (
            <div className="flex w-[90%] mt-4 py-10 px-6 bg-[#090909] mx-auto justify-center items-center shadow transition duration-300 hover:shadow-lg flex-col hover:-translate-y-1 md:flex-row md:justify-between gap-4">
              <div className="text-center md:w-1/2 max-w-lg">
                <p className="text-md  text-white">
                  Metaverse is your destination for cutting-edge development. We
                  excel in crafting augmented reality (AR), virtual reality
                  (VR), 2D, and 3D games using the dynamic duo of C# and Unity.
                  Immerse yourself in worlds where innovation meets reality, and
                  experience the extraordinary. Join us on a journey of
                  limitless possibilities, where we turn your ideas into
                  captivating digital experiences
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  width={700}
                  height={300}
                  src="/development.png"
                  alt="development"
                  className="mx-auto w-96"
                />
              </div>
            </div>
          )}

          {activeTab === "designing" && (
            <div className="flex w-[90%] mt-4 py-10 px-6 bg-[#090909] mx-auto justify-center items-center shadow transition duration-300 hover:shadow-lg flex-col hover:-translate-y-1 md:flex-row md:justify-between gap-4">
              <div className="text-center md:w-1/2 max-w-lg">
                <p className="text-md  text-white">
                  Metaverse is your destination for cutting-edge development. We
                  excel in crafting augmented reality (AR), virtual reality
                  (VR), 2D, and 3D games using the dynamic duo of C# and Unity.
                  Immerse yourself in worlds where innovation meets reality, and
                  experience the extraordinary. Join us on a journey of
                  limitless possibilities, where we turn your ideas into
                  captivating digital experiences
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  width={700}
                  height={300}
                  src="/development.png"
                  alt="development"
                  className="mx-auto w-96"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Domains;
