import React from "react";

const SearchProducts = () => {
  return (
    <input
      className="py-2 px-2 w-[20rem] rounded-md border border-stone-400 outline-none focus-within:border-primary text-sm"
      type="text"
      placeholder="Search products..."
    />
  );
};

export default SearchProducts;
