import { RegistrationForm } from "@/components";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="w-screen h-screen bg-black overflow-x-hidden flex md:flex-row flex-col">
      <div className="w-full md:w-2/5 flex p-8">
        <div className="flex flex-col">
          <Link href="/">
            <div className="flex items-center font-sans">
              <Image
                width={1000}
                height={200}
                className="w-20 h-auto mr-2 cursor-pointer"
                src="/logo.png"
                alt="Centre of Metaverse"
              />

              <div className="text-white text-xs font-normal tracking-normal font-futura">
                <div>
                  <p className="uppercase relative inline-block shrink-0 text-[0.68rem] ">
                    Centre of
                  </p>
                </div>
                <div>
                  <p className="uppercase relative text-[0.88rem] inline-block shrink-0 font-semibold ">
                    metaverse
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <h1 className="text-white font-futura text-2xl leading-10 mt-12">
            Register Now for the Metaverse Experience
          </h1>
          <p className="text-white font-work-sans text-xl mt-12">
            Register now for the upcoming event organised by the Centre Of
            Metaverse AKGEC{" "}
          </p>
        </div>
      </div>
      <div className="w-full md:w-3/5">
        <RegistrationForm />
      </div>
    </main>
  );
};

export default Page;
