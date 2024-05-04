import { useCart } from "@/context/CartContext";
import React from "react";

const ViewCart = () => {
  const { carts, quantity, totalCartPrice } = useCart();

  return (
    <div>
      {carts.map((cart) => (
        <div key={cart.id}>
          <div>
            <img src={cart.image} alt={cart.title} />
          </div>
          <div>
            <h1>{cart.title}</h1>
            <p>Price: ${cart.price}</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
      ))}

      <h2>Total: ${totalCartPrice()}</h2>
    </div>
  );
};

export default ViewCart;
