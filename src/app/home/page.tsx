import { Hero, Projects } from "@/components";
import AR from "@/components/AR";
import Domains from "@/components/Domains";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import RotatingComponent from "@/components/Rotation";
import VR from "@/components/VR";
import Work from "@/components/Work";
import React from "react";

const page = () => {
  return (
    <main className="text-white">
      <Navbar />
      <div className="flex flex-col bg-black min-h-screen mt-16">
        <Hero />
        <Intro />
        <AR />
        <VR />
        <Work />
        <Domains />
        <Projects/>
      </div>
    </main>
  );
};

export default page;
