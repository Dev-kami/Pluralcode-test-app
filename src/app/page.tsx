import React from "react";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/services/getAllProducts";
import ProductsWrapper from "@/components/ProductsWrapper";

const page = async () => {
  const products: ProductsType[] = await getAllProducts();

  return (
    <main>
      <NavBar />
      <ProductsWrapper products={products} />
      <Footer />
    </main>
  );
};

export default page;
