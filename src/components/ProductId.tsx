"use client";

import Button from "@/ui/Button";
import Image from "next/image";
import React from "react";

const ProductId = ({
  product,
}: //   onAddCart,
{
  product: ProductsType;
  //   onAddCart: (newCart: ProductsType) => void;
}) => {
  const newCart = {
    id: product.id,
    title: product.title,
    price: product.price,
    // description: product.description,
    category: product.category,
    image: product.image,
  };

  return (
    <div className="flex gap-x-10 justify-between pt-60 px-10">
      <div className="w-full">
        <Image
          className="w-full h-[20rem]"
          src={product.image}
          alt={product.title}
          width={1000}
          height={1000}
        />
      </div>

      <div className="w-full flex flex-col gap-y-4 items-start">
        <h1 className="text-6xl font-semibold">{product.title}</h1>

        <div className="flex justify-between text-lg mt-10 mb-4 w-full">
          <p className="flex-1 text-center font-medium">${product.price}</p>
          <span className="uppercase flex-[2] text-center text-white bg-primary">
            {product.category}
          </span>
        </div>

        <p>{product.description}</p>

        <div className="mb-10">
          <Button
            variant="secondary"
            className="uppercase"
            onClick={() => onAddCart(newCart)}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
