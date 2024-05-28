"use client";

import React from "react";
import NavBar from "@/components/nav/NavBar";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-60">
        <h1>This is the about page</h1>
      </div>
      <button onClick={() => history.back()}>Go back</button>
    </div>
  );
};

export default AboutPage;
