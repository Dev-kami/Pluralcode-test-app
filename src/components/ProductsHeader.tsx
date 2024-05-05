import React from "react";
import Categories from "./Categories";
import SearchProducts from "./SearchProducts";

const ProductsHeader = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <header className="md:pt-60 pt-44 md:px-10 px-5 flex justify-between gap-y-7 lg:flex-row flex-col lg:items-stretch items-center">
      <Categories />

      <SearchProducts query={query} setQuery={setQuery} />
    </header>
  );
};

export default ProductsHeader;
