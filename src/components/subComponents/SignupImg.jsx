import React from "react";

export default function SignupImg() {
  return (
    <div className="h-screen overflow-hidden">
      {/* <div className="absolute top-0"> */}
      <div className="  bg-[#f2d184] h-[9rem] w-[28rem] px-[3rem] pt-[2rem] leading-[1.5rem] ">
        <h1 className="text-[#A78339] sacramento text-[2rem] font-bold ">
          dribbble
        </h1>
        <p className=" text-[#7F5B0F] font-sans text-[1.5rem] font-bold pt-8 roboto ">
          Discover the world's top
        </p>
        <p className="text-[#7F5B0F] font-sans text-[1.5rem] font-extrabold roboto ">
          Designers & Creatives.
        </p>
      </div>
      <div className="relative pb-2">
        <img className=" h-[26rem] w-[28rem]" src="/landingImg.png" alt="img" />
        <p className="absolute bottom-5 left-14 text-yellow-800 text-[0.8rem]">
          Art by <span className="underline">Peter Tarka</span>
        </p>
      </div>
    </div>
  );
}
