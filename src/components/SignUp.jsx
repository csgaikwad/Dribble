import React from "react";
import SignupImg from "./subComponents/SignupImg";
import SignupPart from "./subComponents/SignupPart";
import { motion } from "framer-motion";

export default function SignUp() {
  return (
    <div className="h-screen w-screen flex flex-col sm:grid-cols-2 md:grid lg:grid-cols-3 gap-2 lg:overflow-hidden">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0vw", transition: { duration: 0.5 } }}
      >
        <SignupImg />
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0vw", transition: { duration: 0.5 } }}
        className="lg:col-span-2"
      >
        <SignupPart />
      </motion.div>
    </div>
  );
}
