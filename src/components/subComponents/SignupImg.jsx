import { motion } from "framer-motion";
import React from "react";

export default function SignupImg() {
  return (
    <div className="h-screen ">
      <div className="  bg-[#f2d184] h-[9rem] w-[28rem] px-[3rem] pt-[2rem] leading-[1.5rem] ">
        <motion.h1
          initial={{ x: "-50vw" }}
          animate={{ x: "0vw", transition: { duration: 1 } }}
          className="text-[#A78339] sacramento   "
        >
          dribble
        </motion.h1>
        <motion.div
          initial={{ x: "-50vw" }}
          animate={{ x: "0vw", transition: { duration: 2 } }}
        >
          <p className=" text-[#7F5B0F] font-sans  font-bold pt-8 roboto ">
            Discover the world's top
          </p>
          <p className="text-[#7F5B0F] font-sans text-[1.5rem] font-extrabold roboto ">
            Designers & Creatives.
          </p>
        </motion.div>
      </div>
      <div className="relative">
        <img className=" h-[26rem] w-[28rem]" src="/landingImg.png" alt="img" />
        <motion.p
          initial={{ x: "-50vw" }}
          animate={{ x: "0vw", transition: { duration: 1.5 } }}
          className="absolute bottom-5 left-14 text-yellow-800 text-[0.8rem]"
        >
          Art by <span className="underline">Peter Tarka</span>
        </motion.p>
      </div>
      <div className="h-[39%] bg-[#f2d184]  w-[28rem]"></div>
    </div>
  );
}
