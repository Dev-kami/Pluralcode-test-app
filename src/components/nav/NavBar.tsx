import React from "react";
import NavFirstSlice from "./NavFirstSlice";
import NavSecondSlice from "./NavSecondSlice";
import NavThirdSlice from "./NavThirdSlice";
import { UserProvider } from "@/context/UserContext";

const NavBar = () => {
    return (
        <UserProvider>
            <nav className="sticky top-0 w-full pb-5 bg-white z-50">
                <NavFirstSlice />
                <NavSecondSlice />
                <NavThirdSlice />
            </nav>
        </UserProvider>
    );
};

export default NavBar;
