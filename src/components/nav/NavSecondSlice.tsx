import Logo from "@/ui/Logo";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const NavSecondSlice = () => {
  return (
    <div className="flex justify-between px-10 border-b border-b-stone-400 py-6">
      <Logo />

      <span className="relative">
        <CiShoppingCart size={30} fontWeight={900} />
        <span className="p-0.5 px-1.5 text-xs absolute -top-1 -right-1 rounded-full bg-red-600 text-white">
          0
        </span>
      </span>
    </div>
  );
};

export default NavSecondSlice;
