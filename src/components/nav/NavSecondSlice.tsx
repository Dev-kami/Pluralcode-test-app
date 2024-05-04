"use client";

import Logo from "@/ui/Logo";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { useCart } from "@/context/CartContext";

const NavSecondSlice = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const { carts } = useCart();

  return (
    <div className="flex justify-between md:px-10 px-5 border-b border-b-stone-400 py-6">
      <Logo />

      <span
        onClick={() => setShowSidebar((s) => !s)}
        className="relative cursor-pointer"
      >
        <CiShoppingCart size={30} fontWeight={900} />
        <span className="p-0.5 px-1.5 text-xs absolute -top-1 -right-1 rounded-full bg-red-600 text-white">
          {carts.length}
        </span>
      </span>

      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
    </div>
  );
};

export default NavSecondSlice;
