"use client";

import NavBar from "@/components/nav/NavBar";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();

  return (
    <div>
      <NavBar />
      <div className="pt-60">
        <h1>This is the about page</h1>
      </div>
      <button onClick={() => router.push("/")}>Go back</button>
    </div>
  );
};

export default AboutPage;
