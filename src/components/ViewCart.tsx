"use client";

import { useCart } from "@/context/CartContext";
import { stripePayment } from "@/services/stripePayment";
import Button from "@/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ViewCart = () => {
  const { carts, quantity, totalCartPrice } = useCart();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  async function handlePayment(cartId: number) {
    if (!cartId) return;

    const cart = carts.find((cart) => cart.id === cartId);
    if (!cart) return;
    try {
      setLoading(true);
      const data = await stripePayment(cart.title, cart.price, quantity);

      if (!data) return;
      router.push(data.url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`flex flex-col pt-5 ${!carts.length && "h-screen"}`}>
      <h1 className="text-center text-2xl font-bold mb-3">
        Your Shopping Cart
      </h1>

      {!carts.length ? (
        <div className="flex flex-col items-center">
          <p className="text-center">Your Cart is Empty</p>
          <Button href="/" variant="primary" className="mt-2">
            Go back to products
          </Button>
        </div>
      ) : (
        <div className="flex flex-col space-y-5">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="border border-black sm:p-10 p-5 mx-10 flex md:flex-row flex-col items-center gap-10"
            >
              <Image
                src={cart.image}
                alt={cart.title}
                width={250}
                height={250}
              />

              <div className="space-y-4">
                <h1 className="font-extrabold text-xl">{cart.title}</h1>
                <p>Price: ${cart.price}</p>
                <p>Quantity: {quantity}</p>
                <Button
                  onClick={() => handlePayment(cart.id)}
                  className="bg-stone-700 text-white"
                  loading={loading}
                >
                  checkout
                </Button>
              </div>
            </div>
          ))}
        </div>
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
