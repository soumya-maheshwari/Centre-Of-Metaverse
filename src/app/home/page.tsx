import { Cursor, Hero, Projects, SmoothScroll } from "@/components";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import React from "react";

const AR = dynamic(() => import("@/components/AR"));
const VR = dynamic(() => import("@/components/VR"));
const Faculty = dynamic(() => import("@/components/Faculty"));
const Footer = dynamic(() => import("@/components/Footer"));
const Intro = dynamic(() => import("@/components/Intro"));
// const Navbar = dynamic(() => import("@/components/Navbar"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const Work = dynamic(() => import("@/components/work"));

const Page = () => {
  return (
    <>
      <main className="text-white">
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
    </>
  );
};

export default Page;
