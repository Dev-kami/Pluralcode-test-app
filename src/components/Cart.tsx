import React, { useState } from "react";
import Image from "next/image";

import { FaTimes } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

type CartProps = {
  cart: ProductsType;
};

const Cart = ({ cart }: CartProps) => {
  const { deleteSingleCart, quantity, incrementQuantity, decrementQuantity } =
    useCart();

  return (
    <div className="my-5">
      <div className="flex justify-between gap-x-5 mb-5">
        <Image src={cart.image} alt={cart.title} width={70} height={70} />
        <h3 className="self-center ml-5 text-lg">{cart.title}</h3>
        <button
          onClick={() => deleteSingleCart(cart.id)}
          className="self-start ml-auto p-1 bg-black text-white rounded-full hover:text-red-500"
        >
          <FaTimes />
        </button>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <button
            onClick={decrementQuantity}
            className="bg-black w-9 h-9 text-white"
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={incrementQuantity}
            className="bg-black w-9 h-9 text-white"
          >
            +
          </button>
        </div>

        <p className="text-sm">${cart.price}</p>
      </div>
    </div>
  );
};

export default Cart;
