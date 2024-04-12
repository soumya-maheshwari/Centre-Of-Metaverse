import { Cursor, RegistrationForm } from "@/components";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import React from "react";

const Page = () => {
  return (
    <main className="w-screen h-screen bg-white overflow-x-hidden">
      {/* <Navbar isDark /> */}
      <RegistrationForm />
      <Cursor />
    </main>
  );
};

export default Page;
