"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import React from "react";

const ViewCart = () => {
  const { carts, quantity, totalCartPrice } = useCart();

  return (
    <div className="flex flex-col justify-center">
      <h1 className="pt-56 text-center text-2xl font-bold mb-10">
        Your Shopping Cart
      </h1>

      {!carts.length ? (
        <p className="text-center">Your Cart is Empty</p>
      ) : (
        carts.map((cart) => (
          <div
            key={cart.id}
            className="border border-black p-10 mx-10 flex md:flex-row flex-col items-center gap-10"
          >
            <div>
              <Image
                src={cart.image}
                alt={cart.title}
                width={250}
                height={250}
              />
            </div>
            <div className="space-y-4">
              <h1 className="font-extrabold text-xl">{cart.title}</h1>
              <p>Price: ${cart.price}</p>
              <p>Quantity: {quantity}</p>
            </div>
          </div>
        ))
      )}

      <h2
        className={`${
          !carts.length && "hidden"
        } px-10 mt-5 mb-20 font-extrabold text-xl`}
      >
        Total: ${totalCartPrice()}
      </h2>
    </div>
  );
};

export default ViewCart;
