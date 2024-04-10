import { motion } from "framer-motion";
import React from "react";

export default function SignupImg() {
  return (
    <div className="h-full w-[80%] bg-[#f2d184] mb-40 sm:mb-0">
      <div className="  bg-[#f2d184] h-[40%] sm:h-[15%] w-full px-[4rem] pt-[4rem] leading-[1.5rem] z-50 relative ">
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
          <p className=" text-[#7F5B0F] pt-8 roboto  ">
            Discover the world's top
          </p>
          <p className="text-[#7F5B0F]   roboto  ">
            Designers & Creatives.
          </p>
        </motion.div>
      </div>
      <div className="relative h-auto  self-center flex justify-center items-start z-0">
        <img className=" h-1/2 " src="/landingImg.png" alt="img" />
        <motion.p
          initial={{ x: "-50vw" }}
          animate={{ x: "0vw", transition: { duration: 1.5 } }}
          className="absolute bottom-5 left-14 text-yellow-800 text-[0.8rem]"
        >
          <p className="absolute bottom-0 left-0 min-w-[10rem]">
            Art by <span className="underline ">Peter Tarka</span>
          </p>
        </motion.p>
      </div>
      <div className="md:h-[39%] bg-[#f2d184]  w-full"></div>
    </div>
  );
}
