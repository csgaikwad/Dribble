import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      className=" h-screen w-full cursor-pointer bg-[#f2d184] flex flex-col justify-end items-center"
      onClick={() => {
        navigate("/signup");
      }}
    >
          <h1 className="heartbeat linearGradient font-serif text-center w-1/2 z-10 absolute top-20 text-[2rem]  underline">Welcome, Click here to create an account</h1>
        <img
          className="w-screen md:h-[30rem] md:w-auto  cursor-pointer md:z-0 "
          src="/landingImg.png"
          alt="landingImage"
        />
      </div>
  );
}
