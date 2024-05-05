"use client";

import React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsPage from "./Products";
import Pagination from "./Pagination";

const PRODUCTS_PER_PAGE = 6;

const ProductsWrapper = ({ products }: { products: ProductsType[] }) => {
  const [query, setQuery] = React.useState("");

  // Filter products by title
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const totalProducts = query ? filteredProducts.length : products.length;
  const currentProducts = query
    ? filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    : products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <ProductsHeader query={query} setQuery={setQuery} />
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
