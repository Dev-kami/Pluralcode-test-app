import React from "react";
import NavBar from "@/components/nav/NavBar";
import ProductsHeader from "@/components/ProductsHeader";
import ProductsPage from "@/components/Products";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/services/getAllProducts";

const page = async () => {
  const products: ProductsType[] = await getAllProducts();

  return (
    <main>
      <NavBar />
      <ProductsHeader />
      <ProductsPage products={products} />

      <Footer />
    </main>
  );
};

export default page;
