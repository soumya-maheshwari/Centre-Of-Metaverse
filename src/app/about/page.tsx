import { Hero, Projects, Work } from "@/components";
import AR from "@/components/AR";
import Domains from "@/components/Domains";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import VR from "@/components/VR";
import React from "react";

const page = () => {
  return (
    <main className="text-white">
      <Navbar />
      <div className="flex flex-col bg-black min-h-screen mt-16">
        <Intro />
        <AR />
        <VR />
        <Work />
        <Domains />
        <TechStack />
      </div>
    </main>
  );
};

export default page;
