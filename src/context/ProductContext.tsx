"use client";

import { getAllProducts } from "@/services/getAllProducts";
import React, { createContext, useContext, useState, useEffect } from "react";

type ProductContextType = {
  products: ProductsType[];
  loading: boolean;
};

const ProductContext = createContext({} as ProductContextType);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        console.log(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProduct };
