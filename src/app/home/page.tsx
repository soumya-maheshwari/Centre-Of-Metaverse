import { Cursor, Hero, Projects, SmoothScroll, Work } from "@/components";
import AR from "@/components/AR";
import Domains from "@/components/Domains";
import Faculty from "@/components/Faculty";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import RotatingComponent from "@/components/Rotation";
import TechStack from "@/components/TechStack";
import VR from "@/components/VR";
import React from "react";


const page = () => {

  return (
    <>
      <main className="text-white md:overflow-x-hidden">
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

export default page;
