// import { createContext, useContext } from "react";

// const handleAddCartContext = createContext({
//   handleAddCart: (newCart: ProductsType) => {},
// });

// function handleAddCartProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <handleAddCartContext.Provider
//       value={{
//         handleAddCart: (newCart: ProductsType) => {
//           console.log(newCart);
//         },
//       }}
//     >
//       {children}
//     </handleAddCartContext.Provider>
//   );
// }

// function useAddCart() {
//   const context = useContext(handleAddCartContext);

//   if (context === "undefined")
//     throw new Error("useAddCart must be used within a AddCartProvider");

//   return context;
// }

// export { handleAddCartProvider, useAddCart };
