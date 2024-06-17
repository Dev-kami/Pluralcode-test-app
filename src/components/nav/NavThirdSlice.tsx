"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { TbLogout } from "react-icons/tb";

import Button from "@/ui/Button";
import { useUser } from "@/context/UserContext";

const NavThirdSlice = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { user, setUser } = useUser();

    const navData = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
    ];

    function handleLogout() {
        localStorage.removeItem("token");
        setUser(null);

        router.push("/login");
    }

    return (
        <div className="md:px-10 px-5 pt-6 pb-3 border-b border-b-stone-400 flex items-center justify-between">
            <ul className="flex space-x-7">
                {navData.map(({ title, link }, index) => (
                    <Link
                        href={link}
                        key={index}
                        className={`${
                            pathname === link &&
                            "text-primary italic relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-primary"
                        }`}
                    >
                        {title}
                    </Link>
                ))}
            </ul>

            {user?.status ? (
                <p className="flex items-center space-x-2">
                    Welcome{" "}
                    <span className="text-primary ml-2 capitalize">
                        {user.data.user.firstName} {user.data.user.lastName}
                    </span>
                    <span className="text-stone-400"> | </span>
                    <Button
                        onClick={handleLogout}
                        className="border-2"
                        title="logout"
                        onTimeUpdate={() => {
                            console.log("on time");
                        }}
                    >
                        <TbLogout size={22} />
                    </Button>
                </p>
            ) : (
                <div className="flex space-x-5">
                    <Button href="/login">Login</Button>
                    <Button variant="primary" href="/signup">
                        Sign up
                    </Button>
                </div>
            )}
        </div>
    );
};

export default NavThirdSlice;
