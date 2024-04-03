"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Events", link: "/events" },
  ];
  return (
    <>
      <div className="w-full fixed top-0 left-0 border-b border-gray-900 h-[72px]">
        <div className="md:flex items-center justify-between bg-black py-4 md:px-28 px-7">
          <div className="flex items-center font-sans">
            <Link href="/">
              <Image
                width={1000}
                height={200}
                className="w-20 h-auto mr-2 cursor-pointer"
                src="/logo.png"
                alt="Centre of Metaverse"
              />
            </Link>

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

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-black ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-[18px] md:my-0 my-7">
                <Link href={link.link}>
                  <div className="text-[#E9E9E9] duration-400  hover:text-pink-500 hover:bg-clip-text font-poppins font-semibold cursor-pointer leading-5">
                    {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
