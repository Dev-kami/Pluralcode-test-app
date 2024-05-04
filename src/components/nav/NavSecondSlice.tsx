"use client";

import Logo from "@/ui/Logo";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const NavSecondSlice = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <div className="flex justify-between px-10 border-b border-b-stone-400 py-6">
      <Logo />

      <span
        onClick={() => setShowSidebar((s) => !s)}
        className="relative cursor-pointer"
      >
        <CiShoppingCart size={30} fontWeight={900} />
        <span className="p-0.5 px-1.5 text-xs absolute -top-1 -right-1 rounded-full bg-red-600 text-white">
          0
        </span>
      </span>

      {showSidebar && (
        <div className="fixed top-0 right-0 border-l border-l-gray-300 h-full bg-white w-[35%]">
          <header>
            <p>Shopping Cart {1}</p>
            <button onClick={() => setShowSidebar((s) => !s)}>go back</button>
          </header>
        </div>
      )}
    </div>
  );
};

export default NavSecondSlice;
