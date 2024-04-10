import React from "react";
import SignupImg from "./subComponents/SignupImg";
import SignupPart from "./subComponents/SignupPart";
import { motion } from "framer-motion";

export default function SignUp() {
  return (
    <div className="h-screen w-screen sm:grid grid-cols-2 gap-2 md:overflow-hidden">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0vw", transition: { duration: 0.5 } }}
      >
        <SignupImg />
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0vw", transition: { duration: 0.5 } }}
      >
        <SignupPart />
      </motion.div>
    </div>
  );
}
