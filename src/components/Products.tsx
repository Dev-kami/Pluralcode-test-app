import React from "react";
import ProductsItem from "./ProductsItem";

const ProductsPage = ({ products }: { products: ProductsType[] }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-32 gap-y-7 place-items-center md:px-24 px-5 mt-5">
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
