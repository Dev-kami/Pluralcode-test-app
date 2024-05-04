import Button from "@/ui/Button";
import React from "react";

const Pagination = ({ products }: { products: ProductsType[] }) => {
  return (
    <div className="flex justify-center gap-3 my-10">
      <Button>Prev</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>Next</Button>
    </div>
  );
};

export default Pagination;
