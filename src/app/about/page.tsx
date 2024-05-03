"use client";

import NavThirdSlice from "@/components/nav/NavThirdSlice";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();

  return (
    <div>
      <NavThirdSlice />
      <h1>This is the about page</h1>
      <button onClick={() => router.push("/")}>Go back</button>
    </div>
  );
};

export default AboutPage;
