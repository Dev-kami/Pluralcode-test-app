// import React from "react";

// type ButtonProps = {
//   children: React.ReactNode;
//   type?: "primary" | "default";
// };

// const Button = ({ children, type }: ButtonProps) => {
//   if (type === "primary") {
//     <button className="py-2 px-4 bg-red-500">{children}</button>;
//   }

//   return <button className="border border-black">{children}</button>;
// };

// export default Button;

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "default" | "secondary";
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  children,
  variant = "default",
  className,
  ...rest
}: ButtonProps) => {
  const defaultClasses = "border border-stone-500 py-1 px-3 text-sm";

  if (variant === "secondary") {
    return (
      <button
        {...rest}
        className={`${defaultClasses} ${className} bg-primary text-white`}
      >
        {children}
      </button>
    );
  }

  if (variant === "primary") {
    return (
      <button
        {...rest}
        className={`${defaultClasses} ${className} rounded-lg bg-primary text-white`}
      >
        {children}
      </button>
    );
  }

  return (
    <button {...rest} className={`${defaultClasses} ${className} rounded-lg`}>
      {children}
    </button>
  );
};

export default Button;
