"use client";

import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="px-5 flex font-inconsolata font-semibold cursor-pointer"
      style={{
        fontSize: "1.7rem",
      }}
    >
      Test <span className="text-primary">.</span>
    </Link>
  );
};

export default Logo;
