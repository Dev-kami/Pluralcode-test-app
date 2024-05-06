// "use client";

// import { getAllProducts } from "@/services/getAllProducts";
// import React, { createContext, useContext } from "react";

// type ProductContextType = {
//   products: ProductsType[];
// };

// const ProductContext = createContext({} as ProductContextType);

// const ProductProvider = ({ children }: { children: React.ReactNode }) => {
//   const [products, setProducts] = React.useState<ProductsType[]>([]);

//   // fetch products
//   React.useEffect(() => {
//     async function fetchProducts() {
//       const data = await getAllProducts();
//       setProducts(data);
//     }

//     fetchProducts();
//   }, []);

//   return (
//     <ProductContext.Provider
//       value={{
//         products,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// const useProducts = () => {
//   return useContext(ProductContext);
// };

// export { ProductProvider, useProducts };
