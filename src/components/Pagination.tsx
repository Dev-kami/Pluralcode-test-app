import Button from "@/ui/Button";
import React from "react";

const Pagination = ({
  setCurrentPage,
  indexOfLastProduct,
  indexOfFirstProduct,
}: {
  products: ProductsType[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  indexOfLastProduct: number;
  indexOfFirstProduct: number;
}) => {
  return (
    <div className="flex justify-center gap-3 my-10">
      <Button
        disabled={Boolean(indexOfLastProduct)}
        className="disabled:opacity-50"
        onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
      >
        Prev
      </Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button
        disabled={Boolean(indexOfFirstProduct)}
        className="disabled:opacity-50"
        onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
