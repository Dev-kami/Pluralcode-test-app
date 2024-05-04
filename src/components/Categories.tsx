import React from "react";
import Button from "@/ui/Button";

const Categories = () => {
  const categories = [
    { name: "All Products", id: 0 },
    { name: "Men's Clothing", id: 1 },
    { name: "Jewelery", id: 2 },
    { name: "Electronics", id: 3 },
    { name: "Women's Clothing", id: 4 },
  ];
  return (
    <div className="flex">
      {categories.map((category) => (
        <Button key={category.name}>{category.name}</Button>
      ))}
    </div>
  );
};

export default Categories;
