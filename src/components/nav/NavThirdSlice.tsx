"use client";

import Button from "@/ui/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavThirdSlice = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navData = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
  ];
  return (
    <div className="md:px-10 px-5 pt-6 pb-3 border-b border-b-stone-400 flex items-center justify-between">
      <ul className="flex space-x-7">
        {navData.map(({ title, link }, index) => (
          <Link
            href={link}
            key={index}
            className={`${
              pathname === link &&
              "text-primary italic relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-primary"
            }`}
          >
            {title}
          </Link>
        ))}
      </ul>

      <div className="space-x-4">
        <Button
          onClick={() => router.push("/auth/signup")}
          className="hover:bg-primary hover:text-white"
        >
          SignUp
        </Button>
        <Button onClick={() => router.push("/auth/login")} variant="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavThirdSlice;
