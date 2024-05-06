"use client";

import React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsPage from "./Products";
import Pagination from "./Pagination";

const PRODUCTS_PER_PAGE = 6;

const ProductsWrapper = ({ products }: { products: ProductsType[] }) => {
  const [query, setQuery] = React.useState("");
  const [isActive, setIsActive] = React.useState(0);
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  function handleFilterByCategory(id: number, category: string) {
    setIsActive(id);

    // If "all products" is selected, show all products
    if (category === "all products") {
      setFilteredProducts(products);
    } else {
      // Filter products by category
      const filteredByCategory = products.filter(
        (product) => product.category === category
      );

      // Apply query filtering
      const filteredByQuery = filteredByCategory.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredProducts(filteredByQuery);
    }
  }

  // Filter products by query
  React.useEffect(() => {
    const filteredByQuery = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filteredByQuery);
  }, [query, products]);

  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const totalProducts = query ? filteredProducts.length : products.length;
  const currentProducts = query
    ? filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    : filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
