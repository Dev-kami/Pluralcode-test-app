import Footer from "@/components/Footer";
import ProductId from "@/components/ProductId";
import NavBar from "@/components/nav/NavBar";
import { addCart } from "@/services/addCart";
import { getSingleProduct } from "@/services/getSinglePost";
import React from "react";

const ProductIdPage = async ({ params }: { params: { productId: string } }) => {
  const singleProduct: ProductsType = await getSingleProduct(
    Number(params.productId)
  );

  // const handleAddCart = (newCart: ProductsType) => {
  //   addCart(newCart);
  // };

  return (
    <div>
      <NavBar />

      <ProductId
        product={singleProduct}
        // onAddCart={handleAddCart}
      />

      <Footer />
    </div>
  );
};

export default ProductIdPage;
