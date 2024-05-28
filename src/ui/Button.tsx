import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "default" | "secondary";
  className?: string;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "default",
  className = "",
  href,
  ...rest
}: ButtonProps) => {
  const baseClasses = "border border-stone-500 py-2 px-2 text-sm";
  const variantClasses = {
    primary: "rounded-md bg-primary text-white",
    secondary: "bg-primary text-white",
    default: "rounded-md",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
