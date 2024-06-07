import Link from "next/link";
import React from "react";
import MiniSpinner from "./MiniSpinner";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "default" | "secondary";
    className?: string;
    href?: string;
    loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = "default", className = "", href, ...rest }: ButtonProps) => {
    const baseClasses = "border border-stone-500 py-2 px-2 text-sm";
    const loadingClasses = "flex items-center gap-x-3";
    const variantClasses = {
        primary: "rounded-md bg-primary text-white",
        secondary: "bg-primary text-white",
        default: "rounded-md",
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className} ${
        rest.loading && loadingClasses
    }`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
                {rest.loading && <MiniSpinner />}
            </Link>
        );
    }

    return (
        <button {...rest} className={combinedClasses}>
            {children}
            {rest.loading && <MiniSpinner />}
        </button>
    );
};

export default Button;
