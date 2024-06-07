"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ProductContextType = {
    products: ProductsType[];
    setProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>;
    isLoading: boolean;
};

const ProductContext = createContext({} as ProductContextType);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<ProductsType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // fetch Products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                isLoading,
                products,
                setProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

const useProducts = () => {
    const context = useContext(ProductContext);

    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductProvider");
    }

    return context;
};

export { ProductProvider, useProducts };
