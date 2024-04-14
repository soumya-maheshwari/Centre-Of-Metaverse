import { RegistrationForm } from "@/components";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";

const Page = () => {
  return (
    <>
      <main className="bg-black">
       <RegistrationForm />
      </main>
    </>
  );
};

export default Page;
