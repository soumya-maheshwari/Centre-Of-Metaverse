import { Cursor, Hero, Projects, SmoothScroll, Work } from "@/components";
import dynamic from "next/dynamic";
import React from "react";

const AR = dynamic(() => import("@/components/AR"));
const VR = dynamic(() => import("@/components/VR"));
const Domains = dynamic(() => import("@/components/Domains"));
const Faculty = dynamic(() => import("@/components/Faculty"));
const Footer = dynamic(() => import("@/components/Footer"));
const Intro = dynamic(() => import("@/components/Intro"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const TechStack = dynamic(() => import("@/components/TechStack"));

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
          {/* <Domains /> */}
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
