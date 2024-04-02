'use client';
import { WorkCard } from "@/type";
import Image from "next/image";
import { title } from "process";
import { FC, useEffect, useState } from "react";

export interface Props extends WorkCard{}

export const Card:FC<Props> = ({thumb}) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
      }, [])

  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 bg-[#090909] rounded-lg shadow-lg">
        <div>
            <Image src={thumb} alt={title} width={192} height={192} className="rounded-xl" />
            <p className="text-white font-futura text-2xl mt-4">{isClient?"title":"ksj"}</p>
        </div>
    </div>
  );
};