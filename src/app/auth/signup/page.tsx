"use client";

import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupPage = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <div className="h-screen w-full bg-primary/10 flex flex-col items-center justify-center">
      <h1 className="text-3xl uppercase mt-10">Sign up</h1>

      <form className="w-[27rem] bg-white p-5 flex flex-col space-y-5 rounded-md mb-10 mt-5">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            className="p-2 border border-stone-500 rounded-md mt-2"
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="firstname" className="font-medium">
            Firstname
          </label>
          <input
            className="p-2 border border-stone-500 rounded-md mt-2"
            type="text"
            id="firstname"
            name="firstname"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastname" className="font-medium">
            Lastname
          </label>
          <input
            className="p-2 border border-stone-500 rounded-md mt-2"
            type="text"
            id="lastname"
            name="lastname"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <div className="p-2 border border-stone-500 rounded-md mt-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full pr-7"
            />
            {!showPassword ? (
              <FaEyeSlash
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEye
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium">
            Confirm Password
          </label>
          <div className="p-2 border border-stone-500 rounded-md mt-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="currentPassword"
              name="confirm-password"
              className="w-full pr-7"
            />
            {!showPassword ? (
              <FaEyeSlash
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEye
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        <button
          className="p-2 rounded-md mt-2 bg-primary text-white hover:bg-primary/90 transition-all duration-300 ease-in-out"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
