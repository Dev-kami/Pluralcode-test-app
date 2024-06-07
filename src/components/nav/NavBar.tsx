import React from "react";
import NavFirstSlice from "./NavFirstSlice";
import NavSecondSlice from "./NavSecondSlice";
import NavThirdSlice from "./NavThirdSlice";

const NavBar = () => {
    return (
        <nav className="sticky top-0 w-full pb-5 bg-white z-50">
            <NavFirstSlice />
            <NavSecondSlice />
            <NavThirdSlice />
        </nav>
    );
};

export default NavBar;
