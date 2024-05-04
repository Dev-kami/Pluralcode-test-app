"use client";

import React, { useState } from "react";
import Button from "@/ui/Button";

const Categories = () => {
  const [isActive, setIsActive] = useState(0);

  const categories = [
    { name: "All Products", id: 0 },
    { name: "Men's Clothing", id: 1 },
    { name: "Jewelery", id: 2 },
    { name: "Electronics", id: 3 },
    { name: "Women's Clothing", id: 4 },
  ];

  function handleClick(id: number, name: string) {
    setIsActive(id);
  }

  return (
    <div className="flex lg:gap-0 gap-4 flex-wrap justify-center">
      {categories.map((category) => (
        <Button
          className="border border-stone-500"
          variant={category.id === isActive ? "primary" : "default"}
          onClick={() => handleClick(category.id, category.name)}
          key={category.name}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
