import React from "react";

const Intro = () => {
  return (
    <div className="flex mx-auto w-[80%] flex-col md:flex-row items-center justify-center md:justify-between mt-12" id="explore">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-white">What is AR/VR .</h2>
        <p className="mt-2 text-white">
          AR adds digital wonder to reality while VR transports you to new
          realms, turning you from a mere spectator into an active explorer. AR
          enhances reality; VR crafts new worlds, each offering captivating
          journeys.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <img src="person_with_headset.png" alt="Sample" className="" />
      </div>
    </div>
  );
};

export default Intro;
