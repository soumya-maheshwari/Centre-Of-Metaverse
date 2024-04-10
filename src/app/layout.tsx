import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Cursor } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centre Of Metaverse",
  description:
    "Dream, Design, Develop - Centre Of Metaverse is a creative studio that specializes in AR/VR experiences.",
};

const futuraMaxiBold = localFont({
  src: "./fonts/futuramaxicgboldopentype.woff",
  display: "swap",
  variable: "--font-futura-maxi-bold",
});

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-worksans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${futuraMaxiBold.variable} ${worksans.variable} bg-black overflow-x-hidden md:overflow-x-auto`}
      >
        {children}
        {/* <Cursor /> */}
      </body>
    </html>
  );
}
