"use client";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import React from "react";

const Page = () => {
  return (
    <main className="w-screen h-screen bg-white overflow-x-hidden">
      <Navbar isDark />
      <div>
        <div
          className="visme_d"
          data-title="MetaRegistration"
          data-url="90xe846k-metaregistration"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="53222"
        ></div>
      </div>
      <Script
        src="https://static-bundles.visme.co/forms/vismeforms-embed.js"
        strategy="beforeInteractive"
        onReady={() => {
          console.log("Script loaded");
        }}
      />
    </main>
  );
};

export default Page;
