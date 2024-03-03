import SignIn from "@/app/api/(auth)/SignIn";
import React from "react";
import Cart from "./Cart";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full sm:px-16 lg:px-28 h-16 bg-gray-800 text-white shadow-lg flex sm:justify-between items-center">
      <Link href={'/'} className="hidden sm:flex text-2xl">FlipZon</Link>
      <div className="w-full flex justify-center ">
        <form>
          <input
            type="text"
            placeholder="Search Items"
            className="md:w-96 sm:w-56 min-[200px]:w-[17rem] min-[350px]:w-[22rem] min-[450px]:w-[28rem] min-[560px]:w-[32rem] py-3 rounded-md px-2 text-black"
          />
        </form>
      </div>
      <div className="hidden sm:flex gap-6">
        <button className="hover:bg-gray-900 rounded-md px-3 py-2">Singin</button>
        <VscAccount className="text-2xl cursor-pointer mt-2" />
        <div className="mt-2">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
