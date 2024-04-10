import React from "react";
import { useRecoilValue } from "recoil";
import { UserAtom } from "../atoms/UserAtom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = useRecoilValue(UserAtom);
  const navigate = useNavigate();
  return (
    <div className="flex  justify-between border-b-2 border-gray-100 h-auto ">
      <div className="flex px-4 md:px-12 mt-4  md:gap-8 items-center justify-center">
        <h1
          className="sacramento pt-2 cursor-pointer transition duration-300 hover:scale-125"
          style={{ fontSize: "2.2rem" }}
          onClick={() => navigate("/")}
        >
          dribble
        </h1>
        <div>
          <ul className="hidden md:flex gap-8  justify-center items-center text-[1rem] text-gray-500">
            <li className="font-sans font-bold tracking-tight cursor-pointer transition duration-300 hover:scale-110">
              Inspiration
            </li>
            <li className="font-sans font-bold tracking-tight cursor-pointer transition duration-300 hover:scale-110">
              Find Work
            </li>
            <li className="font-sans font-bold tracking-tight cursor-pointer transition duration-300 hover:scale-110">
              Learn Design
            </li>
            <li className="font-sans font-bold tracking-tight cursor-pointer transition duration-300 hover:scale-110">
              Go Pro
            </li>
            <li className="font-sans font-bold tracking-tight cursor-pointer transition duration-300 hover:scale-110">
              Hire Designers
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center pr-2 lg:pr-8 my-2 gap-4">
        <div className="flex justify-start items-center gap-1 text-[0.8rem] text-gray-400  bg-gray-100 rounded-lg px-2 w-10 md:w-36 h-10">
          <img
            className="size-7 cursor-pointer"
            src="/search.svg"
            alt="search icon"
          />
          <input
            className="customInputLocation h-full w-full bg-transparent text-[1rem] outline-none hidden md:inline-block "
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
        </div>
        <div>
          <img
            className="h-10 cursor-pointer"
            src="/navbarIcon.png"
            alt="icon"
          />
        </div>
        <div className="size-12">
          {user.image ? (
            <img
              className="size-12  rounded-full cursor-pointer"
              src={user.image}
              alt="profile"
            />
          ) : (
            <div className="size-12 rounded-full bg-gray-200 cursor-pointer"></div>
          )}
        </div>
        <button className="text-white text-[1rem] text-center bg-[#EA4B8B] p-2 px-4 rounded-lg">
          Upload
        </button>
      </div>
    </div>
  );
}
