import React from "react";

const NavFirstSlice = () => {
    const todaysDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="md:flex justify-between px-10 hidden py-4 bg-[#2F333A] text-white">
            <h3 className="text-sm">Welcome to Test & Get the best product</h3>
            <span className="text-sm">{todaysDate}</span>
        </div>
    );
};

export default NavFirstSlice;
