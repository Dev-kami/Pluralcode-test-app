import React from "react";

const SearchProducts = ({
  products,
  query,
  setQuery,
}: {
  products: ProductsType[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      className="py-2 px-2 w-[20rem] rounded-md border border-stone-400 outline-none focus-within:border-primary text-sm"
      type="text"
      placeholder="Search products..."
    />
  );
};

export default SearchProducts;
