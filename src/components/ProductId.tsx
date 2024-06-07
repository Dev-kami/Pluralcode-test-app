"use client";

import { useCart } from "@/context/CartContext";
import Button from "@/ui/Button";
import Image from "next/image";
import React from "react";

const ProductId = ({ product }: { product: ProductsType }) => {
    const { addToCart } = useCart();
    const { id, category, image, price, title } = product;

    const newCart = {
        id,
        title,
        price,
        category,
        image,
    };

    return (
        <div className="pt-10 px-10 flex gap-x-10 justify-between md:flex-row md:gap-y-0 gap-y-10 flex-col">
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
                <h1 className="md:text-5xl sm:text-4xl text-3xl md:text-left text-center font-bold">
                    {product.title}
                </h1>

                <div className="flex justify-between mt-10 mb-4 w-full">
                    <p className="flex-1 text-center text-lg font-bold">${product.price}</p>
                    <span className="uppercase flex-[2] flex items-center justify-center tracking-widest text-center text-white bg-primary">
                        {product.category}
                    </span>
                </div>

                <p>{product.description}</p>

                <div className="mb-10 md:w-fit w-full">
                    <Button
                        variant="secondary"
                        className="uppercase hover:bg-primary/95 w-full"
                        onClick={() => addToCart(newCart)}
                    >
                        Add To Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductId;
