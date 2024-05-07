"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ProductContextType = {
  products: ProductsType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>;
};

const ProductContext = createContext({} as ProductContextType);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductsType[]>([]);

  // fetch Products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return context;
};

export { ProductProvider, useProducts };
