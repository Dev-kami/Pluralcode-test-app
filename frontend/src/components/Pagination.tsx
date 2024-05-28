import Button from "@/ui/Button";
import React from "react";

const Pagination = ({
  setCurrentPage,
  indexOfLastProduct,
  indexOfFirstProduct,
  totalProducts,
}: {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  indexOfLastProduct: number;
  indexOfFirstProduct: number;
  totalProducts: number;
}) => {
  const [currentPage] = [indexOfLastProduct / 6];

  return (
    <div className="flex justify-center gap-3 my-10">
      <Button
        onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
        disabled={indexOfFirstProduct === 0}
      >
        Prev
      </Button>

      {Array.from({ length: Math.ceil(totalProducts / 6) }, (_, index) => (
        <Button
          onClick={() => setCurrentPage(index + 1)}
          className={`${currentPage === index + 1 && "bg-primary text-white"}`}
          key={index}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
        disabled={indexOfLastProduct >= totalProducts}
      >
        Next
      </Button>
    </div>
  );
};
export default Pagination;
