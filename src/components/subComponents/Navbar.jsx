import React from "react";
import { useRecoilValue } from "recoil";
import { UserAtom } from "../atoms/UserAtom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = useRecoilValue(UserAtom);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between border-b-2 border-gray-100 h-14">
      <div className="flex px-8 mt-6 mb-4 gap-8 items-center justify-center">
        <h1
          className="sacramento cursor-pointer transition duration-300 hover:scale-110"
          style={{ fontSize: "1.6rem" }}
          onClick={() => navigate("/")}
        >
          dribble
        </h1>
        <div>
          <ul className="flex gap-8  justify-center items-center text-[0.8rem] text-gray-500">
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
      <div className="flex justify-center items-center px-8 my-2 gap-4">
        <div className="flex justify-start items-center gap-1 text-[0.7rem] text-gray-400  bg-gray-100 rounded-md px-2 w-28 h-8">
          <img
            className="size-5 cursor-pointer"
            src="/search.svg"
            alt="search icon"
          />
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
        <div className="size-9">
          {user ? (
            <img
              className="size-9  rounded-full cursor-pointer"
              src={user.image}
              alt="profile"
            />
          ) : (
            <div className="size-9 rounded-full bg-gray-200 cursor-pointer"></div>
          )}
        </div>
        <button className="text-white text-[0.8rem] text-center bg-pink-500 p-2 rounded-lg">
          Upload
        </button>
      </div>
    </div>
  );
}
