import Footer from "@/components/Footer";
import ViewCart from "@/components/ViewCart";
import NavBar from "@/components/nav/NavBar";
import { useCart } from "@/context/CartContext";
import React from "react";

const page = () => {
  //   const { carts } = useCart();
  return (
    <div>
      <NavBar />

      <h1 className="pt-60">Your Shopping Cart</h1>

      {/* {!carts.length ? <div>Your Cart is Empty</div> : <ViewCart />} */}
      <Footer />
    </div>
  );
};

export default page;
