import SignIn from "@/app/api/(auth)/SignIn";
import React from "react";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className="w-full sm:px-16 lg:px-28 h-16 bg-gray-800 text-white shadow-lg flex sm:justify-between items-center">
      <h1 className="hidden sm:flex text-2xl">FlipZon</h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search Items"
            className="md:w-96 sm:w-full py-3 rounded-md px-2"
          />
        </form>
      </div>
      <div className="hidden sm:flex gap-6">
        <div>
          <SignIn />
        </div>

        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
