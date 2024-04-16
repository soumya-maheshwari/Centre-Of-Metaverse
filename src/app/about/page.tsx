import { Hero, Projects } from "@/components";

import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

import React from "react";

const Footer = dynamic(() => import("@/components/Footer"));
const Intro = dynamic(() => import("@/components/Intro"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const Work = dynamic(() => import("@/components/work"));

const page = () => {
  return (
    <main className="text-white">
      <Navbar />
      <div className="flex flex-col bg-black min-h-screen mt-16">
        <Intro />
        <Work />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default page;
