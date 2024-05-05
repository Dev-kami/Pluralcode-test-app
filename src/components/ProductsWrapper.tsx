"use client";

import React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsPage from "./Products";
import Pagination from "./Pagination";

const ProductsWrapper = ({ products }: { products: ProductsType[] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productsPerPage, setProdudctsPerPage] = React.useState(6);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <ProductsHeader />
      <ProductsPage products={currentProducts} />
      <Pagination
        products={products}
        setCurrentPage={setCurrentPage}
        indexOfLastProduct={indexOfLastProduct}
        indexOfFirstProduct={indexOfFirstProduct}
      />
    </div>
  );
};

export default ProductsWrapper;
