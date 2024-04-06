import React from "react";
import SignupImg from "./subComponents/SignupImg";
import SignupPart from "./subComponents/SignupPart";

export default function SignUp() {
  return (
    <div className="sm:grid grid-cols-2 gap-2">
      <SignupImg/>
      <SignupPart/>
    </div>
  );
}
