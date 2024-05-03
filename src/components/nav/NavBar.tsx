import React from "react";
import NavFirstSlice from "./NavFirstSlice";
import NavSecondSlice from "./NavSecondSlice";
import NavThirdSlice from "./NavThirdSlice";

const NavBar = () => {
  return (
    <nav className="fixed w-full pb-5">
      <NavFirstSlice />
      <NavSecondSlice />
      <NavThirdSlice />
    </nav>
  );
};

export default NavBar;
