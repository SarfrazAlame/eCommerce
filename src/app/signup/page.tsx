import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full  flex justify-center items-center mt-12">
      <div className="border border-gray-700 rounded p-12">
        <h1 className="text-3xl text-gray-800">Sign In Now</h1>
        <div className="mt-4">
          <form action="post" className="">
            <div className="flex flex-col">
              <label className="my-1">Username</label>
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-700 rounded py-2"
              />
            </div>

            <div className="flex flex-col">
              <label className="my-1">Email</label>
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-700 rounded py-2"
              />
            </div>

            <div className="flex flex-col">
              <label className="my-1">Password</label>
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-700 rounded py-2"
              />
            </div>

            <div className="border border-gray-600 mt-7 py-2 rounded text-center bg-gray-700 text-white">
              <button className="">submit</button>
            </div>

            <div className="flex mt-1">
              <p>already have an account?</p>{" "}
              <span className="text-blue-700">
                <Link href={"/signin"}>Sign in</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
