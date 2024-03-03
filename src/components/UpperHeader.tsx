import SignIn from "@/app/(auth)/SignIn";
import React from "react";
import { VscAccount } from "react-icons/vsc";
import Cart from "./Cart";

const UpperHeader = () => {
  return (
    <div className="sm:hidden bg-gray-800 py-2 text-white flex justify-between">
      <h1 className="text-2xl">FlipZon</h1>
      <div className="flex gap-1">
        <p className="mt-1 text-md mx-1">Signin</p>
        <VscAccount className="mt-1 text-2xl" />
        <div className="mt-1 text-2xl m-3">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
