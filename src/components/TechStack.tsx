import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <>
      <div className="flex mx-auto w-[90%] flex-col mt-12">
        <h1 className="text-4xl font-bold text-white mb-6">Techstack</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-white"></h2>
            <p className="mt-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, minus, molestiae ullam vitae consequuntur voluptatem
              optio sequi quas ducimus beatae, dolorem non saepe est quibusdam?
              Aut animi voluptate fugit, quo quasi accusamus facere iusto odit
              atque quia ducimus quam nam quas ex cum sunt! Nulla beatae sunt
              iure. Sequi, voluptas reiciendis. Illo soluta optio
            </p>
          </div>

          <div className="md:w-1/2 p-4"></div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
