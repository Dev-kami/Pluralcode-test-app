import Footer from "@/components/Footer";
import ViewCart from "@/components/ViewCart";
import NavBar from "@/components/nav/NavBar";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <ViewCart />

      <Footer />
    </div>
  );
};

export default page;
