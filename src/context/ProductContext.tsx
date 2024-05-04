"use client";

import React, { createContext, useContext } from "react";

type ProductContextType = {
  products: ProductsType[];
  loading: boolean;
};

const ProductContext = createContext({} as ProductContextType);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProduct };
