"use client";

import React, { useState, useEffect } from "react";
import Homepage from "./home/page"; // Import the homepage component
import Loader from "@/components/Loader";

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader onAnimationComplete={() => setIsLoading(false)} />
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default Page;
