import React from "react";
import Button from "@/ui/Button";

const Categories = () => {
  return (
    <div className="flex space-x-5">
      <Button>All Products</Button>
      <Button>Men&apos;s Clothing</Button>
      <Button>Jewelery</Button>
      <Button>Electronics</Button>
      <Button>Women&apos;s Clothing</Button>
    </div>
  );
};

export default Categories;
