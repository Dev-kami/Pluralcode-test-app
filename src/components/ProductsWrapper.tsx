"use client";

import React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsPage from "./Products";
import Pagination from "./Pagination";

const PRODUCTS_PER_PAGE = 6;

const ProductsWrapper = ({ products }: { products: ProductsType[] }) => {
  const [query, setQuery] = React.useState("");
  const [isActive, setIsActive] = React.useState(0);

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

  function handleFilterByCategory(id: number, category: string) {
    setIsActive(id);

    // Filter products by category
    if (category === "men's clothing") {
      return products.filter((product) => product.category === category);
    } else if (category === "jewelery") {
      return products.filter((product) => product.category === category);
    } else if (category === "electronics") {
      return products.filter((product) => product.category === category);
    } else if (category === "women's clothing") {
      return products.filter((product) => product.category === category);
    } else {
      return products;
    }
  }

  return (
    <div>
      <ProductsHeader
        query={query}
        setQuery={setQuery}
        onFilterByCategory={handleFilterByCategory}
        isActive={isActive}
      />
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
