"use client";

import AR from "@/components/AR";
import Domains from "@/components/Domains";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import RotatingComponent from "@/components/Rotation";
import TechStack from "@/components/TechStack";
import VR from "@/components/VR";
import Work from "@/components/Work";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex bg-black flex-col min-h-screen">
        <Navbar />
        <Intro />
        <AR />
        <VR />
        <Work />
        <Domains />
        <TechStack />
      </div>
    </>
  );
};

export default page;
