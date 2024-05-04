"use client";

import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="px-5 flex font-inconsolata text-3xl font-semibold cursor-pointer"
    >
      Test <span className="text-primary">.</span>
    </Link>
  );
};

export default Logo;
