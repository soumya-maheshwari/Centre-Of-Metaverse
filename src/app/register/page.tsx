import { RegistrationForm } from "@/components";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const Page = () => {
  return (
    <>
      <main className="bg-black">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <RegistrationForm />
      </main>
    </>
  );
};

export default Page;
