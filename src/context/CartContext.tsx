"use client";

import React, { createContext, useContext } from "react";

type CartContextType = {
  carts: ProductsType[];
  addToCart: (newCart: ProductsType) => void;
  deleteSingleCart: (productId: number) => void;
  clearCart: () => void;
  totalCartPrice: () => number;
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};

const CartContext = createContext({} as CartContextType);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [carts, setCarts] = React.useState<ProductsType[]>([]);
  const [quantity, setQuantity] = React.useState<number>(1);

  function addToCart(newCart: ProductsType) {
    // Check if product already exists
    const existingProduct = carts.find((item) => item.id === newCart.id);
    if (existingProduct) {
      setQuantity((prev) => prev + 1);
      return;
    }
    setCarts((prev) => [...prev, newCart]);
  }

  function deleteSingleCart(productId: number) {
    setCarts((prev) => prev.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCarts([]);
  }

  function totalCartPrice() {
    return carts.reduce((acc, item) => acc + item.price * quantity, 0);
  }
  function incrementQuantity() {
    setQuantity((prev) => prev + 1);
  }
  function decrementQuantity() {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        carts,
        deleteSingleCart,
        clearCart,
        totalCartPrice,
        quantity,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
