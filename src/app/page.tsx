"use client";

import React, { useState, useEffect } from "react";
import Homepage from "./home/page"; // Import the homepage component
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { Hero, Projects } from "@/components";
import AR from "@/components/AR";
import Faculty from "@/components/Faculty";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import TechStack from "@/components/TechStack";
import VR from "@/components/VR";
import Work from "@/components/work";

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(true);
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
        <Loader onAnimationComplete={() => setIsLoading(false)} isHidden={!isLoading} />
        <main className="text-white md:overflow-x-hidden" style={{visibility:isLoading?"hidden":"visible"}}>
        <Navbar />
        <div className="flex flex-col bg-black min-h-screen mt-16">
          {/* TODO: Fix smooth scroll height */}
          {/* <SmoothScroll> */}
          <Hero />
          <Intro />
          <AR />
          <VR />
          {/* </SmoothScroll> */}
          <Work />
          <TechStack />
          <Projects />
          <Faculty />
          <Footer />
        </div>
      </main>

    </div>
  );
}

export default Page;
