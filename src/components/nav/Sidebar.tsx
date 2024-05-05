import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Cart from "../Cart";

const Sidebar = ({
  setShowSidebar,
}: {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const { carts, clearCart, totalCartPrice } = useCart();
  return (
    <div className="fixed top-0 right-0 border-l border-l-gray-300 h-full bg-white z-50 md:w-[32rem] sm:w-[27rem] w-full py-12 px-7 overflow-auto">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-b-gray-300 pb-5">
        <p className="font-bold">Shopping Cart {carts.length}</p>

        <button onClick={() => setShowSidebar((s) => !s)}>
          <FaArrowRight size={20} />
        </button>
      </header>

      {/* Cart Accumulator */}
      <div className="flex justify-between items-center my-5">
        <p className="font-bold">TOTAL: ${totalCartPrice().toFixed(2)}</p>
        <button
          onClick={clearCart}
          className="p-3 bg-[#F43F5E] text-white rounded-full"
        >
          <RiDeleteBinLine size={20} />
        </button>
      </div>

      {/* Checkout */}
      <div className="border-b border-b-gray-300 pb-7">
        <button
          onClick={() => router.push("/viewcart")}
          className="w-full py-3.5 bg-black text-white"
        >
          Checkout
        </button>
      </div>

      {/* Carts */}
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default Sidebar;
