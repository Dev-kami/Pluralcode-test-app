import React from "react";
import Categories from "./Categories";
import SearchProducts from "./SearchProducts";

const ProductsHeader = ({
  query,
  setQuery,
  onFilterByCategory,
  isActive,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onFilterByCategory: (id: number, category: string) => void;
  isActive: number;
}) => {
  return (
    <header className="pt-5 md:px-10 px-5 flex justify-between gap-y-7 lg:flex-row flex-col lg:items-stretch items-center">
      <Categories onFilterByCategory={onFilterByCategory} isActive={isActive} />

      <SearchProducts query={query} setQuery={setQuery} />
    </header>
  );
};

export default ProductsHeader;
