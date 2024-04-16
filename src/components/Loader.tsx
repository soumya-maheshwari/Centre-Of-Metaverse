import Image from "next/image";
import React, { useEffect } from "react";

interface LoaderProps {
  onAnimationComplete: () => void;
  isHidden?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ onAnimationComplete , isHidden}) => {
  useEffect(() => {
    isHidden?document.body.style.overflow = "auto":document.body.style.overflow = "hidden";
    const loaderLine = document.querySelector(".loader-line");
    const handleAnimationEnd = () => {
      onAnimationComplete();
    };
    loaderLine?.addEventListener("animationend", handleAnimationEnd);
    return () => {
      loaderLine?.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [onAnimationComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden fixed left-0 top-0 z-50 w-screen" style={{display:isHidden?"none":"flex"}}>
      <div className="flex items-center font-sans">
        <Image
          width={1000}
          height={200}
          className="w-32 h-auto mr-2 cursor-pointer"
          src="/logo.png"
          alt="Centre of Metaverse"
        />

        <div className="text-white text-xs font-normal tracking-normal font-futura">
          <div>
            <p className="uppercase relative inline-block shrink-0 text-[0.88rem] ">
              Centre of
            </p>
          </div>
          <div>
            <p className="uppercase relative text-[0.98rem] inline-block shrink-0 font-semibold mt-1 ">
              metaverse
            </p>
          </div>
        </div>
      </div>

      <div className="h-1.5 w-80 mt-6 relative">
        <div className="loader-line absolute  h-full animate-loader rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
