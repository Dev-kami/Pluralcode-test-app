"use client";

import React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsPage from "./Products";
import Pagination from "./Pagination";

const PRODUCTS_PER_PAGE = 6;

const ProductsWrapper = ({ products }: { products: ProductsType[] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const totalProducts = products.length;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <ProductsHeader />
      <ProductsPage products={currentProducts} />
      <Pagination
        setCurrentPage={setCurrentPage}
        indexOfLastProduct={indexOfLastProduct}
        indexOfFirstProduct={indexOfFirstProduct}
        totalProducts={totalProducts}
      />
    </div>
  );
};

export default ProductsWrapper;
