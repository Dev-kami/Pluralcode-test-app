"use client";

import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link
            href={"/"}
            className="px-5 flex font-inconsolata cursor-pointer"
            style={{
                fontSize: "1.7rem",
                fontWeight: 600,
            }}
        >
            Test <span className="text-primary">.</span>
        </Link>
    );
};

export default Logo;
