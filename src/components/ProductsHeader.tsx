import React from "react";
import Categories from "./Categories";
import SearchProducts from "./SearchProducts";

const ProductsHeader = () => {
  return (
    <header className="pt-60 px-10 flex justify-between">
      <Categories />

      <SearchProducts />
    </header>
  );
};

export default ProductsHeader;
