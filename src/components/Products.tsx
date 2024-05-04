import React from "react";
import ProductsItem from "./ProductsItem";

const ProductsPage = ({ products }: { products: ProductsType[] }) => {
  return (
    <div className="grid grid-cols-3 gap-x-32 gap-y-7 px-24 mt-5">
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
