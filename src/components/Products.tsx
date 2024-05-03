import { getAllProducts } from "@/services/getAllProducts";
import React from "react";
import ProductsItem from "./ProductsItem";

const ProductsPage = async () => {
  const products: ProductsType[] = await getAllProducts();
  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-x-32 gap-y-7 px-24">
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
