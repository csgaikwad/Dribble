import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between border-b-2 border-gray-100 h-14">
      <div className="flex px-8 mt-6 mb-4 gap-8 items-center justify-center">
        <h1 className="sacramento " style={{ fontSize: "1.6rem" }}>
          dribble
        </h1>
        <div>
          <ul className="flex gap-8  justify-center items-center text-[0.8rem] text-gray-500">
            <li className="font-sans font-bold tracking-tight">Inspiration</li>
            <li className="font-sans font-bold tracking-tight">Find Work</li>
            <li className="font-sans font-bold tracking-tight">Learn Design</li>
            <li className="font-sans font-bold tracking-tight">Go Pro</li>
            <li className="font-sans font-bold tracking-tight">
              Hire Designers
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center px-8 my-2 gap-4">
        <div className="flex justify-start items-center gap-1 text-[0.7rem] text-gray-400  bg-gray-100 rounded-md px-2 w-28 h-8">
          <img className="size-5 cursor-pointer" src="/search.svg" alt="search icon" />
          <input
            className="customInputLocation h-full w-full bg-transparent outline-none "
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
        </div>
        <div>
          <img
            className="h-7 cursor-pointer"
            src="/navbarIcon.png"
            alt="icon"
          />
        </div>
        <div className="size-7 rounded-full bg-red-500 cursor-pointer"></div>
        <button className="text-white text-[0.8rem] text-center bg-pink-500 p-2 rounded-lg">
          Upload
        </button>
      </div>
    </div>
  );
}
