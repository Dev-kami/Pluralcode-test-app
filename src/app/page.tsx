import React from "react";
import NavBar from "@/components/nav/NavBar";
import ProductsHeader from "@/components/ProductsHeader";
import ProductsPage from "@/components/Products";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <NavBar />
      <ProductsHeader />
      <ProductsPage />

      <Footer />
    </main>
  );
};

export default page;
