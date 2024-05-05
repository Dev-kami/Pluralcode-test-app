import React from "react";
import Categories from "./Categories";
import SearchProducts from "./SearchProducts";

const ProductsHeader = () => {
  return (
    <header className="md:pt-60 pt-44 md:px-10 px-5 flex justify-between gap-y-7 lg:flex-row flex-col lg:items-stretch items-center">
      <Categories />

      <SearchProducts />
    </header>
  );
};

export default ProductsHeader;
