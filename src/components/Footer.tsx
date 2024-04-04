import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full left-0 bg-[#0C0118] mt-12">
        <div className="md:flex items-center justify-between py-4 md:px-28 px-7">
          <div className="flex items-center font-sans">
            <Link href="/">
              <Image
                width={1000}
                height={200}
                className="w-20 h-auto mr-2"
                src="/logo.png"
                alt="Centre of Metaverse"
              />
            </Link>

            <div className="text-white text-xs font-normal tracking-normal font-futura">
              <div>
                <p className="uppercase relative inline-block shrink-0 text-[0.68rem]">
                  Centre of
                </p>
              </div>
              <div>
                <p className="uppercase relative text-[0.88rem] inline-block shrink-0 font-semibold">
                  metaverse
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/centre.of.metaverse" target="_blank" rel="noopener noreferrer">
              <Image
                src="/insta.svg"
                alt="Insta"
                width={20}
                height={20}
                className="w-11 icon"
              />
            </a>

            <a
              href="mailto:centreofmetaverse@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Mail.svg"
                alt="Mail"
                width={20}
                height={20}
                className="w-11 icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
