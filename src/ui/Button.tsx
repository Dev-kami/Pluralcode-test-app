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
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
