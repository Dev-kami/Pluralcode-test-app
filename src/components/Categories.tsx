"use client";

import React from "react";
import Button from "@/ui/Button";

type CategoriesType = {
    onFilterByCategory: (id: number, category: string) => void;
    isActive: number;
};

const Categories = ({ onFilterByCategory, isActive }: CategoriesType) => {
    const categories = [
        { category: "All Products", id: 0 },
        { category: "Men's Clothing", id: 1 },
        { category: "Jewelery", id: 2 },
        { category: "Electronics", id: 3 },
        { category: "Women's Clothing", id: 4 },
    ];

    return (
        <div className="flex lg:gap-0 gap-4 flex-wrap justify-center">
            {categories.map((category) => (
                <Button
                    className="border border-stone-500"
                    variant={category.id === isActive ? "primary" : "default"}
                    onClick={() => onFilterByCategory(category.id, category.category.toLowerCase())}
                    key={category.category}
                >
                    {category.category}
                </Button>
            ))}
        </div>
    );
};

export default Categories;
